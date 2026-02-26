import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ],
  ),
  {
    plugins: {
      '@stylistic': stylistic,
    },
		rules: {
      'prefer-const': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-imports': 'error',
      'no-undef': 'error',
      'no-unreachable': 'warn',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-vars': 'warn',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'warn',
      'valid-typeof': 'warn',
      camelcase: 'warn',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-unused-expressions': 'error',
			'@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/eol-last': ['error', 'never'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-wrap-multilines': 'error',
      '@stylistic/no-trailing-spaces': 'error',

		},
	},
]);

export default eslintConfig;