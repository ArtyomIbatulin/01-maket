import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['node_modules', 'dist', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    files: ['**/*.{ts, tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prefer-const': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
    },
  }
);
