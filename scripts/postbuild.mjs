// GitHub Pages: create a copy of index.html for every page so that
// opening a page URL directly (or reloading it) works and returns 200.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
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

const SITE = "https://ubipro.net";
const index = join(outDir, "index.html");
const html = readFileSync(index, "utf8");
for (const route of routes) {
  // "privacy" -> out/privacy.html (GitHub Pages serves it at /privacy)
  const file = join(outDir, `${route}.html`);
  mkdirSync(dirname(file), { recursive: true });
  // Each page points search engines to its own URL (not the top page).
  const pageUrl = `${SITE}/${route}`;
  const pageHtml = html
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${pageUrl}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${pageUrl}$2`);
  writeFileSync(file, pageHtml);
}
// Unknown URLs fall back to the app, which shows its own "not found" page.
copyFileSync(index, join(outDir, "404.html"));
console.log(`postbuild: created ${routes.length} page copies + 404.html`);
