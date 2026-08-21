import { defineConfig } from 'oxlint';

import core from './shared/core.js';
import typescript from './shared/typescript.js';

/** @type {import('oxlint').OxlintConfig} */
const config = defineConfig({
  extends: [core, typescript],
});

export default config;
