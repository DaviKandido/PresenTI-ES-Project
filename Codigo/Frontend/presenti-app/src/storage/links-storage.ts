/*
 Async Storage
  - Biblioteca para armazenamento local em React Native
  - Permite salvar dados de forma persistente no dispositivo
  - Utiliza uma API simples baseada em chave-valor
  - Suporta operações assíncronas para evitar bloqueios na interface do usuário

  Chave: valor
  "name": "John Doe"
  "age": 30
  "isLoggedIn": true

  Operações comuns:
  - setItem(chave, valor): Salva um item no armazenamento
  - getItem(chave): Recupera um item do armazenamento
  - removeItem(chave): Remove um item do armazenamento
  - clear(): Limpa todo o armazenamento

  Exemplo de uso:
  import AsyncStorage from '@react-native-async-storage/async-storage';

  /// Salvar um item
  await AsyncStorage.setItem('name', 'John Doe');

  /// Recuperar um item
  const name = await AsyncStorage.getItem('name');
  console.log(name); // Output: John Doe

  /// Remover um item
  await AsyncStorage.removeItem('name');

  /// Limpar todo o armazenamento
  await AsyncStorage.clear();
*/

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Usuario } from "@/@types/usuario";

// Chave para armazenar os links -> nome do app @ nome da coleção
const LINKS_STORAGE_KEY = "presentiApp@tokens";

export type TokenStorage = {
  token: string;
  user?: Usuario;
};


 async function get(): Promise<TokenStorage> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : { token: "" };

  return response as TokenStorage;
}

 async function save(newToken: TokenStorage): Promise<void> {
  try {

    const updatedStorage = JSON.stringify(newToken);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updatedStorage);

  } catch (error) {
    throw error;
  }
}


 async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(LINKS_STORAGE_KEY);
  } catch (error) {
    throw error;
  }
}

export const tokenStorage = {
  get,
  save,
  clear,
};
