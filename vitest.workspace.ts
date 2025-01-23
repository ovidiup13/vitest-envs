import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      name: 'happy-dom',
      globals: true,
      root: './',
      include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: ['node_modules', '**/*.node.{test,spec}.?(c|m)[jt]s?(x)'],
      environment: 'happy-dom',
      setupFiles: ['./vitest-setup.happy-dom.ts'],
    },
  },
  {
    test: {
      name: 'node',
      globals: true,
      root: './src',
      include: ['**/*.node.{test,spec}.?(c|m)[jt]s?(x)'],
      environment: 'node',
      setupFiles: ['./vitest-setup.node.ts'],
    },
  },
]);
