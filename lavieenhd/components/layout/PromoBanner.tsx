/** Code promo, affiché sous le menu sur les pages du groupe (site), hors quiz.
 *  Hors du bandeau sticky : il défile avec la page et ne reste pas à l'écran.
 *  À retirer de app/(site)/layout.tsx à la fin de l'offre. */
const PROMO_CODE = "TADAAA";
const PROMO_END = "19/11/2026";

export function PromoBanner() {
  return (
    <p className="px-6 pt-3 text-center font-body text-[11px] leading-relaxed tracking-[0.06em] text-ink md:pt-4 md:text-[12px]">
      <span aria-hidden className="text-turquoise">✦</span> -15% avec le code{" "}
      <span className="font-bold tracking-[0.18em] text-ink-deep">{PROMO_CODE}</span>{" "}
      <span className="whitespace-nowrap">(hors RECONNECT)</span> jusqu&apos;au{" "}
      <span className="whitespace-nowrap">
        {PROMO_END} minuit. <span aria-hidden className="text-turquoise">✦</span>
      </span>
    </p>
  );
}
