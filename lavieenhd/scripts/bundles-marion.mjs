/**
 * Bundles autonomes des pages de vente, pour que Marion les édite avec Claude.
 *
 * Un dossier par page : le .html, ses images et les polices, en chemins relatifs.
 * La page s'ouvre alors par double-clic, sans serveur.
 *
 * Usage :
 *   node scripts/bundles-marion.mjs build              # génère les 6 dossiers
 *   node scripts/bundles-marion.mjs build inside       # une seule page
 *   node scripts/bundles-marion.mjs reinject inside    # retour de Marion -> public/
 */
import { readFile, writeFile, mkdir, copyFile, rm, readdir, stat } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const bundlesDir = join(root, "..", "bundles-marion");

/** blooming est absente : Marion l'a déjà retravaillée de son côté. */
const PAGES = ["soin-energetique", "the-place-to-be", "inside", "reveal", "reconnect"];

const { collectRefs, collectStrayRefs, toRelative, toAbsolute } = await import(
  "./bundle-paths.mjs"
);

const ko = (bytes) => `${Math.round(bytes / 1024)} Ko`;

/** Tous les fichiers d'un dossier, en chemins relatifs à celui-ci. Vide s'il n'existe pas. */
async function listFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true, recursive: true });
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => relative(dir, join(entry.parentPath, entry.name)).split("\\").join("/"));
}

async function build(pages) {
  for (const page of pages) {
    const source = join(publicDir, `${page}.html`);
    const original = await readFile(source, "utf8");
    const refs = collectRefs(original);

    const rewritten = toRelative(original);
    const leftover = collectRefs(rewritten);
    if (leftover.length > 0) {
      throw new Error(
        `${page}.html : ${leftover.length} référence(s) encore en absolu après réécriture — ` +
          `forme non gérée par bundle-paths.mjs :\n  ${leftover.join("\n  ")}`,
      );
    }

    const target = join(bundlesDir, page);
    await rm(target, { recursive: true, force: true });
    await mkdir(target, { recursive: true });

    let bytes = 0;
    const missing = [];
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

    const inline = (original.match(/data:image/g) ?? []).length;
    const inlineNote = inline > 0 ? `, ${inline} image(s) intégrée(s) au fichier` : "";
    console.log(
      `${page} : ${refs.length} fichier(s) copié(s) (${ko(bytes)})` +
        `, page ${ko(Buffer.byteLength(rewritten))}${inlineNote}`,
    );
  }
  console.log(`\nDossiers dans ${bundlesDir}`);
}

async function reinject(pages) {
  for (const page of pages) {
    const source = join(bundlesDir, page);
    const edited = await readFile(join(source, `${page}.html`), "utf8");

    const rewritten = toAbsolute(edited);
    const strays = collectStrayRefs(rewritten);
    if (strays.length > 0) {
      throw new Error(
        `${page}.html : ${strays.length} ressource(s) hors des dossiers assets/ et fonts/ —\n` +
          `  ${strays.join("\n  ")}\n` +
          `Déplace ces fichiers dans ${page}/assets/ et corrige les chemins avant de réinjecter,\n` +
          `sinon la page pointera dans le vide une fois en ligne.`,
      );
    }

    await writeFile(join(publicDir, `${page}.html`), rewritten, "utf8");

    const assets = (await listFiles(source)).filter(
      (file) => file.startsWith("assets/") || file.startsWith("fonts/"),
    );
    const changed = [];
    for (const file of assets) {
      const from = join(source, file);
      const to = join(publicDir, file);
      const [incoming, current] = await Promise.all([
        readFile(from),
        readFile(to).catch(() => null),
      ]);
      if (current !== null && current.equals(incoming)) continue;
      await mkdir(dirname(to), { recursive: true });
      await copyFile(from, to);
      changed.push(`${file}${current === null ? " (nouveau)" : ""}`);
    }

    console.log(`${page}.html réinjectée dans public/`);
    if (changed.length > 0) {
      console.log(`  ${changed.length} image(s) mise(s) à jour :\n    ${changed.join("\n    ")}`);
    } else {
      console.log("  aucune image modifiée");
    }
  }
}

function readme(page) {
  return `# Modifier les textes de la page « ${page} »

Ce dossier est ta **page d'essai**. Il contient la page et tout ce qu'il lui faut pour
s'afficher exactement comme en ligne : ses photos et les écritures du site.

**Commence par double-cliquer sur \`${page}.html\`** : la page s'ouvre dans ton
navigateur. C'est ici que tu verras le résultat de tes modifications.

## Le déroulé, étape par étape

1. Va sur **claude.ai** et démarre une nouvelle conversation.
2. **Joins le fichier \`${page}.html\`** (le trombone 📎, puis choisis le fichier dans
   ce dossier). Ne colle pas son contenu dans le message : joins bien le fichier.
3. Écris ta demande. Le plus simple est de recopier ce modèle :

   > Voici une page de mon site. Modifie **uniquement** ce que je demande ci-dessous,
   > et ne touche à rien d'autre : ni la mise en page, ni les couleurs, ni les images,
   > ni le reste du texte. Rends-moi ensuite le fichier complet à télécharger.
   >
   > Ma demande : *(écris ici ce que tu veux changer)*

4. **Télécharge le fichier** que Claude te renvoie, et mets-le dans ce dossier **à la
   place de l'ancien** (garde exactement le même nom : \`${page}.html\`).
5. Retourne dans ton navigateur et appuie sur **F5** : tu vois ta modification.
6. Si ça te plaît, **envoie-moi le fichier**. Je le remets en ligne.

Si le résultat ne te plaît pas, redemande dans la même conversation
(« non, remets le titre d'avant et change plutôt… ») et retélécharge.

## Exemples de demandes qui marchent bien

Sois précise sur **l'endroit** : cite le texte tel qu'il apparaît sur la page.

- « Dans la section des tarifs, remplace “122 €” par “138 €”. »
- « Le paragraphe qui commence par “Tu ressens…”, remplace-le par : “…”. »
- « Supprime le témoignage de Camille, avec sa photo. »
- « Le bouton “Je réserve ma place” doit dire “Je m'inscris”. »

## Ce qui passe par moi, pas par Claude

- **Changer une photo.** Envoie-la moi en me disant laquelle elle remplace.
- **Déplacer un bloc, changer une couleur, une taille, un espacement.** C'est là qu'on
  risque de casser la mise en page — et sur claude.ai tu ne verrais le dégât qu'après
  coup.

## Trois choses à savoir

- **Ne renomme rien** : ni le fichier \`${page}.html\`, ni les dossiers \`assets\` et
  \`fonts\`. La page ne saurait plus retrouver ses photos.
- **Vérifie toujours la page après téléchargement.** Un texte plus long que l'ancien peut
  déborder de son cadre. Regarde aussi sur ton téléphone si tu peux.
- **Rien n'est jamais perdu.** Si un fichier revient abîmé, redemande-moi le dossier
  d'origine. Et de mon côté, avant chaque mise en ligne, je compare ta version à la
  précédente et je vois exactement ce qui a changé.
`;
}

const [command, ...rest] = process.argv.slice(2);
const pages = rest.length > 0 ? rest : PAGES;

const unknown = pages.filter((page) => !PAGES.includes(page));
if (unknown.length > 0) {
  console.error(`Page(s) inconnue(s) : ${unknown.join(", ")}\nAttendu : ${PAGES.join(", ")}`);
  process.exit(1);
}

if (command === "build") {
  await build(pages);
} else if (command === "reinject") {
  await reinject(pages);
} else {
  console.error(
    "Usage :\n" +
      "  node scripts/bundles-marion.mjs build [page...]\n" +
      "  node scripts/bundles-marion.mjs reinject <page...>",
  );
  process.exit(1);
}
