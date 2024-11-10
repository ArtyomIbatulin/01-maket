import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@typescript-eslint': typescriptEslintPlugin,
      import: eslintPluginImport,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
