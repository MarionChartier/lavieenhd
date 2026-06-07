import Image from "next/image";

/**
 * Bandeau "Transit solaire actuel" — MAQUETTE.
 * Les données (porte, dates, mini-explication) sont ici en dur à titre d'exemple.
 * À terme, elles seront alimentées par le fichier Excel des transits de Marion
 * (sélection automatique de la ligne correspondant à la date du jour).
 */

// Donnée d'exemple, à remplacer par l'entrée du jour issue de l'Excel.
const TRANSIT = {
  porte: "12",
  nom: "La Prudence",
  periode: "du 9 au 14 juin",
  resume:
    "Une période pour choisir tes mots avec soin et n'exprimer que ce qui est vraiment juste pour toi.",
};

export function TransitSolaireBanner() {
  return (
    <section className="px-6 py-10 md:px-20 md:py-16">
      <div className="mx-auto max-w-(--container-content)">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-[#d8bf8b]/50 px-6 py-6 text-center shadow-[0_16px_40px_-26px_rgba(80,60,98,0.25)] md:flex-row md:gap-8 md:px-10 md:py-7 md:text-left">
          {/* Fond paillettes doré (même que le header) + voile pour la lisibilité */}
          <Image
            src="/assets/header-glitter.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/55" />

          {/* Soleil + porte */}
          <div className="relative flex flex-none items-center gap-4">
            <SunIcon className="h-11 w-11 flex-none text-[#b8975a] md:h-12 md:w-12" />
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.26em] text-ink-deep/60">
                Transit solaire actuel
              </p>
              <p className="mt-1 font-display text-[22px] font-light leading-none text-ink-deep md:text-[26px]">
                Porte {TRANSIT.porte} <span className="italic">· {TRANSIT.nom}</span>
              </p>
              <p className="mt-1 font-body text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                {TRANSIT.periode}
              </p>
            </div>
          </div>

          {/* Séparateur vertical (desktop) */}
          <span aria-hidden className="relative hidden h-12 w-px bg-ink-deep/20 md:block" />

          {/* Mini explication */}
          <p className="relative font-display text-[16px] font-light italic leading-snug text-ink-deep md:text-[18px]">
            {TRANSIT.resume}
          </p>
        </div>
      </div>
    </section>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.85" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 360) / 12;
          const rad = (a * Math.PI) / 180;
          const x1 = 24 + Math.cos(rad) * 13;
          const y1 = 24 + Math.sin(rad) * 13;
          const x2 = 24 + Math.cos(rad) * 18;
          const y2 = 24 + Math.sin(rad) * 18;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}
