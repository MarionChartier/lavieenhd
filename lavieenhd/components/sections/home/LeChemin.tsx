import Image from "next/image";
import Link from "next/link";
import { OFFRES, type Offre, type OffreColor } from "@/lib/content/offres";

const COLOR_GRADIENTS: Record<OffreColor, string> = {
  free: "bg-[linear-gradient(135deg,#f4ead2_0%,#e7d3a6_100%)]",
  violet: "bg-[linear-gradient(135deg,#ece4f5_0%,#dccef0_100%)]",
  turquoise: "bg-[linear-gradient(135deg,#dbeef4_0%,#c5e6e9_100%)]",
  beige: "bg-[linear-gradient(135deg,#f0e3cc_0%,#e5d4b4_100%)]",
};

// Bordure au hover, teintée selon la couleur de l'offre.
const COLOR_BORDERS: Record<OffreColor, string> = {
  free: "hover:border-turquoise",
  violet: "hover:border-ink-lilac",
  turquoise: "hover:border-turquoise",
  beige: "hover:border-[#e0a94f]",
};

// Halo coloré au hover, teinté selon la couleur de l'offre (même intensité que le glow signature).
const COLOR_GLOWS: Record<OffreColor, string> = {
  free: "hover:shadow-[0_0_60px_8px_rgba(117,206,210,0.5),0_20px_50px_-15px_rgba(80,60,98,0.22)]",
  violet: "hover:shadow-[0_0_60px_8px_rgba(190,164,216,0.5),0_20px_50px_-15px_rgba(80,60,98,0.22)]",
  turquoise: "hover:shadow-[0_0_60px_8px_rgba(117,206,210,0.5),0_20px_50px_-15px_rgba(80,60,98,0.22)]",
  beige: "hover:shadow-[0_0_60px_8px_rgba(229,212,180,0.5),0_20px_50px_-15px_rgba(80,60,98,0.22)]",
};

export function LeChemin() {
  return (
    <section className="relative bg-paper px-6 pt-16 pb-24 md:px-20 md:pt-20 md:pb-32">
      <div className="relative z-10 mx-auto max-w-(--container-content)">
        {/* Header — titre script + eyebrow + description */}
        <div className="text-center">
          <h2 className="font-script text-[30px] tracking-wide text-ink-deep">
            Bienvenue dans le parcours multi-étapes.
          </h2>
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            — Une traversée progressive, ou un choix ciblé, selon ce qui t’appelle. —
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
  const isQuiz = offre.slug === "quiz";
  const isInside = offre.slug === "inside";
  // Chaque offre renvoie directement vers sa page (offre.href) : /quiz pour le
  // Quiz, la page de vente Blooming pour Fleur de Talents. Les offres dont la
  // page HTML n'est pas encore fournie renvoient vers leur section dans la frise.
  const href = offre.href || `/mes-offres#${offre.slug}`;
  const isExternal = href.startsWith("http");
  // Les pages de vente sont des fichiers .html statiques (pas des routes Next) :
  // on coupe le prefetch pour éviter des requêtes RSC qui renvoient 404.
  const isStaticFile = href.endsWith(".html");

  return (
    <Link
      href={href}
      prefetch={isStaticFile ? false : undefined}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="relative block transition-all hover:-translate-y-1"
    >
      <div
        className={`relative grid grid-cols-1 ${
          isInside ? "overflow-hidden lg:overflow-visible" : "overflow-hidden"
        } rounded-md border border-ink/12 bg-white shadow-[0_12px_30px_-20px_rgba(80,60,98,0.18)] transition-all lg:min-h-[207px] lg:grid-cols-[220px_1fr_300px] ${
          COLOR_BORDERS[offre.color]
        } ${
          offre.signature
            ? "hover:shadow-[0_0_60px_8px_rgba(117,206,210,0.55),0_20px_50px_-15px_rgba(80,60,98,0.22)]"
            : COLOR_GLOWS[offre.color]
        }`}
      >
        {/* LOGO — gauche, zone colorée (aquarelle oracle-frame + voile clair pour le Quiz) */}
        <div
          className={`relative grid place-items-center p-4 ${
            isInside ? "overflow-hidden lg:overflow-visible" : "overflow-hidden"
          } ${isQuiz ? "" : gradient}`}
        >
          {isQuiz && (
            <>
              <Image
                src="/assets/oracle-frame.png"
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 220px, 100vw"
                className="pointer-events-none absolute inset-0 object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-white/50 backdrop-blur-md" />
            </>
          )}
          <div className="absolute -inset-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_65%)]" />
          {offre.logoSrc ? (
            <Image
              src={offre.logoSrc}
              alt=""
              width={170}
              height={110}
              className={`relative w-auto object-contain ${
                offre.slug === "soin-energetique"
                  ? "max-h-[124px] max-w-[86%] translate-y-1 opacity-80 [mask-image:radial-gradient(circle_at_50%_50%,black_48%,transparent_82%)] [-webkit-mask-image:radial-gradient(circle_at_50%_50%,black_48%,transparent_82%)]"
                  : offre.slug === "inside"
                  ? "max-h-[155px] max-w-[100%] lg:absolute lg:inset-0 lg:m-auto lg:max-h-[201px] lg:max-w-[100%]"
                  : offre.slug === "reveal"
                    ? "max-h-[138px] max-w-[88%] lg:max-h-[149px] lg:-translate-y-1"
                    : offre.slug === "place-to-be"
                      ? "max-h-[155px] max-w-[90%]"
                      : offre.slug === "fleur-de-talents"
                        ? "max-h-[160px] max-w-[96%] lg:max-h-[175px] lg:-translate-y-2"
                        : offre.slug === "reconnect"
                          ? "max-h-[144px] max-w-[100%]"
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
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-5 text-center lg:items-start lg:px-8 lg:py-0 lg:text-left">
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
              {offre.trademark && <sup className="ml-0.5 text-[0.5em]">™</sup>}
            </h3>
            {offre.subtitle && (
              <p className="font-display text-[13px] font-light leading-snug text-ink-deep md:text-[14px]">
                {offre.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* DESCRIPTION — droite, même zone colorée que le logo (aquarelle oracle-frame + voile pour le Quiz) */}
        <div className={`relative grid place-items-center overflow-hidden px-6 py-5 ${isQuiz ? "" : gradient}`}>
          {isQuiz && (
            <>
              <Image
                src="/assets/oracle-frame.png"
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 300px, 100vw"
                className="pointer-events-none absolute inset-0 object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-white/60 backdrop-blur-md" />
            </>
          )}
          <div className="absolute -inset-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0%,transparent_70%)]" />
          <p className="relative text-center font-display text-[15px] font-light leading-snug text-ink-deep md:text-[16px] lg:text-left">
            {offre.shortDescription}
          </p>
        </div>
      </div>
    </Link>
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

/** SVG géométrique 8-pétales pour la Fleur de Talents Innés™ (placeholder en attendant le logo final) */
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
