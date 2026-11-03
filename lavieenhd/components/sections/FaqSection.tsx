"use client";

import { useState, type ReactNode } from "react";
import { ancrerPendant } from "@/lib/ancrage";

export type FaqItem = {
  q: string;
  a: ReactNode;
  /** Intertitre du groupe de questions. Affiché devant la première question
   *  d'un groupe, quand il change d'une question à la suivante. */
  groupe?: string;
};

/**
 * Section FAQ en accordéon, réutilisable (accueil + pages d'offres).
 * Une seule réponse ouverte à la fois ; la première est ouverte par défaut.
 */
export function FaqSection({
  items,
  title = (
    <>
      Questions <span className="text-turquoise">fréquentes</span>
    </>
  ),
  eyebrow,
}: {
  items: FaqItem[];
  title?: ReactNode;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-20 md:px-20 md:py-28">
      <div className="mx-auto max-w-(--container-content)">
        <div className="text-center">
          {eyebrow && (
            <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-6 font-display text-[36px] font-light leading-tight text-ink-deep md:text-[52px]">
            {title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col border-t border-ink-deep/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            const nouveauGroupe = item.groupe && item.groupe !== items[i - 1]?.groupe;
            return (
              <div key={item.q} className="border-b border-ink-deep/10">
                {nouveauGroupe && (
                  <p
                    className={`pb-2 font-body text-[11px] uppercase tracking-[0.22em] text-accent-texte ${
                      i === 0 ? "pt-8" : "pt-14"
                    }`}
                  >
                    {item.groupe}
                  </p>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    // La réponse ouverte au-dessus se replie : sans ancrage, la
                    // question cliquée remonterait hors de l'écran.
                    ancrerPendant(e.currentTarget, 320);
                    setOpen(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-[19px] font-semibold leading-snug text-ink-deep md:text-[22px]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex-none text-[24px] leading-none text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[820px] whitespace-pre-line font-display text-[17px] font-light leading-loose text-ink-deep md:text-[19px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
