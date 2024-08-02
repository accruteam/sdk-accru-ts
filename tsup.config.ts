import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  format: ['cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: !options.watch,
}));
