import Image from "next/image";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-16 md:px-20 md:pt-12 md:pb-24">
      {/* Halos flous — profondeur ambiante */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-[15%] h-[420px] w-[420px] rounded-full bg-turquoise/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-ink-lilac/[0.12] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-24 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-beige-soft/[0.18] blur-3xl"
      />

      {/* Chemins fluides — traversent toute la largeur de la section */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="#9784aa" strokeLinecap="round">
          {/* Courbe 1 — BAS → DROITE : grand arc qui culmine haut en plein milieu */}
          <path
            d="M 350 980 Q 1100 280 1620 480"
            strokeWidth="1.3"
            opacity="0.15"
            vectorEffect="non-scaling-stroke"
          />
          {/* Courbe 3 — GAUCHE → DROITE : reste tout en haut, ondule légèrement */}
          <path
            d="M -120 50 C 400 0 900 130 1620 40"
            strokeWidth="1.4"
            opacity="0.16"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>

      {/* Silhouette en arrière-plan — ancrée à 40% de la largeur de la page, au bas de la section */}
      <Image
        src="/assets/marion_home.png"
        alt=""
        width={600}
        height={300}
        priority
        aria-hidden
        className="pointer-events-none absolute bottom-[12%] left-[10%] hidden h-auto w-[700px] opacity-[0.22] mix-blend-multiply lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />

      <div className="relative mx-auto grid max-w-(--container-content) gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
        {/* LEFT — copy */}
        <div className="pt-6 lg:pt-16">
          <h1 className="font-script text-[26px] font-normal leading-none whitespace-nowrap text-ink-deep md:text-[44px]">
            La vie en <span className="not-italic text-turquoise">HD</span>
          </h1>

          <p className="mt-8 max-w-[520px] font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
            Ton Human Design, ta boussole.
          </p>

          <p className="mt-3 max-w-[520px] font-display text-[16px] font-light leading-snug text-ink md:text-[18px]">
            Le chemin idéal pour te retrouver, te révéler pleinement, et (enfin) trouver ta
            voie professionnelle.
          </p>

          <p className="mt-7 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink-deep">
            Au fil de notre vie, nous nous construisons à travers des figures qui nous
            élèvent, nous éduquent, nous influencent (parents, éducateurs, professeurs,
            société,...), et par le biais de ce que nous traversons. C&rsquo;est ainsi que nous
            grandissons toutes et tous avec des conditionnements, plus ou moins ancrés, et que
            nombre d&rsquo;entre nous se retrouvent, à l&rsquo;âge adulte, bien éloignés de qui ils sont
            vraiment, déconnectés de leur vraie nature.
          </p>

          <p className="mt-5 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink-deep">
            Moi la première, je suis passée par là, et cela a eu un impact direct sur ma vie
            professionnelle dans laquelle j&rsquo;étais perdue.
            <br />
            <em>Comment savoir pour quoi j&rsquo;étais faite, sans comprendre qui j&rsquo;étais vraiment&nbsp;?</em>
          </p>

          <p className="mt-5 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink-deep">
            Et c&rsquo;est clairement le <strong className="font-semibold">Human Design</strong>{" "}
            qui m&rsquo;a permis de sortir du brouillard, révéler ma zone de génie, et trouver ma
            voie.
            <br />
            Cet outil puissant, basé sur tes informations de naissance, permet d&rsquo;obtenir ta
            carte d&rsquo;identité énergétique unique et comprendre ton fonctionnement originel,
            au-delà de tout ce qu&rsquo;on t&rsquo;a appris à être.
            <br />
            Pas un horoscope ou une case dans laquelle t&rsquo;enfermer. Plutôt un miroir qui te
            permet de te (re)découvrir toi-même, et d&rsquo;enfin arrêter de te comparer, de forcer,
            de douter, ou de vouloir cocher les «&nbsp;bonnes&nbsp;» cases.
          </p>

          <p className="mt-5 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink-deep">
            Aujourd&rsquo;hui je peux enfin dire que je me sens à ma place, et c&rsquo;est une vraie
            mission de cœur pour moi de t&rsquo;accompagner à trouver toi-aussi ce chemin vers ton
            épanouissement pro. ღ
          </p>

          <p className="mt-6 font-script text-[24px] leading-none text-ink-deep md:text-[28px]">
            La vie en HD, à ta portée
          </p>
        </div>

        {/* RIGHT — simulator */}
        <div className="relative">
          <HDSimulatorForm />
        </div>
      </div>
    </section>
  );
}
