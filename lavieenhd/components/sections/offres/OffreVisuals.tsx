import Image from "next/image";
import type { Offre } from "@/lib/content/offres";

/**
 * Fondu des bords d'une photo de mockup : deux dégradés croisés, pour que la
 * photo se dissolve dans le fond de section au lieu de s'y arrêter net.
 */
const FONDU =
  "[mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent),linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent),linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)] [-webkit-mask-composite:source-in]";

/**
 * Mockup de l'offre dans la vue d'ensemble de /mes-offres, tiré de sa page de
 * vente (demande de Marion : le logo passe en petit au bout du titre).
 */
export function OffreVisuel({ offre }: { offre: Offre }) {
  const { visuel } = offre;
  if (!visuel) return null;

  return (
    <Image
      src={visuel.src}
      alt={visuel.alt}
      width={visuel.width}
      height={visuel.height}
      sizes="(min-width: 1024px) 520px, 90vw"
      className={`h-auto w-full max-w-[520px] ${
        visuel.detoure ? "max-h-[460px] object-contain" : `rounded-[28px] ${FONDU}`
      }`}
    />
  );
}
