"use client";

import { useEffect, useRef } from "react";

/**
 * Bandeau "On se retrouve sur Instagram".
 *
 * Flux live via Behold.so (web component léger, sans clé API exposée).
 * Pour activer le vrai flux :
 *   1. Créer un feed sur https://behold.so (connexion du compte Instagram).
 *   2. Copier l'identifiant du feed.
 *   3. Le coller dans BEHOLD_FEED_ID ci-dessous.
 * Tant que l'ID est vide, une grille d'exemple (placeholder) est affichée.
 */
const BEHOLD_FEED_ID = "piSaskkOPUDFfBB3e2ZF"; // ← ID du feed Behold de Marion

const INSTAGRAM_URL = "https://www.instagram.com/marionchartier_lavieenhd/";
const HANDLE = "@marionchartier_lavieenhd";

/** Le web component Behold, typé pour TSX sans déclaration globale. */
const BeholdWidget = "behold-widget" as unknown as React.FC<{ "feed-id": string }>;

export function InstagramBanner() {
  const feedRef = useRef<HTMLDivElement>(null);

  // Charge le script Behold une seule fois, et seulement quand la section approche
  // du viewport (différé pour ne pas peser sur le chargement initial de la page).
  useEffect(() => {
    if (!BEHOLD_FEED_ID) return;
    const el = feedRef.current;
    if (!el) return;
    const SRC = "https://w.behold.so/widget.js";
    const load = () => {
      if (document.querySelector(`script[src="${SRC}"]`)) return;
      const s = document.createElement("script");
      s.type = "module";
      s.src = SRC;
      document.body.appendChild(s);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-paper px-6 pt-4 pb-20 md:px-20 md:pt-6 md:pb-24">
      <div className="mx-auto max-w-(--container-content)">
        {/* En-tête */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-[36px] font-light leading-tight text-ink-deep md:text-[52px]">
            Les coulisses, <em className="italic text-turquoise">au quotidien</em>.
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.18em] text-ink-deep transition-colors hover:text-turquoise"
          >
            <InstagramIcon className="h-4 w-4" />
            {HANDLE}
          </a>
        </div>

        {/* Flux Instagram (Behold) ou grille d'exemple */}
        <div ref={feedRef} className="mt-12">
          {BEHOLD_FEED_ID ? (
            <BeholdWidget feed-id={BEHOLD_FEED_ID} />
          ) : (
            <PlaceholderGrid />
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-deep px-8 pt-[18px] pb-[14px] font-body text-[12px] leading-none uppercase tracking-[0.18em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-paper"
          >
            <InstagramIcon className="h-4 w-4" />
            Suivre sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/** Grille d'exemple (6 vignettes) affichée tant que le feed Behold n'est pas branché. */
function PlaceholderGrid() {
  const TILES = [
    "from-[#efe2c6] to-[#e7d3a6]",
    "from-[#e6dcef] to-[#dccef0]",
    "from-[#d6e8ea] to-[#c5e6e9]",
    "from-[#f0e3cc] to-[#e5d4b4]",
    "from-[#ece4f5] to-[#dccef0]",
    "from-[#dbeef4] to-[#c5e6e9]",
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
      {TILES.map((grad, i) => (
        <div
          key={i}
          className={`relative grid aspect-square place-items-center overflow-hidden rounded-md bg-gradient-to-br ${grad}`}
        >
          <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55)_0%,transparent_65%)]" />
          <InstagramIcon className="relative h-7 w-7 text-ink-deep/35" />
        </div>
      ))}
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
