import Image from "next/image";
import type { Offre } from "@/lib/content/offres";

/**
 * Fondu des bords d'une photo de mockup : deux dégradés croisés, pour que la
 * photo se dissolve dans le fond de section au lieu de s'y arrêter net.
 */
const FONDU =
  "[mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent),linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent),linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)] [-webkit-mask-composite:source-in]";

/**
 * Fondu du visuel du Soin (demande de Marion, trop présent sur le fond
 * paillettes) : centre intact, bords longuement dissous en ellipse.
 */
const FONDU_SOIN =
  "[mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_68%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_68%)]";

/**
 * Mockup de l'offre dans la vue d'ensemble de /mes-offres, tiré de sa page de
 * vente (demande de Marion : le logo passe en petit au bout du titre).
 */
export function OffreVisuel({ offre }: { offre: Offre }) {
  const { visuel } = offre;
  if (!visuel) return null;

  const image = (
    <Image
      src={visuel.src}
      alt={visuel.alt}
      width={visuel.width}
      height={visuel.height}
      sizes="(min-width: 1024px) 520px, 90vw"
      className={`h-auto w-full max-w-[520px] ${
        visuel.detoure ? "max-h-[460px] object-contain" : `rounded-[28px] ${FONDU}`
      } ${offre.slug === "soin-energetique" ? FONDU_SOIN : ""}`}
    />
  );

  const { incrustation, complement } = visuel;
  const principal = incrustation ? (
    <div className="relative w-full max-w-[520px]">
      {image}
      <Image
        src={incrustation.src}
        alt={incrustation.alt}
        width={incrustation.width}
        height={incrustation.height}
        sizes="(min-width: 1024px) 190px, 34vw"
        className="absolute right-[5%] bottom-[5%] h-auto w-[36%] rounded-2xl border-4 border-white shadow-[0_18px_40px_-16px_rgba(80,60,98,0.45)]"
      />
    </div>
  ) : (
    image
  );
  if (!complement) return principal;

  return (
    // Mobile : images bord à bord, sans se chevaucher ; l'écart de l'ordinateur
    // laissait un grand vide en plus de leurs bords fondus.
    <div className="flex w-full max-w-[520px] flex-col items-center gap-6 max-lg:gap-0">
      {principal}
      <Image
        src={complement.src}
        alt={complement.alt}
        width={complement.width}
        height={complement.height}
        sizes="(min-width: 1024px) 520px, 90vw"
        className={`h-auto w-full rounded-[28px] ${FONDU}`}
      />
    </div>
  );
}
