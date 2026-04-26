/*
 Exemplos de validações helpers que podem ser usadas em componentes
*/

export const Validators = {
  // Valida e-mail institucional da PUC
  isPucEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@pucminas\.br$/i;
    return emailRegex.test(email);
  },

  // Verifica se um campo não está vazio ou apenas com espaços
  isNotEmpty: (value: string): boolean => {
    return value.trim().length > 0;
  },

  // Valida formato de token (baseado na sua arquitetura BLE)
  isValidBleToken: (token: string): boolean => {
    return /^[A-Z0-9]{6,10}$/.test(token);
  },
};
