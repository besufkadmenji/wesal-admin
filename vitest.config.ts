import path from "node:path";
import { defineConfig, type Plugin } from "vitest/config";

/** SVGs are React components via SVGR in Next; tests get a plain stub. */
const svgStub = (): Plugin => ({
  name: "svg-stub",
  enforce: "pre",
  resolveId(id) {
    return id.endsWith(".svg") ? "\0svg-stub" : null;
  },
  load(id) {
    if (id !== "\0svg-stub") return null;
    return `import { createElement } from "react";
export default (props) => createElement("svg", props);`;
  },
});

export default defineConfig({
  plugins: [svgStub()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.spec.{ts,tsx}"],
  },
});
