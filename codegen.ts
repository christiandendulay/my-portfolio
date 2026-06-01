import dotenv from 'dotenv';
dotenv.config();

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.json', // Use the pulled schema
  generates: {
    './types/contentful.ts': {
      plugins: ['typescript'],
      config: {
        skipTypename: false,
      },
    },
  },
};

export default config;
