import Image from "next/image";

/**
 * Section "The Soul Letter" — bandeau HQ pleine largeur (titre + sous-titre déjà
 * intégrés à l'image), suivi d'un bouton qui envoie vers la page d'inscription
 * dédiée de Marion sur systeme.io (elle gère la capture et les tags de son côté).
 *
 * Bannière HQ fournie par Marion (1600×533), version dorée. La version cyan
 * (soulletter-banner-cian-hq.png) est aussi disponible si on change la palette.
 */
const NEWSLETTER_URL = "https://marionchartier-humandesign.systeme.io/newsletter";

export function SoulLetterBanner() {
  return (
    <section className="bg-white px-6 pt-4 pb-14 md:px-20 md:pt-6 md:pb-20">
      {/* Titre + description au-dessus du bandeau */}
      <div className="mx-auto mb-8 max-w-[680px] text-center md:mb-10">
        <h2 className="font-display text-[28px] font-light italic leading-tight text-ink-deep md:text-[40px]">
          De temps en temps, je t’écris en toute intimité.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink md:text-[18px]">
          Des tips de Human Design, des réflexions autour de la vie pro et du Business, des prises de conscience, des actualités de La vie en HD, mais aussi les coulisses de mon quotidien.
          Sans bullshit, sans diffusion massive.
        </p>
      </div>

      <div className="mx-auto max-w-(--container-content) overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(80,60,98,0.22)]">
        <Image
          src="/assets/soulletter-banner-or-hq.png"
          alt="The Soul Letter, la newsletter intimiste & authentique"
          width={1600}
          height={533}
          sizes="100vw"
          className="h-auto w-full object-cover"
          priority={false}
        />
      </div>

      {/* Bouton vers la page d'inscription systeme.io (nouvel onglet) */}
      <div className="mt-6 text-center md:mt-8">
        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-[#c1ad8d] bg-[#c1ad8d] px-8 py-3 font-body text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#c1ad8d]"
        >
          Je rejoins The Soul Letter
        </a>
      </div>
    </section>
  );
}
