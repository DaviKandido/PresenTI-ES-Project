import { AxiosRequestConfig } from 'axios';
import api from './api';

/**
 * Cliente genérico para abstrair a repetição de '.data' e permitir tipagem.
 */
export const apiClient = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.get<T>(url, config);
    return response.data;
  },

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.post<T>(url, data, config);
    return response.data;
  },

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.put<T>(url, data, config);
    return response.data;
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.delete<T>(url, config);
    return response.data;
  },

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.patch<T>(url, data, config);
    return response.data;
  },
};
