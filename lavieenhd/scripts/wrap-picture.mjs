/**
 * Enveloppe chaque <img src="/assets/....(png|jpg|jpeg)"> des pages de vente statiques
 * dans un <picture> avec une source WebP + l'original en fallback.
 * Idempotent : ne retouche pas un <img> déjà encapsulé dans un <source webp>.
 *
 * Usage : node scripts/wrap-picture.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const TARGETS = [
  "blooming.html",
  "the-place-to-be.html",
  "inside.html",
  "reveal.html",
  "reconnect.html",
];

const IMG_RE = /<img\b([^>]*?)\bsrc="(\/assets\/[^"]+\.(?:png|jpe?g))"([^>]*?)\/>/gi;

for (const file of TARGETS) {
  const path = join(publicDir, file);
  let html = await readFile(path, "utf8");
  let count = 0;

  html = html.replace(IMG_RE, (match, pre, src, post) => {
    const webp = src.replace(/\.(?:png|jpe?g)$/i, ".webp");
    count += 1;
    return `<picture><source type="image/webp" srcset="${webp}"/><img${pre}src="${src}"${post}/></picture>`;
  });

  await writeFile(path, html, "utf8");
  console.log(`${file}: ${count} image(s) encapsulée(s)`);
}
