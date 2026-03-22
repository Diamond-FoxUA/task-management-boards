import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      globals: globals.node,
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',

      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',

      'prefer-const': 'warn',
    },
  },

  prettier,
]);
