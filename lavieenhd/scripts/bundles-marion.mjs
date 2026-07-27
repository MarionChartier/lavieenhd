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

const PAGES = [
  "soin-energetique",
  "the-place-to-be",
  "inside",
  "reveal",
  "blooming",
  "reconnect",
];

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
  return `# Modifier la page « ${page} » avec Claude

Ce dossier contient la page complète et tout ce dont elle a besoin.
Tu peux l'ouvrir par double-clic sur \`${page}.html\` pour la voir dans ton navigateur.

## Comment faire

1. Ouvre ce dossier dans Claude.
2. Demande ta modification en langage normal. Sois précise sur l'endroit.
3. Rafraîchis la page dans ton navigateur (touche F5) pour voir le résultat.
4. Quand tu es contente, renvoie-moi le dossier entier : je le remets en ligne.

## Exemples de demandes qui marchent bien

- « Dans la section des tarifs, remplace “122 €” par “138 €”. »
- « Le titre en haut de la page, écris plutôt : “...”. »
- « Le paragraphe qui commence par “Tu ressens...”, remplace-le par ce texte : “...”. »
- « Supprime le témoignage de Camille. »
- « J'ai mis une photo \`nouvelle-photo.jpg\` dans le dossier. Utilise-la à la place de la photo du haut de page. »

## Deux ou trois choses à savoir

- **Pour changer une image**, dépose ton fichier dans ce dossier et dis à Claude laquelle
  il doit remplacer. Chaque image existe en deux versions (une normale, une allégée pour
  le téléphone) : dis simplement à Claude de **remplacer les deux**, il saura faire.
- **Ne renomme pas** le fichier \`${page}.html\`, ni les dossiers \`assets\` et \`fonts\`.
- **La mise en page se règle de mon côté.** Si tu veux déplacer un bloc, changer une
  couleur ou une taille, écris-le moi plutôt que de le demander à Claude : c'est là qu'on
  risque de casser quelque chose.
- **Si un texte est trop long**, il peut déborder de son cadre. Regarde la page après
  ta modification, et sur ton téléphone si tu peux.
- **Si quelque chose s'est mal passé**, dis à Claude : « annule ma dernière modification ».
  Et dans le pire des cas, redemande-moi le dossier d'origine : rien n'est perdu.
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
