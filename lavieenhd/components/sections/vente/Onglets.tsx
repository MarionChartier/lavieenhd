"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type Onglet = {
  label: string;
  contenu: ReactNode;
  /** Répète la barre sous ce panneau, pour les panneaux longs. */
  barreEnBas?: boolean;
};

/**
 * Onglets accessibles (rôles ARIA tablist/tab/tabpanel, flèches gauche et
 * droite). Un seul panneau visible à la fois : sur RECONNECT, le détail des
 * trois formules empilées faisait trois écrans de plus, alors que le
 * comparatif complet reste dans le tableau de la section d'achat.
 *
 * La barre peut être répétée sous un panneau long (`barreEnBas`) : sans elle,
 * il fallait remonter tout en haut pour changer d'onglet. Celle du bas ramène
 * en haut du bloc, pour lire le nouveau panneau depuis son début.
 */
export function Onglets({ onglets }: { onglets: Onglet[] }) {
  const [actif, setActif] = useState(0);
  const base = useId();
  const racine = useRef<HTMLDivElement>(null);

  function depuisLeBas(i: number) {
    setActif(i);
    racine.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function auClavier(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const pas = e.key === "ArrowRight" ? 1 : -1;
    const suivant = (actif + pas + onglets.length) % onglets.length;
    setActif(suivant);
    document.getElementById(`${base}-tab-${suivant}`)?.focus();
  }

  return (
    // `scroll-mt` : le retour en haut ne doit pas glisser la barre sous le
    // bandeau de navigation collant du site.
    <div ref={racine} className="scroll-mt-36">
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

      {/* Copie de la barre, sans rôles d'onglets : les lecteurs d'écran ont
          déjà la vraie liste en haut, celle-ci n'est qu'un raccourci. */}
      {onglets[actif].barreEnBas && (
        <nav
          aria-label="Changer de formule"
          className="mx-auto mt-8 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-line bg-white/80 p-1.5"
        >
          {onglets.map((onglet, i) => (
            <button
              key={onglet.label}
              type="button"
              aria-current={actif === i ? "true" : undefined}
              onClick={() => depuisLeBas(i)}
              className={`rounded-full px-5 pt-[11px] pb-[9px] font-body text-[11px] uppercase leading-none tracking-[0.2em] transition-colors duration-300 md:px-7 ${
                actif === i ? "bg-ink-deep text-white" : "text-ink-deep hover:bg-accent-soft"
              }`}
            >
              {onglet.label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
