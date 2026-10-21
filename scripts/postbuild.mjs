// GitHub Pages: create a copy of index.html for every page so that
// opening a page URL directly (or reloading it) works and returns 200.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const outDir = "out";
const routes = [
  "tokutei",
  "privacy",
  "terms",
  "services/pro-estate",
  "services/prosku",
  "services/marketing-quest",
  "services/enghouse",
  "services/prodesign",
  "services/pro-online",
];

const index = join(outDir, "index.html");
for (const route of routes) {
  // "privacy" -> out/privacy.html (GitHub Pages serves it at /privacy)
  const file = join(outDir, `${route}.html`);
  mkdirSync(dirname(file), { recursive: true });
  copyFileSync(index, file);
}
// Unknown URLs fall back to the app, which shows its own "not found" page.
copyFileSync(index, join(outDir, "404.html"));
console.log(`postbuild: created ${routes.length} page copies + 404.html`);
