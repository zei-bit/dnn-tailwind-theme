// scripts/build-patterns.js
// Minimal static include builder for pattern pages.
// Usage: npm run patterns

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SRC_PAGES = path.join(ROOT, "src/patterns/pages");
const OUT_PAGES = path.join(ROOT, "public/pages");

const INCLUDE_RE = /<!--\s*@include\s+(.+?)\s*-->/g;

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function renderFile(filePath, stack = []) {
  const source = fs.readFileSync(filePath, "utf8");
  return source.replace(INCLUDE_RE, (_, incPath) => {
    const resolved = path.resolve(path.dirname(filePath), incPath.trim());
    if (stack.includes(resolved)) {
      throw new Error(`Circular include: ${resolved}`);
    }
    return renderFile(resolved, [...stack, resolved]);
  });
}

function walk(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of dirents) {
    const srcPath = path.join(dir, d.name);
    if (d.isDirectory()) {
      walk(srcPath);
    } else if (d.isFile() && srcPath.endsWith(".html")) {
      const rel = path.relative(SRC_PAGES, srcPath);
      const outPath = path.join(OUT_PAGES, rel);
      const rendered = renderFile(srcPath);
      ensureDir(outPath);
      fs.writeFileSync(outPath, rendered, "utf8");
      console.log("built", rel);
    }
  }
}

walk(SRC_PAGES);
