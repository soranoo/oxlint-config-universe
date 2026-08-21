import { defineConfig } from 'oxlint';

/**
 * TypeScript-specific rules.
 */
export default defineConfig({
  plugins: ['typescript'],
  rules: {
    'typescript/array-type': ['warn', { default: 'array' }],
    'typescript/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
    ],
    'typescript/no-duplicate-enum-values': 'warn',
    'typescript/no-empty-object-type': ['warn', { allowInterfaces: 'with-single-extends' }],
    'typescript/no-extra-non-null-assertion': 'warn',
    'typescript/no-misused-new': 'warn',
    'typescript/no-unsafe-declaration-merging': 'warn',
    'typescript/no-unnecessary-parameter-property-assignment': 'warn',
    'typescript/no-useless-empty-export': 'warn',
    'typescript/no-wrapper-object-types': 'warn',
    'typescript/triple-slash-reference': 'warn',

    // The typescript-eslint FAQ recommends turning off "no-undef" in favor
    // of letting tsc check for undefined variables, including types
    'no-undef': 'off',
  },
});
