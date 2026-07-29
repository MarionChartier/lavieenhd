"use client";

import Script from "next/script";
import { useEffect, useState, type ComponentType } from "react";
import { BODYGRAPH } from "@/lib/links";

/** Préfixe du hash dans lequel le widget encode les données de naissance. */
const RESULT_HASH = "#chart,";

/**
 * Le web component servi par Bodygraph. React 19 transmet correctement les
 * attributs d'un élément custom ; le typer par le nom de balise demanderait
 * d'augmenter le namespace JSX global, cet alias local suffit.
 */
const BodygraphEmbed = "bodygraph-embed" as unknown as ComponentType<{
  "chart-id": string;
  token: string;
}>;

/**
 * Calculateur Bodygraphchart monté directement dans la page, et non dans un
 * iframe. C'est le mode d'intégration officiel : la page d'embed de Bodygraph
 * ne contient elle-même que ce script et cette balise.
 *
 * Pourquoi surtout pas d'iframe : le widget conserve les données de naissance
 * dans le hash de la page (`#chart,<base64>`) et les relit via
 * `window.top.location.href`. Depuis un iframe cross-origin cette lecture lève
 * une exception, le widget retombe sur sa propre URL (sans hash) et repart d'un
 * formulaire vide — d'où le résultat prisonnier de l'iframe, et le formulaire à
 * ressaisir après une redirection. Dans notre document `window.top` est notre
 * page : il lit son hash, affiche le schéma en pleine largeur, à sa hauteur
 * naturelle, et le résultat survit à un rechargement.
 */
export function BodygraphChart() {
  return (
    <>
      <Script src={BODYGRAPH.script} />
      <BodygraphEmbed chart-id={BODYGRAPH.chartId} token={BODYGRAPH.token} />
    </>
  );
}

/** `true` dès que l'URL porte un résultat de calcul (`#chart,<base64>`). */
export function useBodygraphResult(): boolean {
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    const read = () => setHasResult(window.location.hash.startsWith(RESULT_HASH));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return hasResult;
}

