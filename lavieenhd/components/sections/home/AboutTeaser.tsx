import Image from "next/image";
import Link from "next/link";

const PHOTO_MARION_LIVING = "/assets/marion-multipassionnee.png";

const PILLS = [
  "Manifesting Generator 2/4",
  "Coach HD • Vie pro & Business",
  "Maman d'un petit Manifestor",
] as const;

export function AboutTeaser() {
  const titre = (
    <h2 className="font-display text-[44px] font-light leading-[1] text-ink-deep md:text-[72px]">
      Marion,
      <br />
      <em className="italic">derrière La vie en&nbsp;HD</em>
    </h2>
  );

  return (
    <section className="px-6 pt-14 pb-20 md:px-20 md:py-32">
      <div className="mx-auto grid max-w-(--container-content) gap-10 md:gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
        {/* Empilé (mobile, tablette), le titre annonce la photo ; en deux
            colonnes il retrouve sa place en tête de la colonne de texte. */}
        <div className="lg:hidden">{titre}</div>

        {/* Photo + HDCard */}
        <div className="relative">
          {/* Décalé vers la gauche à partir de md : la carte d'identité, elle,
              reste en place et dégage d'autant le visage. La section et la
              grille ne bougent pas, seul le cadre photo glisse dans la marge. */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-ink/10 shadow-[0_24px_55px_-28px_rgba(80,60,98,0.28)] md:h-[500px] md:-translate-x-6">
            <Image
              src={PHOTO_MARION_LIVING}
              alt="Marion Chartier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_22%]"
            />
          </div>
          {/* HD Card — sous la photo en mobile (pas de superposition), flottante dès md */}
          <div className="mt-6 flex justify-center md:absolute md:-bottom-16 md:-right-12 md:z-10 md:mt-0">
            <HDCardMarion />
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="hidden lg:block">{titre}</div>

          {/* Le titre est passé au-dessus de la photo tant qu'on est empilé :
              la marge haute ne sert plus qu'en deux colonnes. */}
          <p className="lg:mt-7 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink">
            Ingénieure de formation, coach HD spécialisée Vie pro & Business et passionnée par
            tout ce qui touche à l’humain et à ce qui fait sa singularité, j’utilise aujourd’hui
            principalement le Human Design pour t’aider à mettre de la clarté sur ce que tu vis,
            mieux comprendre ton fonctionnement et avancer d’une façon qui te ressemble vraiment.
          </p>

          <p className="mt-4 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink">
            La Numérologie et d’autres outils de connaissance de soi viennent parfois compléter
            cette approche, avec une idée simple : t’aider à faire des choix plus justes pour
            toi, dans ta vie professionnelle comme dans ton Business.
          </p>

          <p className="mt-4 max-w-[520px] font-display text-[16px] italic leading-relaxed text-ink">
            « Je ne crois pas aux recettes toutes faites. Je crois qu’on a chacun notre propre
            façon de fonctionner, de travailler...et de réussir. Et je t’aide à trouver TA propre
            recette magique! »
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {PILLS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-ink-lilac bg-white px-5 pt-3 pb-2 font-sub text-[13px] leading-none tracking-wide text-ink-deep"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                {label}
              </span>
            ))}
          </div>

          <Link
            href="/qui-je-suis"
            className="mt-10 inline-flex items-center rounded-full border border-ink-deep px-8 pt-[18px] pb-[14px] font-body text-[12px] leading-none uppercase tracking-[0.18em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-paper"
          >
            Faire connaissance
          </Link>
        </div>
      </div>
    </section>
  );
}

function HDCardMarion() {
  return (
    <div className="w-[260px] rounded-md border border-ink/14 bg-white p-6 shadow-[0_16px_40px_-20px_rgba(80,60,98,0.16)] md:w-[280px]">
      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        Carte d’identité HD
      </p>
      <p className="mt-1.5 pb-2 font-display text-[24px] leading-[1.05] text-ink-deep md:text-[26px]">
        Manifesting Generator 2/4
      </p>
      <p className="font-sub text-[12px] tracking-wide text-turquoise">
        Magicienne fraternelle
      </p>

      <hr className="my-3.5 border-line" />

      <dl className="flex flex-col gap-1 text-[12px]">
        <Row label="Autorité" value="Émotionnelle" />
        <Row label="Signature" value="Satisfaction" />
        <Row label="Stratégie" value="Répondre" />
        <Row label="Non-Soi" value="Frustration" />
        <Row label="Définition" value="Double" />
        <Row label="Environnement" value="Montagnes" />
      </dl>

      <hr className="my-3.5 border-line" />

      <div className="flex justify-center gap-1">
        {Array.from({ length: 9 }).map((_, i) => {
          // Ordre HD : Tête, Ajna, Gorge, G, Cœur, Plexus, Sacral, Rate, Racine
          // Marion : Tête (0) et Ajna (1) ouverts → les 7 autres définis
          const defined = i >= 2;
          return (
            <span
              key={i}
              className={`h-3 w-3 rounded-sm ${defined ? "bg-turquoise" : "bg-line"}`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-center font-body text-[10px] uppercase tracking-[0.16em] text-ink-soft">
        7 centres sur 9 définis
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-ink">
      <dt>{label}</dt>
      <dd className="font-semibold text-ink-deep">{value}</dd>
    </div>
  );
}
