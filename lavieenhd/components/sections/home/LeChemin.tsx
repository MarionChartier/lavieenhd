import Image from "next/image";
import Link from "next/link";
import { OFFRES, type Offre, type OffreColor } from "@/lib/content/offres";

const COLOR_GRADIENTS: Record<OffreColor, string> = {
  free: "bg-[linear-gradient(135deg,#f4ead2_0%,#e7d3a6_100%)]",
  violet: "bg-[linear-gradient(135deg,#ece4f5_0%,#dccef0_100%)]",
  turquoise: "bg-[linear-gradient(135deg,#dbeef4_0%,#c5e6e9_100%)]",
  beige: "bg-[linear-gradient(135deg,#f0e3cc_0%,#e5d4b4_100%)]",
};

export function LeChemin() {
  return (
    <section className="relative bg-paper px-6 pt-16 pb-24 md:px-20 md:pt-20 md:pb-32">
      <div className="relative z-10 mx-auto max-w-(--container-content)">
        {/* Header — titre script + eyebrow + description */}
        <div className="text-center">
          <h2 className="font-script text-[30px] tracking-wide text-ink-deep">
            Bienvenue chez toi
          </h2>
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            — Le parcours en 6 étapes —
          </p>
          <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-relaxed text-ink">
            Tu peux les emprunter dans l'ordre, ou choisir celui qui te parle aujourd'hui.
          </p>
        </div>

        {/* Vertical journey */}
        <div className="relative mx-auto mt-16 max-w-[1180px] md:mt-20">
          {/* Postcards */}
          <div className="flex flex-col gap-6">
            {OFFRES.map((offre) => (
              <Postcard key={offre.num} offre={offre} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Postcard({ offre }: { offre: Offre }) {
  const gradient = COLOR_GRADIENTS[offre.color];
  // Le Quiz (offre 01) mène à la page "Quiz gratuits" (/quiz).
  // La Fleur de Talents (Blooming) renvoie directement vers sa page de vente (offre.href).
  // Les autres offres mènent à leur page dédiée.
  const isQuiz = offre.num === "01";
  const isDirectSale = offre.slug === "fleur-de-talents";
  const href = isQuiz || isDirectSale ? offre.href : `/mes-offres/${offre.slug}`;

  return (
    <Link
      href={href}
      {...(isDirectSale ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="relative block transition-all hover:-translate-y-1"
    >
      {/* Accent floral discret — uniquement pour l'offre signature, dans la zone droite */}
      {offre.signature && (
        <MiniFleur className="pointer-events-none absolute top-3 right-3 z-10 h-10 w-10 text-ink-deep opacity-50" />
      )}

      <div
        className={`grid grid-cols-1 overflow-hidden rounded-md border border-ink/12 bg-white shadow-[0_12px_30px_-20px_rgba(80,60,98,0.18)] transition-all md:h-[160px] md:grid-cols-[220px_1fr_280px] ${
          offre.signature
            ? "hover:border-turquoise hover:shadow-[0_0_60px_8px_rgba(117,206,210,0.55),0_20px_50px_-15px_rgba(80,60,98,0.22)]"
            : "hover:border-turquoise hover:shadow-[0_24px_48px_-24px_rgba(80,60,98,0.18)]"
        }`}
      >
        {/* LOGO — gauche, zone colorée */}
        <div className={`relative grid place-items-center overflow-hidden p-4 ${gradient}`}>
          <div className="absolute -inset-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_65%)]" />
          {offre.logoSrc ? (
            <Image
              src={offre.logoSrc}
              alt=""
              width={170}
              height={110}
              className={`relative w-auto object-contain ${
                offre.slug === "inside"
                  ? "max-h-[201px] max-w-[100%] -translate-y-7"
                  : offre.slug === "reveal"
                    ? "max-h-[165px] max-w-[92%] -translate-y-4"
                    : offre.slug === "place-to-be"
                      ? "max-h-[155px] max-w-[90%]"
                      : offre.slug === "fleur-de-talents"
                        ? "max-h-[140px] max-w-[88%] -translate-y-2"
                        : "max-h-[120px] max-w-[85%]"
              }`}
            />
          ) : offre.signature ? (
            <FleurSvg />
          ) : offre.num === "01" ? (
            <QuizIcon />
          ) : (
            <span className="relative font-display text-[56px] italic text-ink-deep">
              {offre.num}
            </span>
          )}
        </div>

        {/* TEXT — centre */}
        <div className="flex flex-col justify-center gap-3 px-6 py-5 md:px-8 md:py-0">
          <span
            className={`font-body text-[10px] uppercase tracking-[0.22em] ${
              offre.signature ? "text-turquoise" : "text-ink-soft"
            }`}
          >
            {offre.tag}
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display text-[28px] leading-none text-ink-deep md:text-[32px]">
              {offre.name}
              {offre.trademark && <sup className="ml-0.5 text-[0.5em]">®</sup>}
            </h3>
            {offre.subtitle && (
              <p className="font-display text-[13px] font-light leading-snug text-ink-deep md:text-[14px]">
                {offre.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* DESCRIPTION — droite, même zone colorée que le logo */}
        <div className={`relative grid place-items-center overflow-hidden px-6 py-5 ${gradient}`}>
          <div className="absolute -inset-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0%,transparent_70%)]" />
          <p className="relative font-display text-[16px] font-light leading-snug text-ink-deep md:text-[18px]">
            {offre.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}

/** Mini-fleur 8-pétales — décoration pour l'offre signature. La couleur suit currentColor (text-*). */
function MiniFleur({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const angleDeg = (i * 360) / 8 - 90;
          const rad = (angleDeg * Math.PI) / 180;
          const cx = 140 + Math.cos(rad) * 55;
          const cy = 140 + Math.sin(rad) * 55;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="16"
              ry="46"
              transform={`rotate(${angleDeg + 90} ${cx} ${cy})`}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Mini-logo pour le Quiz Environnement HD — boussole stylisée avec 6 points (les 6 profils) */
function QuizIcon() {
  return (
    <svg viewBox="0 0 120 120" className="relative h-[90px] w-[90px]">
      {/* Cercle externe pointillé — suggestion d'exploration */}
      <circle
        cx="60"
        cy="60"
        r="48"
        fill="none"
        stroke="#bea4d8"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      {/* 6 points autour — les 6 environnements possibles */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 360) / 6 - 90;
        const rad = (angle * Math.PI) / 180;
        const cx = 60 + Math.cos(rad) * 38;
        const cy = 60 + Math.sin(rad) * 38;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4.5"
            fill="#75ced2"
            opacity="0.85"
          />
        );
      })}

      {/* Coeur central */}
      <circle cx="60" cy="60" r="11" fill="#503c62" />
      <circle cx="60" cy="60" r="5" fill="#75ced2" />
    </svg>
  );
}

/** SVG géométrique 8-pétales pour la Fleur de Talents Innés® (placeholder en attendant le logo final) */
function FleurSvg() {
  return (
    <svg viewBox="0 0 280 280" className="relative h-[100px] w-[100px]">
      <g fill="none" stroke="#503c62" strokeWidth="2.5" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const angleDeg = (i * 360) / 8 - 90;
          const rad = (angleDeg * Math.PI) / 180;
          const cx = 140 + Math.cos(rad) * 60;
          const cy = 140 + Math.sin(rad) * 60;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="18"
              ry="48"
              transform={`rotate(${angleDeg + 90} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="140" cy="140" r="14" fill="#75ced2" stroke="none" opacity="0.5" />
        <circle cx="140" cy="140" r="6" fill="#503c62" stroke="none" />
      </g>
    </svg>
  );
}
