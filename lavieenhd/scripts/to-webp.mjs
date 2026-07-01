/**
 * Génère une version .webp à côté de chaque image référencée dans les pages HTML
 * statiques de /public (pages de vente). Les originaux sont conservés comme fallback.
 *
 * Usage : node scripts/to-webp.mjs
 */
import { readdir, readFile, stat } from "node:fs/promises";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

// 1. Récupère les chemins d'images (/assets/...) cités dans les .html de /public
const htmlFiles = (await readdir(publicDir)).filter((f) => f.endsWith(".html"));
const referenced = new Set();
for (const file of htmlFiles) {
  const html = await readFile(join(publicDir, file), "utf8");
  for (const m of html.matchAll(/(?:src|srcset)="(\/assets\/[^"]+\.(?:png|jpe?g))"/gi)) {
    referenced.add(m[1]);
  }
}

const QUALITY = 80;
let done = 0;
let originalTotal = 0;
let webpTotal = 0;

for (const rel of [...referenced].sort()) {
  const srcPath = join(publicDir, rel);
  const outPath = srcPath.slice(0, -extname(srcPath).length) + ".webp";
  try {
    const before = (await stat(srcPath)).size;
    await sharp(srcPath).webp({ quality: QUALITY }).toFile(outPath);
    const after = (await stat(outPath)).size;
    originalTotal += before;
    webpTotal += after;
    done += 1;
    const pct = Math.round((1 - after / before) * 100);
    console.log(
      `ok  ${rel.padEnd(42)} ${(before / 1024).toFixed(0)}ko -> ${(after / 1024).toFixed(0)}ko (-${pct}%)`,
    );
  } catch (err) {
    console.error(`ERR ${rel}: ${err.message}`);
  }
}

console.log(
  `\n${done} image(s) converties. Total ${(originalTotal / 1024 / 1024).toFixed(2)}Mo -> ${(webpTotal / 1024 / 1024).toFixed(2)}Mo`,
);
