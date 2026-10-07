/**
 * Motif signature des pages de vente : le pétale.
 *
 * Il est tiré de l'univers de l'offre — la Fleur de Talents Innés™ représente
 * cinq pôles en cinq pétales — plutôt que d'une forme décorative arbitraire.
 * On le décline partout (séparateurs de section, marqueurs d'étapes, matière de
 * fond, puces de listes) pour que la page ait une identité propre au lieu d'un
 * empilement de cartes génériques.
 */

/**
 * Formes du motif, chacune dans une boîte 24×24, pointe ou sommet en haut.
 * Chaque page de vente a la sienne (voir <VenteTheme>) ; Blooming garde le
 * pétale.
 */
export const MOTIF_PATHS = {
  petale: "M12 1.5c5.4 5.6 5.4 15.4 0 21-5.4-5.6-5.4-15.4 0-21z",
  cercle: "M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18z",
  losange: "M12 1.5 19.5 12 12 22.5 4.5 12z",
  carre: "M5 5h14v14H5z",
} as const;

export type MotifForme = keyof typeof MOTIF_PATHS;

/** Identifiant du tracé partagé, déclaré une fois par <VenteTheme>. */
export const MOTIF_ID = "vente-motif";

/**
 * Le motif seul, puce de liste, accent d'un titre. Il ne porte pas son tracé :
 * il réutilise celui que <VenteTheme> déclare pour la page, ce qui change la
 * forme partout sans faire passer la page de vente côté client.
 */
export function Petal({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} style={style}>
      <use href={`#${MOTIF_ID}`} fill="currentColor" />
    </svg>
  );
}

/**
 * Flèche courbe tracée à la main, qui désigne un élément placé à sa droite.
 * Pour la pointer depuis l'autre côté, on la retourne (`-scale-x-100`).
 *
 * Au trait et non pleine : elle accompagne le regard vers le bon de commande
 * sans venir concurrencer la carte, qui reste la seule pièce appuyée de la
 * strate.
 */
export function FlecheCourbe({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" aria-hidden className={className} fill="none">
      <g
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Courbe d'élan, du bas-gauche vers la pointe à droite */}
        <path d="M6 78C22 74 34 62 40 46 46 30 58 18 78 16c12-1 22 2 32 8" />
        {/* Pointe, en deux traits ouverts comme un tracé à la plume */}
        <path d="M96 8c6 5 11 10 14 16" />
        <path d="M92 32c8-4 14-7 18-8" />
      </g>
    </svg>
  );
}

/**
 * Rosace de 5 pétales — reprend littéralement la structure de la Fleur.
 * `filled` remplit les pétales, sinon ils restent au trait.
 */
export function Rosace({
  className = "",
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <g
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1}
      >
        {[0, 72, 144, 216, 288].map((angle) => (
          <use
            key={angle}
            href={`#${MOTIF_ID}`}
            transform={`translate(24 24) rotate(${angle}) scale(0.92) translate(-12 -22)`}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Séparateur de section : un filet fin interrompu par un pétale.
 * Remplace le trait plein de 48px des anciennes pages HTML.
 */
export function PetalDivider({
  centered = true,
  full = false,
  className = "",
}: {
  centered?: boolean;
  /** Les filets s'étirent sur toute la largeur — pour séparer deux blocs de
   *  texte, là où le trait court ne tiendrait pas le rôle de rupture. */
  full?: boolean;
  className?: string;
}) {
  const trait = full ? "flex-1" : "w-10";

  return (
    <div
      aria-hidden
      className={`flex items-center gap-3 ${centered ? "justify-center" : ""} ${className}`}
    >
      <span className={`block h-px ${trait} bg-gradient-to-r from-transparent to-ink-lilac/60`} />
      <Petal className="h-3 w-3 text-accent" />
      <span className={`block h-px ${trait} bg-gradient-to-l from-transparent to-ink-lilac/60`} />
    </div>
  );
}

/**
 * Envolée de pétales autour d'un bloc — à poser dans un parent `relative`.
 * Les positions sont exprimées en pourcentages du parent, avec des débords
 * négatifs, pour que les pétales entourent le bloc au lieu de le remplir.
 *
 * Tailles, angles, teintes et opacités sont tous irréguliers : une répétition
 * régulière se lirait comme un motif imprimé, pas comme des pétales tombés là.
 * L'angle inférieur droit est laissé libre, c'est là que vient la Fleur.
 */
const HALO = [
  { top: "-7%", left: "-6%", size: 36, rotate: -24, opacity: 0.44, tone: "text-ink-lilac" },
  { top: "-12%", left: "24%", size: 22, rotate: 42, opacity: 0.36, tone: "text-accent" },
  { top: "-9%", left: "58%", size: 28, rotate: -14, opacity: 0.34, tone: "text-ink-lilac" },
  { top: "16%", left: "-9%", size: 20, rotate: 66, opacity: 0.34, tone: "text-accent" },
  { top: "38%", left: "-5%", size: 14, rotate: -8, opacity: 0.4, tone: "text-ink-lilac" },
  { bottom: "16%", left: "-8%", size: 31, rotate: -44, opacity: 0.38, tone: "text-ink-lilac" },
  { bottom: "-8%", left: "13%", size: 25, rotate: 20, opacity: 0.36, tone: "text-ink-lilac" },
  { bottom: "-6%", left: "38%", size: 18, rotate: -58, opacity: 0.28, tone: "text-accent" },
  { top: "-4%", right: "-5%", size: 23, rotate: 34, opacity: 0.32, tone: "text-beige-soft" },
] as const;

export function PetalHalo({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {HALO.map((p, i) => (
        <Petal
          key={i}
          className={`absolute ${p.tone}`}
          style={{
            top: "top" in p ? p.top : undefined,
            bottom: "bottom" in p ? p.bottom : undefined,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </span>
  );
}

/** Voile léger : quelques pétales à peine perceptibles derrière un bloc. */
const CHAMP_LEGER = [
  { x: 6, y: 12, size: 190, rotate: -18, opacity: 0.05, tone: "text-ink-lilac" },
  { x: 78, y: 4, size: 130, rotate: 34, opacity: 0.045, tone: "text-ink-lilac" },
  { x: 88, y: 62, size: 220, rotate: -8, opacity: 0.04, tone: "text-ink-lilac" },
  { x: 16, y: 74, size: 150, rotate: 22, opacity: 0.05, tone: "text-ink-lilac" },
];

/**
 * Gros plan : des pétales bien plus grands, qui débordent des bords pour qu'on
 * ne voie jamais la forme entière — c'est ce hors-cadre qui fait la matière,
 * un pétale entier posé au milieu se lirait comme un logo. Les trois teintes
 * alternent, et les plus grands restent sur les marges pour laisser la colonne
 * de lecture tranquille.
 */
const CHAMP_DENSE = [
  { x: -9, y: 2, size: 400, rotate: -24, opacity: 0.14, tone: "text-ink-lilac" },
  { x: 44, y: -12, size: 230, rotate: 58, opacity: 0.09, tone: "text-beige-soft" },
  { x: 82, y: -6, size: 320, rotate: 36, opacity: 0.13, tone: "text-accent" },
  { x: 86, y: 26, size: 460, rotate: -14, opacity: 0.1, tone: "text-ink-lilac" },
  { x: -11, y: 40, size: 360, rotate: 30, opacity: 0.12, tone: "text-beige-soft" },
  { x: 74, y: 66, size: 420, rotate: -38, opacity: 0.11, tone: "text-ink-lilac" },
  { x: 2, y: 74, size: 280, rotate: 12, opacity: 0.13, tone: "text-accent" },
  { x: 30, y: 90, size: 330, rotate: -52, opacity: 0.08, tone: "text-ink-lilac" },
];

/**
 * Pétales clairs et volumineux, pour les strates sombres. Mêmes positions que
 * le gros plan, mais en blanc : sur un fond profond, les teintes de la palette
 * disparaissent, seul le blanc voilé se détache. Les opacités montent un peu,
 * un blanc à 5% sur du violet ne se voit pas.
 */
const CHAMP_CLAIR = CHAMP_DENSE.map((p) => ({
  ...p,
  tone: "text-white",
  opacity: Math.min(p.opacity + 0.03, 0.16),
}));

/**
 * Matière de fond, purement décoratif et sous le contenu. Positions, tailles et
 * angles fixes mais irréguliers : la variation évite l'effet « motif dupliqué »
 * d'un fond répétitif.
 */
export function PetalField({
  dense = false,
  clair = false,
  className = "",
}: {
  /** Gros plan : pétales larges et plus present, pour donner de la matière à
   *  une strate qui n'a que du texte à montrer. */
  dense?: boolean;
  /** Pétales blancs, pour les strates sombres. Implique le gros plan. */
  clair?: boolean;
  className?: string;
}) {
  const petals = clair ? CHAMP_CLAIR : dense ? CHAMP_DENSE : CHAMP_LEGER;

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <Petal
          key={`${p.x}-${p.y}`}
          className={`absolute ${p.tone}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Fondu discret des quatre bords, en transparence : les visuels se fondent
 * dans le fond de la strate au lieu de s'y arrêter net (les bras de la
 * tablette, le bureau de l'ordinateur). Les deux dégradés sont croisés, chacun
 * n'efface que sa bordure.
 */
export const FONDU_BORDS: React.CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent), linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent), linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};
