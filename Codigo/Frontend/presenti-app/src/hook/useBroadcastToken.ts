// hooks/useBroadcastToken.ts
import { useState, useCallback, useEffect } from 'react';
import { bleService } from '@/services/bluetooth/ble';
import { aulaService } from '@/services/api/aulaService';

export type BroadcastStatus = 'idle' | 'loading' | 'broadcasting' | 'error';

export function useBroadcastToken(aulaId: string | number = "teste") {
  const [status, setStatus] = useState<BroadcastStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const startBroadcast = useCallback(async () => {
    if (status === 'broadcasting') return;

    try {
      setStatus('loading');
      setErrorMsg(null);

      // 1. Busca o token no backend
      const fetchedToken = "asaad" //|| await aulaService.getToken(aulaId);
      setToken(fetchedToken);

      // 2. Inicia o broadcast BLE com o token
      await bleService.startBroadcasting(fetchedToken);

      setStatus('broadcasting');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message ?? 'Erro ao iniciar chamada.');
    }
  }, [aulaId, status]);

  const stopBroadcast = useCallback(async () => {
    await bleService.stopBroadcasting();
    setStatus('idle');
    setToken(null);
  }, []);

  // Para o broadcast ao desmontar a tela
  useEffect(() => {
    return () => {
      bleService.stopBroadcasting();
    };
  }, []);

  return { status, errorMsg, token, startBroadcast, stopBroadcast };
}
