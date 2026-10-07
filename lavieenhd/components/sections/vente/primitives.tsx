import type { ReactNode } from "react";
import { PetalDivider } from "@/components/sections/vente/motifs";
import { Reveal } from "@/components/sections/vente/Reveal";

/**
 * Fonds des strates. Une page de vente est longue : on alterne clair / coloré /
 * sombre pour créer du rythme, au lieu d'un fond unique sur 4000px.
 */
const BG = {
  paper: "bg-paper",
  white: "bg-white",
  /**
   * Strate profonde, pour les temps forts. Violet désaturé, plus doux que le
   * `ink-deep` des boutons, qui rendait le bloc trop dense sur toute une
   * hauteur d'écran. On ne réutilise pas un ton de la palette : `ink` fait
   * tomber le turquoise des titres à 2.9:1 et le corps à 4.3:1, sous le seuil
   * AA. Ici on mesure 4.22:1 sur le turquoise et 6.10:1 sur le corps.
   */
  deep: "bg-[#5a4e69] text-white",
  lavender: "bg-lavender-gradient",
  turquoise: "bg-turquoise-soft/60",
  /** Teinte claire de l'accent de la page (voir <VenteTheme>). */
  accent: "bg-accent-soft/60",
} as const;

export type VenteBg = keyof typeof BG;

/**
 * Enveloppe de strate : fond, respiration verticale, ancre de navigation.
 * `scroll-mt` compense le bandeau de navigation collant du site, sinon les
 * liens d'ancre déposent le titre sous le menu.
 */
export function VenteSection({
  id,
  bg = "paper",
  children,
  className = "",
  wide = false,
  decor,
}: {
  id?: string;
  bg?: VenteBg;
  children: ReactNode;
  className?: string;
  /** Passe le conteneur en pleine largeur de contenu (grilles, mockups). */
  wide?: boolean;
  /** Décor de fond posé sur toute la largeur de la strate, hors du conteneur
   *  de lecture — sinon un motif large resterait enfermé au centre. */
  decor?: ReactNode;
}) {
  return (
    <section
      id={id}
      // Si un jour une strate a besoin d'un bloc collant, il faudra passer en
      // `overflow-clip` : `hidden` fait de la section un conteneur de
      // défilement, ce qui neutralise silencieusement tout `sticky` interne.
      className={`relative scroll-mt-36 overflow-hidden px-6 py-20 md:px-20 md:py-28 ${BG[bg]} ${className}`}
    >
      {decor}
      <div className={`relative mx-auto ${wide ? "max-w-(--container-content)" : "max-w-[880px]"}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * En-tête de strate : eyebrow, séparateur pétale, titre.
 * Le titre reste centré et court ; les paragraphes, eux, sont toujours ferrés à
 * gauche dans le corps des sections.
 */
export function SectionHeader({
  eyebrow,
  title,
  centered = true,
  onDeep = false,
  filet = true,
}: {
  /** Optionnel : certaines strates n'en ont pas dans le texte d'origine. */
  eyebrow?: string;
  title: ReactNode;
  centered?: boolean;
  /** Variante pour les strates sombres (texte clair, eyebrow turquoise). */
  onDeep?: boolean;
  /** Séparateur à pétale au-dessus du titre. À couper quand la strate n'a pas
   *  d'eyebrow : seul, le filet n'annonce plus rien, il meuble. */
  filet?: boolean;
}) {
  return (
    <Reveal className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`font-body text-[11px] uppercase tracking-[0.28em] ${
            onDeep ? "text-accent" : "text-ink-soft"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {filet && <PetalDivider centered={centered} className={eyebrow ? "mt-7" : ""} />}
      {/* La marge haute sépare le titre de ce qui le précède ; sans eyebrow ni
          filet, elle n'ouvrirait qu'un vide en tête de strate. */}
      <h2
        className={`font-display text-[30px] font-light leading-[1.15] md:text-[46px] ${
          eyebrow || filet ? "mt-6" : ""
        } ${onDeep ? "text-white" : "text-ink-deep"}`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

/**
 * Bouton d'action. Un seul style de bouton sur toute la page : plein pour
 * l'action principale, contour pour la secondaire. Le survol ne touche jamais à
 * la géométrie (couleur seule), l'appui donne un retour tactile discret.
 */
export function Cta({
  href,
  children,
  variant = "primary",
  external = false,
  onDeep = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  /** Variante pour les strates sombres : le violet du bouton plein s'y noierait.
   *  On prend le turquoise d'accent, qui donne 5.32:1 avec le texte encre. */
  onDeep?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-9 pt-[17px] pb-[15px] text-center font-body text-[11px] uppercase leading-snug tracking-[0.22em] transition-colors duration-300 active:scale-[0.98] motion-reduce:active:scale-100";

  const styles = onDeep
    ? variant === "primary"
      ? "bg-accent text-ink-deep hover:bg-white"
      : "border border-accent text-accent hover:bg-accent hover:text-ink-deep"
    : variant === "primary"
      ? "bg-ink-deep text-white hover:bg-accent hover:text-ink-deep"
      : "border border-ink-deep bg-white/40 text-ink-deep hover:bg-ink-deep hover:text-white";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

/** Bande de rappel du CTA principal entre deux strates. */
export function CtaBand({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    // Pas de marge haute : la bande suit toujours une strate qui a déjà sa
    // propre respiration en bas, et les deux s'additionnaient.
    <div className="bg-paper px-6 pb-12 text-center md:pb-16">
      <Reveal>
        <Cta href={href} external={external}>
          {children}
        </Cta>
      </Reveal>
    </div>
  );
}

/** Citation pleine largeur sur fond profond — respiration entre deux strates. */
export function CitationBand({
  children,
  cite,
  tone = "deep",
}: {
  children: ReactNode;
  cite?: string;
  tone?: "deep" | "soft";
}) {
  const isDeep = tone === "deep";

  return (
    <div
      className={`relative overflow-hidden px-6 py-16 text-center md:py-20 ${
        isDeep ? "bg-ink-deep" : "bg-line/50"
      }`}
    >
      <Reveal className="relative mx-auto max-w-[720px]">
        <blockquote
          className={`font-display text-[22px] font-light italic leading-[1.5] md:text-[30px] ${
            isDeep ? "text-white" : "text-ink-deep"
          }`}
        >
          {children}
        </blockquote>
        {cite && (
          <cite
            className={`mt-5 block font-body text-[11px] uppercase not-italic tracking-[0.18em] ${
              isDeep ? "text-white/65" : "text-ink-soft"
            }`}
          >
            {cite}
          </cite>
        )}
      </Reveal>
    </div>
  );
}
