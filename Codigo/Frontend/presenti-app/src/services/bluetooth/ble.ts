// services/bluetooth/ble.ts

import { PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
import { BleManager, State } from 'react-native-ble-plx';
import BLEAdvertise from 'react-native-ble-advertise';
import { Buffer } from 'buffer';

const BEACON_UUID = '44C13E43-097A-9C9F-537F-5666A6840C08';
const COMPANY_ID = 0x00e0;
const TOKEN_MAX_LENGTH = 4;
const DEDUP_COOLDOWN_MS = 10_000;

export type BLEMode = 'sender' | 'receiver';

export interface ScanCallbacks {
  onTokenFound: (token: string) => void;
  onError: (message: string) => void;
}

class BluetoothAttendanceService {
  private readonly manager: BleManager;
  private readonly tokenCache = new Map<string, number>();
  private isScanning = false;
  private isBroadcasting = false;

  constructor() {
    this.manager = new BleManager();
  }

  // ───────────────────────────────────────────────────────────────
  // PERMISSÕES
  // ───────────────────────────────────────────────────────────────

  async requestPermissions(mode: BLEMode): Promise<boolean> {
    if (Platform.OS !== 'android') return true;

    const apiLevel = Number(Platform.Version);
    const required: string[] = [];

    if (apiLevel >= 31) {
      if (mode === 'sender') {
        required.push(PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE);
      } else {
        required.push(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN, PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);
      }
    }

    required.push(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    const results = await PermissionsAndroid.requestMultiple(required as any);

    // Verifica se alguma permissão foi negada permanentemente
    const permanentlyDenied = Object.entries(results).some(([, status]) => status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN);

    if (permanentlyDenied) {
      Alert.alert(
        'Permissão necessária',
        'A permissão de Bluetooth foi negada permanentemente. Abra as configurações do app e conceda a permissão manualmente.',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Abrir Configurações',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
      return false;
    }

    const allGranted = Object.values(results).every((status) => status === PermissionsAndroid.RESULTS.GRANTED);

    if (!allGranted) {
      Alert.alert('Permissão negada', 'Para usar a chamada via Bluetooth, conceda todas as permissões solicitadas.');
    }

    return allGranted;
  }

  // ───────────────────────────────────────────────────────────────
  // TRANSMISSOR — Professor
  // ───────────────────────────────────────────────────────────────

  async startBroadcasting(token: string): Promise<void> {
    if (this.isBroadcasting) {
      throw new Error('[PresenTI] Já existe uma transmissão ativa. Chame stopBroadcasting() primeiro.');
    }

    const hasPermission = await this.requestPermissions('sender');
    if (!hasPermission) {
      throw new Error('[PresenTI] Permissão de Bluetooth negada para transmissão.');
    }

    const sanitizedToken = this.sanitizeToken(token);
    if (!sanitizedToken) {
      throw new Error('[PresenTI] Token inválido ou vazio após sanitização.');
    }

    const { major, minor } = this.encodeToken(sanitizedToken);

    const advertiser = BLEAdvertise as any;
    advertiser.setCompanyId(COMPANY_ID);
    await advertiser.broadcast(BEACON_UUID, major, minor);

    this.isBroadcasting = true;
    console.info(`[PresenTI] Transmissão iniciada → token: "${sanitizedToken}" | major: ${major} | minor: ${minor}`);
  }

  async stopBroadcasting(): Promise<void> {
    if (!this.isBroadcasting) return;

    const advertiser = BLEAdvertise as any;
    await advertiser.stopBroadcast();

    this.isBroadcasting = false;
    console.info('[PresenTI] Transmissão encerrada.');
  }

  // ───────────────────────────────────────────────────────────────
  // RECEPTOR — Aluno
  // ───────────────────────────────────────────────────────────────

  async startScanning(callbacks: ScanCallbacks): Promise<void> {
    if (this.isScanning) {
      console.warn('[PresenTI] Scan já está em andamento.');
      return;
    }

    const hasPermission = await this.requestPermissions('receiver');
    if (!hasPermission) {
      callbacks.onError('[PresenTI] Permissão de Bluetooth negada para scan.');
      return;
    }

    this.isScanning = true;

    const run = () => {
      this.manager.startDeviceScan(null, { allowDuplicates: true }, (_error, device) => {
        if (_error) {
          this.stopScanning();
          callbacks.onError(`[PresenTI] Erro no scan: ${_error.message}`);
          return;
        }

        const token = this.extractToken(device?.manufacturerData);
        if (token && this.shouldNotify(token)) {
          this.markToken(token);
          console.info(`[PresenTI] Token recebido: "${token}"`);
          callbacks.onTokenFound(token);
        }
      });
    };

    const currentState = await this.manager.state();
    if (currentState === State.PoweredOn) {
      run();
    } else {
      const sub = this.manager.onStateChange((newState) => {
        if (newState === State.PoweredOn) {
          sub.remove();
          run();
        }
      }, true);
    }
  }

  stopScanning(): void {
    if (!this.isScanning) return;

    this.manager.stopDeviceScan();
    this.isScanning = false;
    this.tokenCache.clear();

    console.info('[PresenTI] Scan encerrado.');
  }

  get broadcasting(): boolean {
    return this.isBroadcasting;
  }
  get scanning(): boolean {
    return this.isScanning;
  }

  // ───────────────────────────────────────────────────────────────
  // HELPERS PRIVADOS
  // ───────────────────────────────────────────────────────────────

  private sanitizeToken(raw: string): string {
    return raw
      .replace(/[^\x20-\x7E]/g, '')
      .slice(0, TOKEN_MAX_LENGTH)
      .trim();
  }

  private encodeToken(token: string): { major: number; minor: number } {
    const padded = token.padEnd(TOKEN_MAX_LENGTH, '\0');
    const major = ((padded.charCodeAt(0) & 0xff) << 8) | (padded.charCodeAt(1) & 0xff);
    const minor = ((padded.charCodeAt(2) & 0xff) << 8) | (padded.charCodeAt(3) & 0xff);
    return { major, minor };
  }

  private extractToken(manufacturerDataBase64?: string | null): string | null {
    if (!manufacturerDataBase64) return null;

    try {
      const hex = Buffer.from(manufacturerDataBase64, 'base64').toString('hex').toUpperCase();
      const uuidHex = BEACON_UUID.replace(/-/g, '').toUpperCase();
      const uuidIndex = hex.indexOf(uuidHex);

      if (uuidIndex === -1) return null;

      const majorStart = uuidIndex + uuidHex.length;
      const minorStart = majorStart + 4;
      const majorHex = hex.slice(majorStart, majorStart + 4);
      const minorHex = hex.slice(minorStart, minorStart + 4);

      if (majorHex.length !== 4 || minorHex.length !== 4) return null;

      const major = parseInt(majorHex, 16);
      const minor = parseInt(minorHex, 16);

      const decoded = String.fromCharCode((major >> 8) & 0xff, major & 0xff, (minor >> 8) & 0xff, minor & 0xff)
        .replace(/\0/g, '')
        .trim();

      return decoded.length > 0 ? decoded : null;
    } catch (error) {
      console.warn('[PresenTI] Falha ao extrair token do manufacturerData:', error);
      return null;
    }
  }

  private shouldNotify(token: string): boolean {
    const lastSeen = this.tokenCache.get(token);
    if (!lastSeen) return true;
    return Date.now() - lastSeen > DEDUP_COOLDOWN_MS;
  }

  private markToken(token: string): void {
    this.tokenCache.set(token, Date.now());
  }
}

export const bleService = new BluetoothAttendanceService();
