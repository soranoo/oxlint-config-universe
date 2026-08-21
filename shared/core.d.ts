/**
 * Core rules shared across all presets.
 *
 * Only includes non-formatting rules that oxlint supports.
 * Formatting rules (spacing, semicolons, indentation, etc.) are intentionally
 * omitted — use oxfmt for those.
 *
 * Rules not available in oxlint are documented in the README.
 */
/** @type {import('oxlint').OxlintConfig} */
declare const config: import('oxlint').OxlintConfig;
export default config;
