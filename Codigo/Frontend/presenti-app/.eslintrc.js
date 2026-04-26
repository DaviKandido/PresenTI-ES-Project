module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    reactnative: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',

    // Remove imports não usados automaticamente
    'unused-imports/no-unused-imports': 'error',

    // Melhor controle de variáveis não usadas
    '@typescript-eslint/no-unused-vars': 'off',

    // Organização de imports
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
