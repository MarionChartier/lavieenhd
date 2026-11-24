"use client";

import { useEffect } from "react";
import { redirectResultsToTestHd } from "@/lib/bodygraph";

/**
 * Emmène sur « Test HD gratuit » dès qu'un schéma est calculé depuis l'accueil
 * (demande de Marion) : c'est là que se trouvent les blocs qui aident à le lire.
 *
 * Fait ici et non avec l'option « Open Chart Result in Different Page » de
 * Bodygraph : elle se règle par schéma, et le même sert sur Inside, BODY Bloom
 * et The Place to be, où le résultat doit rester sur la page de vente.
 */
export function RedirectionTestHD() {
  useEffect(() => redirectResultsToTestHd(window), []);

  return null;
}
