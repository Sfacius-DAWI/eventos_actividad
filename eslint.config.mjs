import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Configuración base de ESLint para JavaScript
  {
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Aplicar Prettier como regla de ESLint
      quotes: ['error', 'single'], // Usar comillas simples
      semi: ['error', 'always'], // Obligatorio el punto y coma
      'no-unused-vars': 'warn', // Advertir sobre variables no usadas
      'no-console': 'warn',
      'prettier/prettier': ['error', { singleQuote: true }], // Advertir sobre el uso de console.log
    },
  },
  // Agrega la configuración de Prettier como un objeto (no un string)
  prettierConfig,
];
