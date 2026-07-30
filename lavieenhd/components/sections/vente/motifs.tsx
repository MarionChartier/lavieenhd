/**
 * Motif signature des pages de vente : le pétale.
 *
 * Il est tiré de l'univers de l'offre — la Fleur de Talents Innés® représente
 * cinq pôles en cinq pétales — plutôt que d'une forme décorative arbitraire.
 * On le décline partout (séparateurs de section, marqueurs d'étapes, matière de
 * fond, puces de listes) pour que la page ait une identité propre au lieu d'un
 * empilement de cartes génériques.
 */

/** Tracé d'un pétale unique, dans une boîte 24×24 pointe en haut. */
const PETAL_PATH = "M12 1.5c5.4 5.6 5.4 15.4 0 21-5.4-5.6-5.4-15.4 0-21z";

/** Pétale seul — puce de liste, accent d'un titre. */
export function Petal({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} style={style}>
      <path d={PETAL_PATH} fill="currentColor" />
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
          <path
            key={angle}
            d={PETAL_PATH}
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
  className = "",
}: {
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex items-center gap-3 ${centered ? "justify-center" : ""} ${className}`}
    >
      <span className="block h-px w-10 bg-gradient-to-r from-transparent to-ink-lilac/60" />
      <Petal className="h-3 w-3 text-turquoise" />
      <span className="block h-px w-10 bg-gradient-to-l from-transparent to-ink-lilac/60" />
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
  { top: "-12%", left: "24%", size: 22, rotate: 42, opacity: 0.36, tone: "text-turquoise" },
  { top: "-9%", left: "58%", size: 28, rotate: -14, opacity: 0.34, tone: "text-ink-lilac" },
  { top: "16%", left: "-9%", size: 20, rotate: 66, opacity: 0.34, tone: "text-turquoise" },
  { top: "38%", left: "-5%", size: 14, rotate: -8, opacity: 0.4, tone: "text-ink-lilac" },
  { bottom: "16%", left: "-8%", size: 31, rotate: -44, opacity: 0.38, tone: "text-ink-lilac" },
  { bottom: "-8%", left: "13%", size: 25, rotate: 20, opacity: 0.36, tone: "text-ink-lilac" },
  { bottom: "-6%", left: "38%", size: 18, rotate: -58, opacity: 0.28, tone: "text-turquoise" },
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

/**
 * Matière de fond : quelques pétales très pâles, tailles et angles variés pour
 * éviter la régularité mécanique. Purement décoratif, sous le contenu.
 */
export function PetalField({ className = "" }: { className?: string }) {
  const petals = [
    { x: 6, y: 12, size: 190, rotate: -18, opacity: 0.05 },
    { x: 78, y: 4, size: 130, rotate: 34, opacity: 0.045 },
    { x: 88, y: 62, size: 220, rotate: -8, opacity: 0.04 },
    { x: 16, y: 74, size: 150, rotate: 22, opacity: 0.05 },
  ];

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <Petal
          key={`${p.x}-${p.y}`}
          className="absolute text-ink-lilac"
          // Positions et tailles fixes mais irrégulières — la variation évite
          // l'effet « motif dupliqué » d'un fond répétitif.
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
