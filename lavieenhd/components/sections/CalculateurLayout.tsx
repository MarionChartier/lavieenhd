"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";
import {
  CalculateurTemoignages,
  type TemoignageKey,
} from "@/components/sections/CalculateurTemoignages";
import { useBodygraphResult } from "@/components/sections/BodygraphChart";

/**
 * Met un texte et le calculateur côte à côte, puis passe en pleine largeur dès
 * qu'un schéma est calculé. Le calculateur reste toujours APRÈS le texte, à sa
 * place : la bascule n'élargit que sa colonne, elle ne le déplace jamais — un
 * schéma qui remonte au-dessus du texte qu'on vient de lire désoriente.
 *
 * Le calculateur occupe aussi la même position dans l'arbre React d'un état à
 * l'autre, seules les classes changent : il n'est jamais démonté, donc le widget
 * ne recalcule pas.
 *
 * `columns` : les classes de la grille à deux colonnes avant le calcul, propres
 * à chaque page — le hero et /test-gratuit n'ont pas le même ratio.
 *
 * `temoignages` : les voix affichées sous le formulaire, propres à chaque page
 * elles aussi — la home en montre deux, elle a plus de place sous sa carte.
 */
export function CalculateurLayout({
  columns,
  temoignages,
  children,
}: {
  columns: string;
  temoignages: readonly TemoignageKey[];
  children: ReactNode;
}) {
  const hasResult = useBodygraphResult();
  const calculateur = useRef<HTMLDivElement>(null);
  const dejaAmene = useRef(false);

  /**
   * En pleine largeur, le calculateur descend sous le texte : sur desktop le
   * schéma atterrit près de 1000px plus bas que le bouton qu'on vient de
   * cliquer. On l'amène donc dans le champ de vision, une seule fois.
   *
   * Deux passages : le widget met plusieurs secondes à dessiner le schéma, et
   * il déplace lui-même le défilement en cours de route — d'où l'arrivée en bas
   * du schéma. On réaligne donc en haut une fois qu'il a fini de grandir, sauf
   * si la personne a repris la main entre-temps.
   */
  useEffect(() => {
    if (!hasResult || dejaAmene.current) return;
    dejaAmene.current = true;
    const cible = calculateur.current;
    if (!cible) return;

    // Déplacement sec, jamais animé : sur mobile le navigateur annule un
    // défilement animé dès qu'un doigt touche l'écran — celui du bouton qu'on
    // vient d'appuyer suffit, et on reste alors sur place.
    const amener = () => cible.scrollIntoView({ behavior: "instant", block: "start" });
    amener();

    // Un `wheel`/`touchstart`/`keydown` est un geste qui ne peut venir que de
    // la personne : contrairement à un évènement `scroll`, ni notre propre
    // amener(), ni le widget (son ancrage de scroll pendant qu'il grandit,
    // constaté au débogage) ne peuvent le déclencher à notre place.
    let mainRendue = false;
    const rendreLaMain = () => {
      mainRendue = true;
    };
    const evenements = ["wheel", "touchstart", "keydown"] as const;
    evenements.forEach((e) => window.addEventListener(e, rendreLaMain, { passive: true }));

    let minuteur = 0;
    const observateur = new ResizeObserver(() => {
      window.clearTimeout(minuteur);
      // Taille stable depuis 1200ms : le schéma est posé, on peut recadrer.
      // Le widget passe par plusieurs tailles transitoires avant de se fixer,
      // avec jusqu'à ~1s d'écart entre les deux dernières (mesuré) — un délai
      // plus court verrouille le recalage sur une taille encore provisoire.
      minuteur = window.setTimeout(() => {
        observateur.disconnect();
        if (!mainRendue) amener();
      }, 1200);
    });
    observateur.observe(cible);
    // Filet : si le widget n'arrête jamais de bouger, on lâche l'affaire — sans
    // recadrer. Un recadrage tardif se produirait longtemps après le résultat,
    // donc potentiellement après que la personne a navigué ailleurs : elle
    // cliquait « Accueil », remontait, puis se faisait redescendre ici.
    const abandon = window.setTimeout(() => observateur.disconnect(), 12000);

    return () => {
      observateur.disconnect();
      window.clearTimeout(minuteur);
      window.clearTimeout(abandon);
      evenements.forEach((e) => window.removeEventListener(e, rendreLaMain));
    };
  }, [hasResult]);

  return (
    <div
      className={
        hasResult ? "flex flex-col gap-12 lg:gap-16" : `grid items-start ${columns}`
      }
    >
      <div className="relative isolate">{children}</div>
      <div
        ref={calculateur}
        className={`relative scroll-mt-24 ${hasResult ? "" : "lg:pt-2"}`}
      >
        <HDSimulatorForm />
        {/* Le vide sous le formulaire n'existe que dans l'état deux colonnes :
            en pleine largeur le schéma occupe toute la place. */}
        {!hasResult && <CalculateurTemoignages items={temoignages} />}
      </div>
    </div>
  );
}
