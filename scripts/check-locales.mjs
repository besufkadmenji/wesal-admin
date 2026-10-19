// S4-48: the Dictionary type comes from en.json, so a key missing from
// ar.json still compiles and renders blank in Arabic. Run with
// `pnpm run check:locales`; exits 1 and lists offenders when the files drift.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (lang) =>
  JSON.parse(
    readFileSync(join(root, "src/config/i18n/locales", `${lang}.json`), "utf8"),
  );

const flatten = (tree, prefix = "", out = new Map()) => {
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flatten(value, path, out);
    } else {
      out.set(path, value);
    }
  }
  return out;
};

const tokens = (value) =>
  typeof value === "string"
    ? (value.match(/\{\{?\w+\}?\}/g) ?? []).sort().join()
    : "";

const ar = flatten(read("ar"));
const en = flatten(read("en"));
const problems = [];
for (const key of en.keys()) {
  if (!ar.has(key)) problems.push(`missing in ar.json: ${key}`);
}
for (const key of ar.keys()) {
  if (!en.has(key)) problems.push(`missing in en.json: ${key}`);
}
for (const [key, value] of en) {
  if (!ar.has(key)) continue;
  const other = ar.get(key);
  if (
    Array.isArray(value) !== Array.isArray(other) ||
    typeof value !== typeof other
  ) {
    problems.push(`different value types: ${key}`);
  } else if (tokens(value) !== tokens(other)) {
    problems.push(`different placeholders: ${key}`);
  }
}
// Empty in both is deliberate (e.g. checkbox column headers); in one only is not.
for (const [key, value] of en) {
  if (ar.has(key) && (value === "") !== (ar.get(key) === "")) {
    problems.push(`empty in one language only: ${key}`);
  }
}

if (problems.length) {
  console.error(`Locale files are out of step (${problems.length}):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}
console.log(`Locale files match (${en.size} keys).`);
