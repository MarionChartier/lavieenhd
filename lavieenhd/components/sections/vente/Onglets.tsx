"use client";

import { useId, useState, type KeyboardEvent, type ReactNode } from "react";

export type Onglet = { label: string; contenu: ReactNode };

/**
 * Onglets accessibles (rôles ARIA tablist/tab/tabpanel, flèches gauche et
 * droite). Un seul panneau visible à la fois : sur RECONNECT, le détail des
 * trois formules empilées faisait trois écrans de plus, alors que le
 * comparatif complet reste dans le tableau de la section d'achat.
 */
export function Onglets({ onglets }: { onglets: Onglet[] }) {
  const [actif, setActif] = useState(0);
  const base = useId();

  function auClavier(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const pas = e.key === "ArrowRight" ? 1 : -1;
    const suivant = (actif + pas + onglets.length) % onglets.length;
    setActif(suivant);
    document.getElementById(`${base}-tab-${suivant}`)?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-line bg-white/80 p-1.5"
      >
        {onglets.map((onglet, i) => (
          <button
            key={onglet.label}
            id={`${base}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={actif === i}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={actif === i ? 0 : -1}
            onClick={() => setActif(i)}
            onKeyDown={auClavier}
            className={`rounded-full px-5 pt-[11px] pb-[9px] font-body text-[11px] uppercase leading-none tracking-[0.2em] transition-colors duration-300 md:px-7 ${
              actif === i ? "bg-ink-deep text-white" : "text-ink-deep hover:bg-accent-soft"
            }`}
          >
            {onglet.label}
          </button>
        ))}
      </div>

      {onglets.map((onglet, i) => (
        <div
          key={onglet.label}
          id={`${base}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${i}`}
          hidden={actif !== i}
          className="mt-8"
        >
          {onglet.contenu}
        </div>
      ))}
    </div>
  );
}
