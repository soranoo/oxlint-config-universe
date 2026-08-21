import { defineConfig } from 'oxlint';

import core from './shared/core.js';
import typescript from './shared/typescript.js';

/** @type {import('oxlint').OxlintConfig} */
const config = defineConfig({
  extends: [core, typescript],
  env: { node: true },
  rules: {
    'node/no-path-concat': 'warn',
    // no-buffer-constructor is not supported by oxlint — see README
  },
});

export default config;
