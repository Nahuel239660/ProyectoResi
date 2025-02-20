import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginNode from 'eslint-plugin-node';
import prettier from 'eslint-config-prettier';

export default [
  // 📌 Ignorar directorios innecesarios
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'public',
      'coverage',
      '.eslintcache',
      '.vscode/',
    ],
  },

  // 📌 Configuración para frontend (React + TypeScript)
  {
    files: ['frontend/src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 📌 Configuración para backend (Node.js + TypeScript)
  {
    files: ['backend/src/**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/no-unsupported-features/es-syntax': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // 📌 Reglas generales para ambos entornos
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
];
