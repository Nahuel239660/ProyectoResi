import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'src/data/schemas/schema.ts',
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
    },
  },
}

export default config
