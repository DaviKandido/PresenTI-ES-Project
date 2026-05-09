// services/api/aulaService.ts
import { apiClient } from './apiClient';

export interface TokenAulaResponse {
  token: string;
}

export const aulaService = {
  async getToken(aulaId: string | number): Promise<string> {
    const data = await apiClient.get<TokenAulaResponse>(`/aula/token?aulaId=${aulaId}`);
    return data.token;
  },
};

export default aulaService;