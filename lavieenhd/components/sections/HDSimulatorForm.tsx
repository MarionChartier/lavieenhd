"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EXTERNAL } from "@/lib/links";

/** Hauteur de secours tant que le widget n'a pas communiqué sa taille. */
const FALLBACK_HEIGHT = 650;

/**
 * Tente d'extraire une hauteur (px) d'un message postMessage, quel que soit
 * le format émis par Bodygraphchart (nombre brut, objet { height }, chaîne
 * type iframe-resizer "[iFrameSizer]...height:1234...", etc.).
 */
function extractHeight(data: unknown): number | null {
  if (typeof data === "number") return data > 150 ? data : null;
  if (typeof data === "string") {
    const m = data.match(/height["':\s]+(\d{2,5})/i);
    if (m) return Number(m[1]);
    const n = Number(data);
    return !Number.isNaN(n) && n > 150 ? n : null;
  }
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    for (const key of ["height", "iframeHeight", "scrollHeight", "docHeight"]) {
      const v = obj[key];
      if (typeof v === "number" && v > 150) return v;
      if (typeof v === "string" && !Number.isNaN(Number(v)) && Number(v) > 150) {
        return Number(v);
      }
    }
    if (obj.data && typeof obj.data === "object") return extractHeight(obj.data);
  }
  return null;
}

/**
 * Hauteur auto-ajustée de l'iframe Bodygraphchart : écoute les postMessage du
 * widget et renvoie sa hauteur si elle est émise, sinon la hauteur de secours.
 * Partagé entre la carte calculateur et la page résultat /mon-design.
 */
export function useBodygraphHeight(fallback: number): number {
  const [height, setHeight] = useState<number>(fallback);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.origin.includes("bodygraphchart")) return;
      const h = extractHeight(e.data);
      if (h) setHeight(Math.ceil(h));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return height;
}

/**
 * Calculateur Human Design — partagé entre la home (HomeHero) et la page
 * Test HD gratuit. On embarque le widget officiel Bodygraphchart (le back-end
 * de Marion), dans une carte habillée aux couleurs du site.
 *
 * L'iframe s'auto-redimensionne à la hauteur de son contenu SI Bodygraphchart
 * émet sa taille via postMessage ; sinon on garde FALLBACK_HEIGHT.
 */
export function HDSimulatorForm() {
  const height = useBodygraphHeight(FALLBACK_HEIGHT);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative rounded-md border border-ink/15 bg-white p-5 shadow-[0_30px_70px_-30px_rgba(80,60,98,0.18)] md:p-7">
      {/* Logo Marion — premier plan, en haut à droite de la carte */}
      <div className="absolute -top-6 -right-6 z-10 h-[96px] w-[96px] overflow-hidden rounded-full border border-line bg-white shadow-[0_18px_40px_-15px_rgba(80,60,98,0.3)] md:-top-8 md:-right-8 md:h-[110px] md:w-[110px]">
        <Image
          src="/assets/logo-main.png"
          alt=""
          width={128}
          height={128}
          className="h-full w-full object-contain"
        />
      </div>

      {/* pr-* garantit que le titre ne passera jamais sous le logo */}
      <h2 className="pr-24 font-display text-[26px] leading-tight text-ink-deep md:pr-28 md:text-[32px]">
        Il est temps de révéler ton <em className="italic text-turquoise">mode d’emploi personnel</em>.
      </h2>

      {/* Fond blanc derrière l'iframe transparent */}
      <div className="relative mt-2 overflow-hidden rounded border border-line bg-white">
        <iframe
          ref={iframeRef}
          src={EXTERNAL.bodygraph}
          title="Calculateur Human Design"
          loading="lazy"
          style={{ height: `${height}px`, backgroundColor: "transparent" }}
          className="relative block w-full"
        />
      </div>
    </div>
  );
}
