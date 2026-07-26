import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    process.env.GRAPHQL_SCHEMA_URL ??
    "https://wesal-api.testing3000.cloud/graphql",
  documents: ["src/**/*.ts", "!src/gql/**"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        skipTypename: true,
        enumType: "native",
        scalars: {
          ID: "string",
          DateTime: "string",
          JSON: "unknown",
          Upload: "File",
        },
      },
    },
    "src/gql/schema.ts": {
      plugins: ["typescript"],
      config: {
        skipTypename: true,
        enumType: "native",
        scalars: {
          ID: "string",
          DateTime: "string",
          JSON: "unknown",
          Upload: "File",
        },
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: ["node ./scripts/reexport-missing-schema-types.mjs"],
  },
};

export default config;
