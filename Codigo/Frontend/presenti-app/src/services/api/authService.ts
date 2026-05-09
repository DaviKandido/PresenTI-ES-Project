import { apiClient } from './apiClient';


// Defina as interfaces de resposta para ter IntelliSense no código todo
interface LoginResponse {
  token: string;
  user: {
    id: string;
    nome: string;
    email: string;
  };
}

export const authService = {
  login: async (dados: any) => {
    return apiClient.post<LoginResponse>('/auth/login', dados);
  },

  verificarToken: async (token: string) => {
    return apiClient.post('/auth/verify', { token });
  },
};
