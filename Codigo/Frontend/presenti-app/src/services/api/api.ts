import axios from 'axios';

/**
 * Instância base do Axios.
 * Se estiver usando emulador Android, use o IP da sua máquina ou '10.0.2.2' em vez de 'localhost'.
 */
const api = axios.create({
  baseURL: 'http://192.168.1.10:3000', // Substitua pelo IP do seu servidor
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para injetar token ou tratar erros globais
api.interceptors.request.use(
  (config) => {
    // Exemplo: const token = await AsyncStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
