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
    /* Le widget ajoute 10px de chaque côté à un conteneur déjà étroit ; notre
       carte apporte déjà sa marge. */
    .bgec-main-container { padding-left: 0; padding-right: 0; }
  }
  /* 30px de padding sous le tableau de propriétés, qui s'ajoutent à la marge de
     notre carte et au bloc suivant : ça faisait un grand blanc sous le schéma. */
  .bgec-chart-wrapper.bgec-chart-result-wrap.bgec-chart-portrait,
  .bgec-chart-wrapper.bgec-chart-result-wrap { padding-bottom: 8px; }
  /* Cases de date : le widget leur met 15px de padding de chaque côté, un
     luxe qui coûte cher sous 400px de carte — sur un petit téléphone (320px),
     l'année n'avait plus que ~26px pour 34px de chiffres. Le texte est centré,
     6px suffisent. */
  @container (max-width: 400px) {
    .bgec-section-col-3 .bgec-col-inner .bgec-input-item .bgec-input {
      padding-left: 6px;
      padding-right: 6px;
    }
  }
  /* Tableau de propriétés : sous 420px de carte, le duo libellé/valeur se
     partage la ligne en 60/40 et coupe les valeurs en plein mot
     ("Manifesti ng Generato r"). On les empile, chacun sur toute la largeur —
     c'est ce que le widget fait lui-même, mais sur le viewport et à 374px. */
  @container (max-width: 420px) {
    .bgec-property-single-item { flex-wrap: wrap; }
    /* Sélecteur calqué sur celui du widget (.bgec-chart-result-wrap, 150px
       fixes) : à spécificité égale, notre feuille adoptée en dernier gagne. */
    .bgec-chart-wrapper.bgec-chart-result-wrap .bgec-property-single-item .bgec-property-label,
    .bgec-chart-wrapper.bgec-chart-result-wrap .bgec-property-single-item .bgec-property-content,
    .bgec-property-single-item .bgec-property-label,
    .bgec-property-single-item .bgec-property-content {
      max-width: 100%;
      flex: 1 1 100%;
    }
    .bgec-property-single-item .bgec-property-content { background: #fff; }
  }
  /* Colonnes de planètes : le widget donne 6px de padding À DROITE aux deux,
     alors que la colonne de droite aligne son contenu en fin de ligne
     (bgec-reverse-details, son propre marqueur de colonne miroir). Ces 6px
     tombent donc du côté du bord de l'écran : la pastille de droite finit à
     11px du bord quand celle de gauche est à 5px, et le schéma paraît décalé
     à gauche (constaté par Marion, mesuré à 375px comme à 585px). On renvoie
     ce padding du côté intérieur, les deux pastilles retrouvent 5px.
     Sélecteur calqué sur le leur (4 classes) : le nôtre à 2 classes perdait la
     cascade, quel que soit l'ordre des feuilles. */
  .bgec-chart-result-wrap .bgec-features-list-item.bgec-reverse-details .bgec-single-feature-item {
    padding-right: 0;
    padding-left: 6px;
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

