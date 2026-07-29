"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";
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
 */
export function CalculateurLayout({
  columns,
  children,
}: {
  columns: string;
  children: ReactNode;
}) {
  const hasResult = useBodygraphResult();
  const calculateur = useRef<HTMLDivElement>(null);
  const dejaAmene = useRef(false);

  /**
   * En pleine largeur, le calculateur descend sous le texte : sur desktop le
   * schéma atterrit près de 1000px plus bas que le bouton qu'on vient de
   * cliquer. On l'amène donc dans le champ de vision, une seule fois.
   */
  useEffect(() => {
    if (!hasResult || dejaAmene.current) return;
    dejaAmene.current = true;
    const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    calculateur.current?.scrollIntoView({
      behavior: mouvementReduit ? "auto" : "smooth",
      block: "start",
    });
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
      </div>
    </div>
  );
}
