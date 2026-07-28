"use client";

import { EXTERNAL } from "@/lib/links";
import { useBodygraphHeight } from "@/components/sections/HDSimulatorForm";

/** Hauteur de secours : assez grande pour un bodygraph complet + rapports,
 *  ajustée automatiquement si le widget émet sa taille via postMessage. */
const FALLBACK_HEIGHT = 1500;

/**
 * Embed Bodygraphchart pleine page pour /mon-design — la page cible de la
 * redirection post-formulaire configurée dans le dashboard Bodygraph de Marion.
 * Même widget que la carte calculateur, mais sans carte : le résultat dispose
 * de toute la largeur et d'une hauteur généreuse, y compris sur mobile.
 */
export function BodygraphResultEmbed() {
  const height = useBodygraphHeight(FALLBACK_HEIGHT);

  return (
    <iframe
      src={EXTERNAL.bodygraph}
      title="Ton schéma Human Design"
      style={{ height: `${height}px`, backgroundColor: "transparent" }}
      className="block w-full"
    />
  );
}
