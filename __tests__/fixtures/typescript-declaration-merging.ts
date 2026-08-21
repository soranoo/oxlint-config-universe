export const Level = {
  Info: 'info',
  Error: 'error',
} as const;

export type Level = (typeof Level)[keyof typeof Level];
