"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type ComponentType } from "react";
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
 * Correctif du responsive du widget, injecté dans son shadow DOM (ouvert).
 *
 * Le bug côté widget : ses cases de date font un pourcentage de la carte avec
 * une police fixe de 16px, et sa bascule mobile est une media query sur le
 * VIEWPORT (`@media (max-width: 600px)`). Embarqué dans une colonne, il se
 * croit donc sur desktop même quand sa carte fait 530px — et le champ année
 * rogne les quatre chiffres saisis (constaté sur laptop 14", viewport 1280px).
 *
 * On rejoue ici ses propres règles mobiles (formulaire uniquement), mais
 * conditionnées à la largeur de la CARTE via une container query. Seuil à
 * 620px : au-dessus, sa mise en page desktop laisse déjà ~8px de marge au
 * champ année (67px nécessaires, mesurés). Sans support container queries,
 * le patch est inerte et on retombe sur le comportement actuel du widget.
 *
 * Sélecteurs `bgec-*` : nommage sémantique stable du widget, mais tiers quand
 * même — si Bodygraph les renomme, le patch redevient inerte (pas de casse,
 * le rognage revient). À re-vérifier après toute mise à jour de leur script.
 */
const BODYGRAPH_RESPONSIVE_PATCH = `
  :host {
    display: block;
    container-type: inline-size;
  }
  @container (max-width: 620px) {
    .bgec-half-col { margin: 0; }
    .bgec-half-col .bgec-inner-col { width: 100%; padding: 0; margin-bottom: 15px; }
    .bgec-form-detail-section .bgec-input-item { margin-bottom: 0; }
    .bgec-dob-format { margin-bottom: 0; }
  }
`;

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
  const wrapper = useRef<HTMLDivElement>(null);

  /**
   * Le shadow root n'existe qu'une fois le script Bodygraph chargé et l'élément
   * custom upgradé — un instant qu'aucun évènement ne signale. On sonde donc
   * toutes les 100ms jusqu'à pouvoir adopter la feuille, puis on s'arrête.
   * Adoptée en DERNIER : le widget style via adoptedStyleSheets, arriver après
   * lui suffit à gagner la cascade à spécificité égale.
   */
  useEffect(() => {
    const embed = wrapper.current?.querySelector("bodygraph-embed");
    if (!embed) return;

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(BODYGRAPH_RESPONSIVE_PATCH);

    const interval = window.setInterval(() => {
      const root = embed.shadowRoot;
      if (!root) return;
      if (!root.adoptedStyleSheets.includes(sheet)) {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      }
      window.clearInterval(interval);
    }, 100);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div ref={wrapper}>
      <Script src={BODYGRAPH.script} />
      <BodygraphEmbed chart-id={BODYGRAPH.chartId} token={BODYGRAPH.token} />
    </div>
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

