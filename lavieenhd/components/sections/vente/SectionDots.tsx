"use client";

import { useEffect, useState } from "react";

export type PointSection = { id: string; label: string };

/**
 * Menu de navigation en points, sur le bord droit de la page de vente — le
 * repère des pages systeme.io de Marion. Le nom de la section apparaît au
 * survol et au focus clavier.
 *
 * Affiché aussi sur téléphone, à la demande de Marion. Sous `md` (768px), la
 * marge des strates ne fait que 24px : les points y sont plus petits et collés
 * au bord pour ne pas toucher le texte, leur zone de tap est agrandie sans
 * déplacer le visuel, et les libellés restent masqués faute de survol au pouce
 * (le nom de la section reste lu par les lecteurs d'écran).
 *
 * Le point actif prend l'accent « texte » de la page (voir <VenteTheme>) :
 * l'accent seul, quand il est pâle (or, vert tendre), se verrait moins sur
 * fond blanc que les points inactifs.
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
      className="pointer-events-none fixed right-1.5 top-1/2 z-40 -translate-y-1/2 md:right-6"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-2 md:gap-4">
        {sections.map(({ id, label }) => {
          const estActif = id === actif;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={estActif ? "true" : undefined}
                className="group flex items-center justify-end gap-3 p-1.5 md:p-0"
              >
                {/* Libellé discret : ni capitales, ni pastille, ni ombre. Il
                    n'accompagne le point que le temps du survol, il ne doit pas
                    peser plus que le texte de la page. Le fond très pâle sert
                    seulement à rester lisible au-dessus d'un visuel. */}
                <span
                  className="pointer-events-none hidden rounded bg-white/80 px-2 pt-[5px] pb-[4px] font-body text-[11px] font-normal leading-none tracking-normal text-ink-soft opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none md:inline"
                >
                  {label}
                </span>
                <span
                  aria-hidden
                  className={`block h-2 w-2 rounded-full md:h-2.5 md:w-2.5 border transition-colors duration-200 motion-reduce:transition-none ${
                    estActif
                      ? "border-accent-texte bg-accent-texte"
                      : "border-ink-deep/35 bg-white/70 group-hover:border-accent-texte"
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
