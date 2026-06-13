import Image from "next/image";
import { EXTERNAL } from "@/lib/links";

/**
 * Section "The Soul Letter" — bandeau HQ pleine largeur (titre + sous-titre déjà
 * intégrés à l'image), avec le formulaire d'inscription (prénom + email) posé
 * directement sur le bandeau. Le form envoie vers l'écosystème systeme.io.
 *
 * Bannière HQ fournie par Marion (1600×533), version dorée. La version cyan
 * (soulletter-banner-cian-hq.png) est aussi disponible si on change la palette.
 */
export function SoulLetterBanner() {
  return (
    <section className="bg-white px-6 pt-4 pb-14 md:px-20 md:pt-6 md:pb-20">
      {/* Titre + description au-dessus du bandeau */}
      <div className="mx-auto mb-8 max-w-[680px] text-center md:mb-10">
        <h2 className="font-display text-[28px] font-light italic leading-tight text-ink-deep md:text-[40px]">
          De temps en temps, je t'écris comme à une amie.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink md:text-[18px]">
          Des réflexions tendres, des outils Human Design et des coulisses de mon quotidien.
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

      {/* Formulaire CTA, juste sous le bandeau */}
      <form
        action={EXTERNAL.newsletter}
        method="GET"
        target="_blank"
        className="mx-auto mt-6 flex w-full max-w-[760px] flex-col gap-2 sm:flex-row sm:items-center md:mt-8"
      >
          <input
            name="firstname"
            placeholder="Ton prénom"
            required
            className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2.5 font-sans text-[14px] text-ink-deep outline-none transition-colors placeholder:font-sans placeholder:text-ink-deep/45 focus:border-turquoise"
          />
          <input
            name="email"
            type="email"
            placeholder="Ton email"
            required
            className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2.5 font-sans text-[14px] text-ink-deep outline-none transition-colors placeholder:font-sans placeholder:text-ink-deep/45 focus:border-turquoise"
          />
          <button
            type="submit"
            className="shrink-0 whitespace-nowrap rounded-full border border-[#c1ad8d] bg-[#c1ad8d] px-6 py-2.5 font-body text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#c1ad8d]"
          >
            Je rejoins la Soul Letter
          </button>
        </form>
    </section>
  );
}
