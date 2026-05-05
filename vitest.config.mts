import path from 'node:path';

import dotenv from 'dotenv';
import { defineConfig } from 'vitest/config';

const { parsed } = dotenv.config({
  path: path.resolve(process.cwd(), '.env.test'),
  quiet: true,
});

export default defineConfig({
  test: {
    env: {
      ...process.env,
      ...(parsed ?? {}),
    },
  },
  // https://github.com/vitest-dev/vitest/issues/4605
  resolve: {
    tsconfigPaths: true,
    alias: {
      'graphql/language/printer': 'graphql/language/printer.js',
      'graphql/language': 'graphql/language/index.js',
      graphql: 'graphql/index.js',
    },
  },
});
