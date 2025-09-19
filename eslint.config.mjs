import { defineConfig, globalIgnores } from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/*.js', '**/dist', '**/.yalc', 'src/api/gql/**/*']),
  {
    extends: compat.extends(
      'airbnb-base',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    settings: {
      'import/resolver': {
        typescript: {},
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'import/no-unresolved': 'error',
      'import/prefer-default-export': 'off',
      'no-useless-constructor': 'off',
      'class-methods-use-this': 'off',
      'no-empty-function': 'off',
      'no-underscore-dangle': 'off',

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],

      'lines-between-class-members': [
        'error',
        {
          enforce: [
            {
              blankLine: 'always',
              prev: 'method',
              next: 'method',
            },
          ],
        },
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.ts', '**/*.spec.ts', '!**/src/**'],
        },
      ],
    },
  },
]);
