import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { FlecheCourbe, Petal, PetalHalo, Rosace } from "@/components/sections/vente/motifs";
import { Reveal } from "@/components/sections/vente/Reveal";
import { Cta } from "@/components/sections/vente/primitives";

/** Décalage en cascade d'un groupe — 80 ms par cran. */
const stagger = (i: number) => i * 80;

/* ------------------------------------------------------------------------- */
/* Cartes numérotées                                                          */
/* ------------------------------------------------------------------------- */

export type Profil = { titre: string; paragraphes: ReactNode[] };

/**
 * Inclinaisons et décalages des notes, volontairement irréguliers : trois
 * cartes penchées du même angle se reliraient comme un motif, pas comme des
 * notes posées. Le décalage alterne pour que rien ne s'aligne verticalement.
 */
const NOTES = [
  {
    angle: "-rotate-[1.6deg]",
    decalage: "md:mr-14",
    fond: "bg-[linear-gradient(160deg,rgba(241,233,249,0.75)_0%,rgba(214,196,236,0.55)_100%)]",
    bordure: "border-ink-lilac/35",
    scotch: "border-[#dccef0] bg-[#ece4f5]/80",
  },
  {
    angle: "rotate-[1.2deg]",
    decalage: "md:ml-16",
    fond: "bg-[linear-gradient(160deg,rgba(231,246,248,0.8)_0%,rgba(193,231,236,0.55)_100%)]",
    bordure: "border-turquoise/35",
    scotch: "border-[#c5e6e9] bg-[#dbeef4]/80",
  },
  {
    angle: "-rotate-[0.8deg]",
    decalage: "md:mr-8",
    fond: "bg-[linear-gradient(160deg,rgba(248,239,214,0.75)_0%,rgba(236,214,166,0.55)_100%)]",
    bordure: "border-[#d8bf8b]/45",
    scotch: "border-[#e5d4b4] bg-[#f0e3cc]/80",
  },
] as const;

/**
 * Les profils « cette offre est pour toi si… », en notes penchées empilées.
 * On reprend la grammaire du fun fact de /qui-je-suis (papier teinté, liseré
 * chaud, léger angle) et le badge scotché des témoignages pour le numéro.
 *
 * Empilées et non côte à côte : ces profils ne sont pas des options à comparer,
 * on descend jusqu'à se reconnaître dans l'un d'eux. Et deux paragraphes ne
 * tiennent pas dans une colonne de tiers d'écran.
 *
 * À l'intérieur, titre à gauche et texte à droite : empilés, les deux
 * paragraphes donnaient des notes deux fois plus hautes que larges, qui
 * écrasaient tout le reste de la strate.
 */
export function ProfilsNotes({ profils }: { profils: Profil[] }) {
  return (
    // L'écart tient compte de la rotation : penchées, les cartes se rapprochent
    // par leurs coins et le scotch suivant vient toucher le bas de la
    // précédente.
    <ol className="flex flex-col gap-9 md:gap-12">
      {profils.map((profil, i) => {
        const note = NOTES[i % NOTES.length];

        return (
          <Reveal as="li" key={profil.titre} delay={stagger(i)} className={note.decalage}>
            <div
              className={`relative rounded-[20px] border px-6 pt-7 pb-6 shadow-[0_18px_40px_-24px_rgba(80,60,98,0.25)] md:px-8 md:pt-8 md:pb-7 ${note.angle} ${note.fond} ${note.bordure}`}
            >
              {/* Badge scotché : coins vifs, léger angle à contresens de la
                  note, à cheval sur le bord haut. Même traitement que sur les
                  témoignages de l'accueil. */}
              <span
                className={`absolute -top-3 left-8 z-10 inline-flex -rotate-2 items-center border px-3 pt-[6px] pb-[4px] font-body text-[9px] leading-none tracking-[0.18em] text-ink-deep shadow-[0_2px_6px_rgba(80,60,98,0.14)] ${note.scotch}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="grid gap-3 md:grid-cols-[190px_1fr] md:gap-7">
                <h3 className="font-display text-[20px] font-semibold leading-snug text-ink-deep md:text-[22px]">
                  {profil.titre}
                </h3>

                <div className="flex flex-col gap-2.5">
                  {profil.paragraphes.map((p, j) => (
                    <p
                      key={j}
                      className="font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------------------------- */
/* Livrables                                                                  */
/* ------------------------------------------------------------------------- */

/**
 * Mot de cliente posé dans une carte de bénéfice, comme le verbatim d'Astrig
 * sur INSIDE : citation en italique détaché, puis sa source en petites
 * capitales. Des `span` en bloc et non des `p` : la carte rend son texte dans
 * un paragraphe.
 */
export function MotCliente({ citation, source }: { citation: ReactNode; source: string }) {
  return (
    <>
      <em className="mt-4 block border-t border-accent/40 pt-4">&quot;{citation}&quot;</em>
      <span className="mt-2 block font-body text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
        {source}
      </span>
    </>
  );
}

export type Livrable = {
  titre: string;
  texte: ReactNode;
  /** Largeur dans la grille. Portée par la donnée et non calculée ici : chaque
   *  page de vente a son propre nombre de livrables, et c'est elle qui sait
   *  lesquels méritent d'être mis en avant. Par défaut, une colonne. */
  taille?: "large" | "pleine";
};

const LARGEURS = {
  large: "sm:col-span-2",
  pleine: "sm:col-span-2",
} as const;

/**
 * Grille des livrables en bento : les cartes n'ont pas toutes la même largeur,
 * ce qui donne du rythme là où sept cartes identiques se lisaient comme une
 * liste de cases.
 *
 * Le halo turquoise est permanent et non plus au survol : c'est la mise en
 * lumière que Marion voulait garder à l'écran, y compris au doigt où le survol
 * n'existe pas. La géométrie ne bouge jamais.
 */
export function LivrablesGrid({ livrables }: { livrables: Livrable[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {livrables.map((item, i) => (
        // La carte est un enfant du Reveal et non le Reveal lui-même : les deux
        // portent une transition, et celle de l'apparition écrasait celle du
        // survol — le halo s'allumait alors d'un coup.
        <Reveal
          key={item.titre}
          delay={stagger(i)}
          className={item.taille ? LARGEURS[item.taille] : ""}
        >
          <div className="h-full rounded-[28px] border border-accent/70 bg-white/80 p-7 shadow-[0_0_30px_-8px_color-mix(in_srgb,var(--color-accent)_55%,transparent),inset_0_0_24px_-14px_color-mix(in_srgb,var(--color-accent)_70%,transparent)] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_0_26px_-2px_color-mix(in_srgb,var(--color-accent)_70%,transparent),inset_0_0_24px_-14px_color-mix(in_srgb,var(--color-accent)_70%,transparent)] motion-reduce:transition-none">
            {/* Le pétale ouvre le titre au lieu d'occuper sa propre ligne.
                `items-start` et non `items-baseline` : une SVG n'a pas de ligne
                de base, elle se colle au bas de la boîte. Le décalage haut la
                recentre optiquement sur la première ligne du titre. */}
            <h3 className="flex items-start gap-2.5 font-display text-[20px] font-semibold leading-snug text-ink-deep">
              <Petal className="mt-[5px] h-4 w-4 flex-none text-accent" />
              <span>{item.titre}</span>
            </h3>
            {/* Encre profonde et non l'encre courante : sur ce fond clair et
                derrière le halo, le gris violacé du texte de la page manquait
                de tenue. La graisse passe aussi de light à normal. */}
            <p className="mt-3.5 font-display text-[17px] leading-relaxed text-ink-deep md:text-[18px]">
              {item.texte}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Étapes                                                                     */
/* ------------------------------------------------------------------------- */

export type Etape = { titre: string; texte: ReactNode };

/**
 * Les étapes du processus. La rosace de cinq pétales sert de médaillon : le
 * numéro se lit au centre, le motif rappelle la Fleur à chaque étape.
 */
/** Une colonne par étape en grand écran : quatre étapes dans une grille de
 *  cinq laisseraient un vide à droite. Classes écrites en entier pour que
 *  Tailwind les génère. */
const COLONNES_ETAPES: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function ProcessusSteps({ etapes }: { etapes: Etape[] }) {
  return (
    <ol
      className={`grid gap-10 sm:grid-cols-2 lg:gap-6 ${
        COLONNES_ETAPES[etapes.length] ?? "lg:grid-cols-5"
      }`}
    >
      {etapes.map((etape, i) => (
        <Reveal as="li" key={etape.titre} delay={stagger(i)} className="text-center">
          <span className="relative mx-auto flex h-16 w-16 items-center justify-center">
            <Rosace className="absolute inset-0 h-16 w-16 text-ink-lilac/50" />
            {/* Pastille blanche translucide au cœur de la rosace : le chiffre
                se détachait mal des pétales. Le chiffre est en `font-body`,
                sans empattement : Cormorant pose ses chiffres sur la ligne de
                base et demandait un relèvement manuel pour paraître centré. */}
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/70">
              <span className="font-body text-[15px] font-semibold leading-none text-ink-deep">
                {i + 1}
              </span>
            </span>
          </span>

          <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-ink-deep">
            {etape.titre}
          </h3>
          <p className="mt-3 font-display text-[15px] font-light leading-relaxed text-ink">
            {etape.texte}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------------- */
/* Tarif                                                                      */
/* ------------------------------------------------------------------------- */

/** Carte de tarif : bandeau de marque, prix, ce qui est inclus, bon de commande. */
export function PricingCard({
  logo,
  logoAlt,
  logoStyle,
  prix,
  inclus,
  href,
  libelleCta,
  note,
}: {
  logo: string;
  logoAlt: string;
  /** Style du logo du bandeau, pour fondre une image qui n'est pas un logo. */
  logoStyle?: CSSProperties;
  prix: string;
  inclus: ReactNode[];
  href: string;
  libelleCta: string;
  note: string;
}) {
  return (
    // Ce qu'on reçoit d'abord, en pleine lecture, puis le prix seul et centré
    // sous la liste : à côté d'elle, il se lisait comme une colonne annexe.
    <div className="mx-auto flex max-w-[820px] flex-col items-center gap-14">
      <Reveal className="w-full">
        <ul className="flex flex-col">
          {inclus.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3.5 border-b border-line py-4 last:border-b-0 font-display text-[18px] leading-relaxed text-ink-deep"
            >
              <Petal className="mt-2 h-3 w-3 flex-none text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Deux flèches manuscrites encadrent la carte pour désigner le passage à
          l'action. Écartées dès `lg` seulement : plus étroit, elles voleraient
          la largeur de la carte. */}
      <div className="flex w-full items-center justify-center gap-4 xl:gap-10">
        <FlecheCourbe
          className="hidden h-[112px] w-[150px] flex-none -translate-y-4 text-ink-lilac/55 lg:block"
        />

        {/* L'envolée de pétales est posée sur ce conteneur et non sur la carte :
            la carte rogne ce qui dépasse d'elle, les pétales y seraient coupés
            net au ras du liseré. */}
        <div className="relative w-full max-w-[380px]">
        <PetalHalo />

        <Reveal
          delay={80}
          className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-simu"
        >
          {/* Violet plus clair que la strate des livrables : sur ce bandeau
              compact, entouré de blanc, le même ton paraissait plus dense
              qu'en pleine largeur. Le prix turquoise y garde 3.48:1 — au-dessus
              du seuil de 3:1 qui s'applique à ses 46px — et le lettrage blanc
              du logo, qui est fin, 6.34:1. */}
          <div className="bg-[#665b74] px-7 py-9 text-center">
            <Image
              src={logo}
              alt={logoAlt}
              width={200}
              height={200}
              className="mx-auto h-auto w-[150px]"
              style={logoStyle}
            />
            {/* Prix en sans-serif : les chiffres fins et elzéviriens de
                Cormorant rendaient le montant difficile à lire d'un coup d'œil.
                Léger recalage à droite : le « € » massif en fin de montant tire
                l'œil vers la gauche du bloc. */}
            <p className="mt-5 translate-x-[4px] font-body text-[38px] leading-none tracking-[0.02em] text-accent [font-variant-numeric:lining-nums]">
              {prix}
            </p>
          </div>

          <div className="px-6 py-7">
            <Cta href={href} external className="w-full">
              {libelleCta}
            </Cta>
            <p className="mt-4 text-center font-body text-[13px] italic text-ink-soft">{note}</p>
          </div>
        </Reveal>
        </div>

        <FlecheCourbe
          className="hidden h-[112px] w-[150px] flex-none -translate-y-4 -scale-x-100 text-ink-lilac/55 lg:block"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Témoignages                                                                */
/* ------------------------------------------------------------------------- */

/** Témoignage principal : portrait à gauche, verbatim à droite. */
/**
 * Témoignage au format voulu par Marion, repris de ses pages systeme.io :
 * portrait rond en grand, guillemet, prénom, puis le verbatim centré.
 *
 * L'anneau doré n'est pas dessiné en CSS, il est incrusté dans les PNG du
 * dossier `temoignages` — comme sur les pages d'origine. D'où l'absence de
 * `rounded-full` et de bordure ici : le fichier fait déjà le travail.
 */
export function TemoignageHero({
  photo,
  nom,
  contexte,
  texte,
  inverse = false,
}: {
  photo: string;
  nom: string;
  /** Moment du verbatim (« à chaud… »), quand Marion le précise. */
  contexte?: string;
  texte: ReactNode;
  /** Portrait à droite. Les témoignages alternent d'un bloc à l'autre. */
  inverse?: boolean;
}) {
  return (
    // Les largeurs de colonnes s'inversent avec le portrait : sans ça, le
    // verbatim tombait dans la colonne de 300px.
    <Reveal
      className={`grid items-center gap-10 md:gap-14 ${
        inverse ? "md:grid-cols-[1fr_300px]" : "md:grid-cols-[300px_1fr]"
      }`}
    >
      <Image
        src={photo}
        alt={nom}
        width={600}
        height={600}
        className={`mx-auto h-auto w-[220px] md:w-[300px] ${inverse ? "md:order-2" : ""}`}
      />

      <div className="text-center">
        {/* Le guillemet pailleté des pages systeme.io de Marion. Purement
            décoratif : le verbatim se comprend sans lui. */}
        <Image
          src="/assets/temoignages/guillemet.webp"
          alt=""
          aria-hidden
          width={160}
          height={160}
          className="mx-auto h-auto w-[56px]"
        />
        <p className="mt-4 font-display text-[22px] italic leading-none text-accent-texte">{nom}</p>
        {contexte && (
          <p className="mt-3 font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            {contexte}
          </p>
        )}
        <div className="mt-6 whitespace-pre-line font-display text-[17px] font-light leading-relaxed text-ink-deep">
          {texte}
        </div>
      </div>
    </Reveal>
  );
}

export type Score = { valeur?: string; label: ReactNode };

/** Chiffres et verbatims courts, en appui du témoignage principal. */
export function ScoreCards({ scores }: { scores: Score[] }) {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {scores.map((score, i) => (
        <Reveal
          key={i}
          delay={stagger(i)}
          className="flex flex-col items-center justify-center rounded-[28px] border border-line bg-paper px-6 py-8 text-center"
        >
          {score.valeur && (
            <p className="font-display text-[38px] font-light leading-none text-ink-deep">
              {score.valeur}
            </p>
          )}
          <div
            className={`font-display font-light leading-relaxed text-ink ${
              score.valeur ? "mt-3 text-[15px]" : "text-[17px] italic"
            }`}
          >
            {score.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export type Verbatim = { nom: string; photo: string; texte: string };

/**
 * Verbatims secondaires, en deux colonnes. Les témoignages vont de deux lignes
 * à vingt : une grille alignerait chaque rangée sur le plus long et creuserait
 * des trous sous les courts. On répartit donc les cartes en deux piles
 * indépendantes, chaque carte allant à la pile la moins chargée (longueur de
 * texte cumulée), pour que les deux colonnes finissent à peu près ensemble.
 *
 * Deux piles et non `columns` CSS : le navigateur y fragmente l'ombre de la
 * dernière carte d'une colonne en haut de la suivante, qui démarre alors plus
 * bas que sa voisine.
 *
 * Même portrait et même guillemet que le témoignage principal, en plus petit :
 * les deux blocs se lisent comme une seule famille.
 */
export function TemoignageCards({ verbatims }: { verbatims: Verbatim[] }) {
  const piles: [Verbatim[], Verbatim[]] = [[], []];
  const charges = [0, 0];
  for (const v of verbatims) {
    const i = charges[0] <= charges[1] ? 0 : 1;
    piles[i].push(v);
    // Le portrait et le nom pèsent comme quelques lignes de texte.
    charges[i] += v.texte.length + 250;
  }

  return (
    <div className="mt-6 grid items-start gap-5 sm:grid-cols-2">
      {piles.map((pile, col) => (
        <div key={col} className="flex flex-col gap-5">
          {pile.map((v) => (
            <Reveal
              key={v.nom}
              delay={stagger(col)}
              className="rounded-[28px] border border-line bg-paper p-8 text-center shadow-card"
            >
              <Image
                src={v.photo}
                alt={v.nom}
                width={600}
                height={600}
                className="mx-auto h-auto w-[96px]"
              />
              <p className="mt-3 font-display text-[20px] italic leading-none text-accent-texte">
                {v.nom}
              </p>
              <p className="mt-5 whitespace-pre-line font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                {v.texte}
              </p>
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Passerelle vers l'offre suivante                                           */
/* ------------------------------------------------------------------------- */

/**
 * Renvoi vers l'offre du palier au-dessus, en fin de parcours.
 *
 * Le titre est écrit en deux temps qui s'opposent — ce que l'offre courante
 * fait, puis ce que la suivante apporte. La mise en page ne fait que rendre
 * visible cette bascule, avec un pétale en pivot.
 *
 * Pas de carte ici : la strate arrive juste après le prix, et un bloc aussi
 * appuyé que la carte d'achat mettrait les deux offres sur le même plan.
 */
export function BridgeOffre({
  eyebrow,
  avant,
  apres,
  paragraphes,
  offre,
}: {
  eyebrow: string;
  avant: ReactNode;
  apres: ReactNode;
  paragraphes: ReactNode[];
  offre: OffreLiee;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Texte à gauche, carte de l'offre à droite : l'ordre du code est aussi
          celui de l'affichage, on lit le pont avant l'offre qu'il annonce. */}
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">{eyebrow}</p>
        <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[42px]">
          {avant}
          <br />
          {apres}
        </h2>
        {paragraphes.map((p, i) => (
          <p key={i} className="mt-5 font-display text-[17px] font-light leading-relaxed text-ink">
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal delay={80}>
        <OffreCarte {...offre} />
      </Reveal>
    </div>
  );
}

export type OffreLiee = {
  eyebrow: string;
  logo: string;
  logoAlt: string;
  /** Question d'accroche en italique, au-dessus du texte. Optionnelle. */
  accroche?: ReactNode;
  texte: ReactNode;
  href: string;
  libelle: string;
};

/**
 * Carte d'une offre vers laquelle on renvoie. Claire et non violet profond :
 * elle arrive quelques écrans après la carte d'achat, et deux blocs sombres de
 * même force mettraient les offres sur le même plan. Le liseré et l'ombre
 * suffisent à la détacher du fond lavande.
 */
function OffreCarte({ eyebrow, logo, logoAlt, accroche, texte, href, libelle }: OffreLiee) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-ink-lilac/45 bg-white px-8 py-10 text-center shadow-card md:px-10">
      {/* Deux grands motifs entrant par des coins opposés, rognés par
          l'arrondi de la carte : on n'en voit jamais la forme entière, ce qui
          les garde à l'état de matière. Une lueur douce sous le logo lui
          donne son écrin sans ajouter de cadre. */}
      <span aria-hidden className="pointer-events-none absolute inset-0">
        <Petal className="absolute -top-12 -left-16 h-56 w-56 rotate-[26deg] text-ink-lilac/[0.14]" />
        <Petal className="absolute -right-14 -bottom-16 h-60 w-60 -rotate-[20deg] text-accent/[0.12]" />
      </span>

      <div className="relative flex flex-1 flex-col">
        <p className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">{eyebrow}</p>
        {/* La lueur est ancrée sur le logo lui-même, et non à un pourcentage
            de la carte : calée sur la carte, elle se retrouvait sous le logo
            et décalée à droite. */}
        <div className="relative mx-auto mt-6 w-[150px]">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(190,164,216,0.22)_0%,transparent_70%)]"
          />
          <Image src={logo} alt={logoAlt} width={160} height={160} className="relative h-auto w-full" />
        </div>
        {accroche && (
          <p className="mt-6 font-display text-[17px] italic leading-relaxed text-ink-deep">
            {accroche}
          </p>
        )}
        <p
          className={`font-display text-[16px] font-light leading-relaxed text-ink ${
            accroche ? "mt-3" : "mt-6"
          }`}
        >
          {texte}
        </p>
        {/* `mt-auto` : les boutons s'alignent en bas des cartes voisines,
            quelle que soit la longueur du texte. */}
        <div className="mt-auto pt-8">
          <Cta href={href} variant="ghost">
            {libelle}
          </Cta>
        </div>
      </div>
    </div>
  );
}

/**
 * Passerelle vers plusieurs offres, quand la page en propose plus d'une pour
 * la suite. Même en-tête et même carte que <BridgeOffre>, les cartes passent
 * simplement côte à côte sous le texte.
 */
export function OffresSuivantes({
  eyebrow,
  titre,
  paragraphes,
  offres,
}: {
  eyebrow: string;
  titre: ReactNode;
  paragraphes: ReactNode[];
  offres: OffreLiee[];
}) {
  return (
    <>
      <Reveal className="mx-auto max-w-[720px] text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">{eyebrow}</p>
        <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[42px]">
          {titre}
        </h2>
        {paragraphes.map((p, i) => (
          <p key={i} className="mt-5 font-display text-[17px] font-light leading-relaxed text-ink">
            {p}
          </p>
        ))}
      </Reveal>

      {/* Grille à la mesure du nombre d'offres : deux cartes dans une grille
          de trois laisseraient une colonne vide à droite. */}
      <div
        className={`mx-auto mt-14 grid gap-6 ${
          offres.length === 2 ? "max-w-[880px] lg:grid-cols-2" : "lg:grid-cols-3"
        }`}
      >
        {offres.map((offre, i) => (
          <Reveal key={offre.logoAlt} delay={stagger(i)} className="h-full">
            <OffreCarte {...offre} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------- */
/* Tarif à variantes                                                          */
/* ------------------------------------------------------------------------- */

export type Variante = {
  nom: string;
  sousTitre: string;
  prix: string;
  href: string;
  /** Libellé propre à la carte ; sinon le libellé commun du bloc. */
  libelle?: string;
};

/**
 * Tarif d'une offre déclinée en plusieurs versions au même contenu (The Place
 * to be : un Guide par Environnement HD). Ce qui est inclus d'abord, une seule
 * fois, puis une petite carte de commande par variante, au bandeau de la carte
 * de tarif : l'acheteur choisit la sienne sans relire six fois la même liste.
 */
export function ChoixVariantes({
  inclus,
  apresInclus,
  variantes,
  libelleCta,
}: {
  inclus: ReactNode[];
  /** Mentions entre la liste et les cartes (format, accès, aide au choix). */
  apresInclus?: ReactNode;
  variantes: Variante[];
  /** Libellé commun des boutons, quand les variantes n'ont pas le leur. */
  libelleCta?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-14">
      <Reveal className="w-full max-w-[820px]">
        <ul className="flex flex-col">
          {inclus.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3.5 border-b border-line py-4 last:border-b-0 font-display text-[18px] leading-relaxed text-ink-deep"
            >
              <Petal className="mt-2 h-3 w-3 flex-none text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {apresInclus && <div className="mt-8 text-center">{apresInclus}</div>}
      </Reveal>

      <ol className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {variantes.map((v, i) => (
          <Reveal
            as="li"
            key={v.nom}
            delay={stagger(i % 3)}
            className="overflow-hidden rounded-[28px] border border-line bg-white shadow-simu"
          >
            {/* Même bandeau que la carte de tarif unique : le prix accent y
                garde le contraste mesuré pour elle. */}
            <div className="bg-[#665b74] px-6 py-8 text-center">
              <p className="font-body text-[11px] tracking-[0.22em] text-white/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-[32px] font-light leading-none text-white">
                {v.nom}
              </p>
              <p className="mt-2 font-display text-[17px] italic text-white/80">{v.sousTitre}</p>
              <p className="mt-5 font-body text-[28px] leading-none text-accent [font-variant-numeric:lining-nums]">
                {v.prix}
              </p>
            </div>
            <div className="px-6 py-6">
              <Cta href={v.href} external className="w-full">
                {v.libelle ?? libelleCta}
              </Cta>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Témoignages en captures                                                    */
/* ------------------------------------------------------------------------- */

export type Capture = { src: string; largeur: number; hauteur: number };

/**
 * Répartit les captures en `n` piles dont les bas tombent au plus près les
 * uns des autres. Recherche exhaustive (n puissance nombre de captures, soit
 * quelques milliers de cas) : les piles gardent l'ordre d'origine, seule la
 * pile de chaque capture change. La hauteur d'une carte est celle de l'image
 * à largeur égale, plus son cadre.
 */
function equilibrerPiles(captures: Capture[], n: number): Capture[][] {
  const h = captures.map((c) => c.hauteur / c.largeur + 0.08);
  let meilleur: number[] = [];
  let ecartMin = Infinity;
  const choix: number[] = [];
  const sommes = new Array<number>(n).fill(0);
  const explorer = (i: number) => {
    if (i === captures.length) {
      const ecart = Math.max(...sommes) - Math.min(...sommes);
      if (ecart < ecartMin) {
        ecartMin = ecart;
        meilleur = [...choix];
      }
      return;
    }
    for (let p = 0; p < n; p++) {
      choix[i] = p;
      sommes[p] += h[i];
      explorer(i + 1);
      sommes[p] -= h[i];
    }
  };
  explorer(0);
  const piles: Capture[][] = Array.from({ length: n }, () => []);
  captures.forEach((c, i) => piles[meilleur[i]].push(c));
  return piles;
}

/**
 * Témoignages reçus en messages (captures d'écran), sans prénom à afficher,
 * chacun dans une carte claire : les captures n'ont pas toutes le même fond,
 * la carte les remet en famille. Trois piles équilibrées en grand écran, pour
 * que la section finisse à plat.
 */
export function CapturesTemoignages({ captures, alt }: { captures: Capture[]; alt: string }) {
  const piles = equilibrerPiles(captures, 3);

  return (
    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {piles.map((pile, col) => (
        <div key={col} className="flex flex-col gap-4">
          {pile.map((c) => (
            <Reveal
              key={c.src}
              delay={stagger(col)}
              className="rounded-[22px] border border-line bg-paper p-3 shadow-card"
            >
              <Image
                src={c.src}
                alt={alt}
                width={c.largeur}
                height={c.hauteur}
                className="h-auto w-full rounded-[14px]"
              />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
