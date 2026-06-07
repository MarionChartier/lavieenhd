"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

/**
 * Section FAQ en accordéon, réutilisable (accueil + pages d'offres).
 * Une seule réponse ouverte à la fois ; la première est ouverte par défaut.
 */
export function FaqSection({
  items,
  title = "Questions fréquentes",
  eyebrow,
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-20 md:px-20 md:py-28">
      <div className="mx-auto max-w-(--container-content)">
        <div className="text-center">
          {eyebrow && (
            <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 font-display text-[36px] font-light leading-tight text-ink-deep md:text-[52px]">
            {title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col border-t border-ink-deep/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-ink-deep/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-[19px] font-light leading-snug text-ink-deep md:text-[22px]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex-none text-[24px] leading-none text-turquoise transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[820px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
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
