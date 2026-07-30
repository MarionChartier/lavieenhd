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
   * Strate profonde, pour les temps forts. On prend le violet le plus sombre
   * de la palette et pas `ink` : sur `ink`, le turquoise des titres tombe à
   * 2.9:1 et le corps de texte à 4.3:1, tous deux sous le seuil AA.
   */
  deep: "bg-ink-deep text-white",
  lavender: "bg-lavender-gradient",
  turquoise: "bg-turquoise-soft/60",
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
}: {
  id?: string;
  bg?: VenteBg;
  children: ReactNode;
  className?: string;
  /** Passe le conteneur en pleine largeur de contenu (grilles, mockups). */
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-36 overflow-hidden px-6 py-20 md:px-20 md:py-28 ${BG[bg]} ${className}`}
    >
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
}: {
  /** Optionnel : certaines strates n'en ont pas dans le texte d'origine. */
  eyebrow?: string;
  title: ReactNode;
  centered?: boolean;
  /** Variante pour les strates sombres (texte clair, eyebrow turquoise). */
  onDeep?: boolean;
}) {
  return (
    <Reveal className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`font-body text-[11px] uppercase tracking-[0.28em] ${
            onDeep ? "text-turquoise" : "text-ink-soft"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <PetalDivider centered={centered} className={eyebrow ? "mt-5" : ""} />
      <h2
        className={`mt-6 font-display text-[30px] font-light leading-[1.15] md:text-[46px] ${
          onDeep ? "text-white" : "text-ink-deep"
        }`}
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
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  /** La flèche appuie l'élan vers l'avant ; on la retire quand le libellé
   *  se suffit à lui-même et qu'on veut un bouton plus posé. */
  arrow?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-9 pt-[17px] pb-[15px] text-center font-body text-[11px] uppercase leading-snug tracking-[0.22em] transition-colors duration-300 active:scale-[0.98] motion-reduce:active:scale-100";

  const styles =
    variant === "primary"
      ? "bg-ink-deep text-white hover:bg-turquoise hover:text-ink-deep"
      : "border border-ink-deep bg-white/40 text-ink-deep hover:bg-ink-deep hover:text-white";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {arrow && <span aria-hidden>→</span>}
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
    <div className="bg-paper px-6 py-12 text-center md:py-16">
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
