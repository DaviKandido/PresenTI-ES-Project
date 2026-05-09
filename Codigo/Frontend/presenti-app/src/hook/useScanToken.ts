// hooks/useScanToken.ts
import { useState, useCallback, useEffect, useRef } from 'react';
import { bleService } from '@/services/bluetooth/ble';
import api from '@/services/api/api';

export type ScanStatus = 'idle' | 'scanning' | 'registering' | 'success' | 'error';

export interface UseScanTokenOptions {
  /** Inicia o scan automaticamente ao montar. Default: true */
  autoStart?: boolean;
  /** Endpoint para registrar a presença. Default: '/presencas' */
  endpoint?: string;
}

export interface UseScanTokenReturn {
  status: ScanStatus;
  message: string;
  start: () => Promise<void>;
  stop: () => void;
  reset: () => void;
}

const MESSAGES: Record<ScanStatus, string> = {
  idle: 'Pronto para buscar token.',
  scanning: 'Aguardando token do professor...',
  registering: 'Lendo token do professor...',
  success: 'Presença cadastrada!',
  error: 'Erro ao registrar no servidor.',
};

export function useScanToken({ autoStart = true, endpoint = '/presencas' }: UseScanTokenOptions = {}): UseScanTokenReturn {
  const [status, setStatus] = useState<ScanStatus>('idle');
  const [message, setMessage] = useState(MESSAGES.idle);

  // Evita atualizações de estado após desmontagem
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const safeSet = useCallback((s: ScanStatus, msg?: string) => {
    if (!mountedRef.current) return;
    setStatus(s);
    setMessage(msg ?? MESSAGES[s]);
  }, []);

  const stop = useCallback(() => {
    bleService.stopScanning();
    if (mountedRef.current) safeSet('idle');
  }, [safeSet]);

  const start = useCallback(async () => {
    // Não inicia se já está rodando ou teve sucesso
    if (status === 'scanning' || status === 'registering' || status === 'success') return;

    safeSet('scanning');

    await bleService.startScanning({
      onTokenFound: async (token) => {
        bleService.stopScanning();
        safeSet('registering');

        try {
          await api.post(endpoint, { token });
          safeSet('success');
        } catch (err: any) {
          const detail = err?.response?.data?.message ?? err?.message;
          safeSet('error', detail ? `Erro: ${detail}` : MESSAGES.error);
        }
      },

      onError: (msg) => {
        safeSet('error', msg);
      },
    });
  }, [status, endpoint, safeSet]);

  const reset = useCallback(() => {
    bleService.stopScanning();
    safeSet('idle');
  }, [safeSet]);

  // Auto-start + cleanup ao desmontar
  useEffect(() => {
    if (autoStart) start();
    return () => {
      bleService.stopScanning();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intencional: roda só uma vez na montagem

  return { status, message, start, stop, reset };
}
