/**
 * Icône Quiz Environnement HD — boussole stylisée avec 6 points (les 6 profils).
 * Utilisée sur /mes-offres (section Quiz) et /test-gratuit (présentation Quiz).
 *
 * Couleur principale : vert sauge (#7a9b6d), assorti au token "free".
 */
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
