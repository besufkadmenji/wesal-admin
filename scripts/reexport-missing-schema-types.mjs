import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const graphqlPath = path.join(root, "src/gql/graphql.ts");
const schemaPath = path.join(root, "src/gql/schema.ts");
const start = "// <schema-object-types>";
const end = "// </schema-object-types>";
const graphql = fs.readFileSync(graphqlPath, "utf8");
const schema = fs.readFileSync(schemaPath, "utf8");
const existing = new Set(
  [...graphql.matchAll(/^export (?:type |enum |const )?(\w+)/gm)].map(
    (match) => match[1],
  ),
);
const skip = new Set([
  "Maybe",
  "InputMaybe",
  "Exact",
  "MakeOptional",
  "MakeMaybe",
  "MakeEmpty",
  "Incremental",
  "Scalars",
  "Query",
  "Mutation",
  "Subscription",
]);
const missing = [
  ...new Set(
    [...schema.matchAll(/^export type (\w+)(?:<[^>]*>)? =/gm)].map(
      (match) => match[1],
    ),
  ),
].filter((name) => !existing.has(name) && !skip.has(name));
const base = graphql.includes(start)
  ? `${graphql.slice(0, graphql.indexOf(start)).trimEnd()}\n`
  : graphql;
const block = `${start}
export type {
  ${missing.join(",\n  ")},
} from './schema';
${end}
`;
fs.writeFileSync(graphqlPath, `${base.trimEnd()}\n\n${block}`);
