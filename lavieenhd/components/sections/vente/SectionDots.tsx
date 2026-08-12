"use client";

import { useEffect, useState } from "react";

export type PointSection = { id: string; label: string };

/**
 * Menu de navigation en points, sur le bord droit de la page de vente — le
 * repère des pages systeme.io de Marion. Le nom de la section apparaît au
 * survol et au focus clavier.
 *
 * Masqué sous `lg` : sur un écran étroit il mordrait sur le texte, et le pouce
 * n'a pas de survol pour lire les libellés.
 */
export function SectionDots({ sections }: { sections: PointSection[] }) {
  const [actif, setActif] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const cibles = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!cibles.length) return;

    // Bande de lecture au tiers haut de l'écran : la section active est celle
    // qu'on est en train de lire, pas celle qui affleure en bas.
    const observateur = new IntersectionObserver(
      (entrees) => {
        const visible = entrees.find((e) => e.isIntersecting);
        if (visible) setActif(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    cibles.forEach((cible) => observateur.observe(cible));
    return () => observateur.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Sections de la page"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-4">
        {sections.map(({ id, label }) => {
          const estActif = id === actif;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={estActif ? "true" : undefined}
                className="group flex items-center justify-end gap-3"
              >
                {/* Libellé discret : ni capitales, ni pastille, ni ombre. Il
                    n'accompagne le point que le temps du survol, il ne doit pas
                    peser plus que le texte de la page. Le fond très pâle sert
                    seulement à rester lisible au-dessus d'un visuel. */}
                <span
                  className="pointer-events-none rounded bg-white/80 px-2 pt-[5px] pb-[4px] font-body text-[11px] font-normal leading-none tracking-normal text-ink-soft opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                >
                  {label}
                </span>
                <span
                  aria-hidden
                  className={`block h-2.5 w-2.5 rounded-full border transition-colors duration-200 motion-reduce:transition-none ${
                    estActif
                      ? "border-turquoise bg-turquoise"
                      : "border-ink-deep/35 bg-white/70 group-hover:border-turquoise"
                  }`}
                />
                <span className="sr-only">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
