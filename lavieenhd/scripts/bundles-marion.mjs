/**
 * Prépare un dossier par page de vente pour que Marion en corrige les textes.
 *
 * Chaque dossier contient la page, ses images et les polices du site, en chemins
 * relatifs : la page s'ouvre par double-clic, sans serveur, et s'affiche fidèlement.
 * Marion renvoie le .html corrigé ; la mise en page se refait de notre côté.
 *
 * Usage : node scripts/bundles-marion.mjs [page...]
 */
import { readFile, writeFile, mkdir, copyFile, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { collectRefs, toRelative } from "./bundle-paths.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const bundlesDir = join(root, "..", "bundles-marion");

/** blooming est absente : Marion l'a déjà retravaillée de son côté. */
const PAGES = ["soin-energetique", "the-place-to-be", "inside", "reveal", "reconnect"];

const pages = process.argv.slice(2).length > 0 ? process.argv.slice(2) : PAGES;
const unknown = pages.filter((page) => !PAGES.includes(page));
if (unknown.length > 0) {
  console.error(`Page(s) inconnue(s) : ${unknown.join(", ")}\nAttendu : ${PAGES.join(", ")}`);
  process.exit(1);
}

for (const page of pages) {
  const original = await readFile(join(publicDir, `${page}.html`), "utf8");
  const rewritten = toRelative(original);

  const leftover = collectRefs(rewritten);
  if (leftover.length > 0) {
    throw new Error(
      `${page}.html : ${leftover.length} référence(s) encore en absolu après réécriture —\n  ${leftover.join("\n  ")}`,
    );
  }

  const target = join(bundlesDir, page);
  await rm(target, { recursive: true, force: true });
  await mkdir(target, { recursive: true });

  const refs = collectRefs(original);
  const missing = [];
  let bytes = 0;
  for (const ref of refs) {
    const from = join(publicDir, ref);
    try {
      bytes += (await stat(from)).size;
    } catch {
      missing.push(ref);
      continue;
    }
    const to = join(target, ref);
    await mkdir(dirname(to), { recursive: true });
    await copyFile(from, to);
  }
  if (missing.length > 0) {
    throw new Error(
      `${page}.html référence ${missing.length} fichier(s) absent(s) de public/ :\n  ${missing.join("\n  ")}`,
    );
  }

  await writeFile(join(target, `${page}.html`), rewritten, "utf8");
  await writeFile(join(target, "LIRE-MOI.md"), readme(page), "utf8");

  console.log(`${page} : ${refs.length} fichier(s) (${Math.round(bytes / 1024)} Ko)`);
}

console.log(`\nDossiers dans ${bundlesDir}`);

function readme(page) {
  return `# Corriger les textes de la page « ${page} »

**Double-clique sur \`${page}.html\`** : la page s'ouvre dans ton navigateur, telle
qu'elle est en ligne. Tout ce qu'il lui faut est dans ce dossier, tu n'as rien à installer.

## Pour modifier un texte

Ouvre le fichier \`${page}.html\` avec Claude et demande ton changement en français.
Sois précise sur l'endroit : recopie le texte tel qu'il apparaît sur la page.

- « Remplace “122 €” par “138 €” dans la section des tarifs. »
- « Le paragraphe qui commence par “Tu ressens…”, mets plutôt : “…”. »
- « Supprime le témoignage de Camille. »
- « Le bouton “Je réserve ma place” doit dire “Je m'inscris”. »

Ensuite, retourne dans ton navigateur et appuie sur **F5** pour voir le résultat.

## À savoir

- **Occupe-toi des textes, je m'occupe du reste.** Les photos, les couleurs, les
  espacements, la disposition des blocs : note-moi ce que tu veux et je le ferai.
- **Ne renomme rien** dans ce dossier, sinon la page ne retrouve plus ses images.
- Quand tu as fini, **renvoie-moi le fichier \`${page}.html\`**. Rien n'est perdu :
  je garde l'original de mon côté.
`;
}
