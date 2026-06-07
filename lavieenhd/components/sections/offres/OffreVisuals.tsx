import Image from "next/image";
import type { Offre } from "@/lib/content/offres";

/**
 * Cercle logo d'une offre — partagé entre la vue d'ensemble /mes-offres
 * et les pages d'offres dédiées /mes-offres/[slug].
 */
export function LogoCircle({ offre }: { offre: Offre }) {
  // Le Quiz utilise une icône SVG dont l'anneau pointillé va plus loin que les
  // logos PNG : on réduit le cercle pour rééquilibrer la hauteur de la section.
  const isQuiz = offre.num === "01";
  const circleSize = isQuiz
    ? "h-[260px] w-[260px] md:h-[340px] md:w-[340px]"
    : "h-[300px] w-[300px] md:h-[420px] md:w-[420px]";

  return (
    <div
      className={`relative grid place-items-center rounded-full bg-white/65 shadow-[0_30px_80px_-40px_rgba(80,60,98,0.25)] backdrop-blur-sm ${circleSize}`}
    >
      {offre.logoSrc ? (
        <Image
          src={offre.logoSrc}
          alt={offre.name}
          width={280}
          height={180}
          className={`relative object-contain ${
            offre.slug === "inside" ? "max-h-[82%] max-w-[88%]" : "max-h-[60%] max-w-[65%]"
          }`}
        />
      ) : offre.signature ? (
        <FleurSvg className="relative h-[55%] w-[55%]" />
      ) : isQuiz ? (
        <QuizIcon className="relative h-[55%] w-[55%]" />
      ) : (
        <span className="relative font-display text-[80px] italic text-ink-deep">
          {offre.num}
        </span>
      )}
    </div>
  );
}

/** SVG géométrique 8-pétales pour la Fleur de Talents Innés® */
export function FleurSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} aria-hidden>
      <g fill="none" stroke="#503c62" strokeWidth="2" strokeLinecap="round">
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
              rx="22"
              ry="58"
              transform={`rotate(${angleDeg + 90} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="140" cy="140" r="18" fill="#75ced2" stroke="none" opacity="0.5" />
        <circle cx="140" cy="140" r="8" fill="#503c62" stroke="none" />
      </g>
    </svg>
  );
}

/** Mini-logo pour le Quiz Environnement HD — boussole avec 6 points (les 6 profils) */
export function QuizIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g>
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="#7a9b6d"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6 - 90;
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + Math.cos(rad) * 50;
          const cy = 100 + Math.sin(rad) * 50;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="16"
              fill="none"
              stroke="#7a9b6d"
              strokeWidth="1.5"
            />
          );
        })}
        <circle cx="100" cy="100" r="14" fill="none" stroke="#7a9b6d" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="4" fill="#7a9b6d" />
      </g>
    </svg>
  );
}
