"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------------- */
/* Agrandissement d'image                                                     */
/* ------------------------------------------------------------------------- */

/**
 * Image agrandissable — utilisée pour l'exemple de Fleur, dont le détail se
 * perd à la taille de la mise en page. Fermeture au clic sur le fond, sur la
 * croix, ou avec Échap.
 */
export function ImageZoom({
  src,
  alt,
  width,
  height,
  className = "",
  legende,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  legende?: string;
}) {
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    if (!ouvert) return;

    const auClavier = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    document.addEventListener("keydown", auClavier);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", auClavier);
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOuvert(true)}
        aria-label={`Agrandir : ${alt}`}
        className={`group relative block w-full cursor-zoom-in ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full rounded-[28px] shadow-simu"
        />
        <span
          aria-hidden
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" strokeLinecap="round" />
          </svg>
        </span>
        {legende && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-deep px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.14em] text-white">
            {legende}
          </span>
        )}
      </button>

      {ouvert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOuvert(false)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-dark/90 p-5"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-h-[90vh] w-auto rounded-lg object-contain"
          />
          <button
            type="button"
            onClick={() => setOuvert(false)}
            aria-label="Fermer"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
