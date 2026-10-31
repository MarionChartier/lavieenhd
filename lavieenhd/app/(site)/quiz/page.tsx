import type { Metadata } from "next";
import Link from "next/link";
import { PORTE_SECTIONS } from "@/lib/content/mes-offres";
import type { QuizAccent } from "@/lib/content/quizzes";

export const metadata: Metadata = {
  title: "Quiz gratuits · La vie en HD",
  description:
    "Trois quiz gratuits et ludiques pour mieux te connaître : ton alignement dans ta vie pro, ta façon d'entreprendre et ton lieu de vie/de travail idéal.",
};

const ACCENT: Record<
  QuizAccent,
  { card: string; border: string; blob: string; meta: string; desc: string; cta: string }
> = {
  turquoise: {
    card: "bg-[linear-gradient(155deg,#e4f4f5_0%,#ffffff_62%)]",
    border: "border-turquoise/30 hover:border-turquoise",
    blob: "bg-turquoise/30",
    meta: "text-ink-deep/70",
    desc: "text-[#5e3aa6]", // même violet que la carte pro, pleine opacité
    cta: "bg-turquoise text-ink-deep hover:bg-[#5cb8bc]",
  },
  violet: {
    card: "bg-[linear-gradient(155deg,#efe8f8_0%,#ffffff_62%)]",
    border: "border-ink-lilac/30 hover:border-ink-lilac",
    blob: "bg-ink-lilac/30",
    meta: "text-ink-deep/70",
    desc: "text-[#5e3aa6]", // violet foncé lisible — uniquement sur la description
    cta: "bg-ink-lilac text-white hover:bg-[#8f76c0]",
  },
};

/**
 * Mêmes textes et même ordre que les 3 portes de /mes-offres ; le lien ouvre directement la question 1.
 * Couleur selon la position et non selon le quiz : l'alternance violet/turquoise/violet tient
 * quel que soit l'ordre des portes.
 */
const CARDS = PORTE_SECTIONS.map(({ quiz }, i) => ({
  ...quiz,
  accent: (i % 2 === 0 ? "violet" : "turquoise") as QuizAccent,
}));

export default function QuizPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 pt-10 pb-10 text-center md:px-20 md:pt-14 md:pb-14">
        <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
          100% offert
        </p>
        <h1 className="mt-5 font-display text-[45px] font-light leading-[0.95] text-ink-deep md:text-[78px]">
          Mes <em className="italic text-turquoise">quiz gratuits</em>
        </h1>
      </section>

      {/* CARTES QUIZ */}
      <section className="bg-white px-6 pb-24 md:px-20 md:pb-32">
        {/* Contenu centré verticalement dans chaque carte (demande de Marion) : chaque
            carte s'équilibre seule, sans s'aligner ligne à ligne sur sa voisine. */}
        <div className="mx-auto grid max-w-[980px] gap-6 md:grid-cols-2 md:gap-8">
          {CARDS.map((quiz) => {
            const a = ACCENT[quiz.accent];
            return (
              <a
                key={quiz.href}
                href={quiz.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center overflow-hidden md:odd:last:col-span-2 md:odd:last:w-[calc(50%-1rem)] md:odd:last:justify-self-center rounded-[28px] border text-center ${a.border} ${a.card} p-9 shadow-[0_18px_44px_-26px_rgba(80,60,98,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_64px_-28px_rgba(80,60,98,0.32)] md:p-11`}
              >
                {/* Couche de masque dédiée : clip-path arrondi qui rogne proprement
                    le blob flouté/animé (l'overflow-hidden du parent le laisse fuir
                    aux coins sur WebKit). Sans ombre, donc le clip ne rogne rien d'utile. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 [clip-path:inset(0_round_28px)]"
                >
                  <span
                    className={`absolute -right-12 -top-12 h-44 w-44 rounded-full ${a.blob} blur-2xl transition-transform duration-500 group-hover:scale-125`}
                  />
                </span>

                {/* Textes centrés dans la hauteur libre, bouton en bas : chaque carte
                    reste équilibrée et les boutons d'une même rangée s'alignent. */}
                <div className="relative flex flex-1 flex-col items-center justify-center">
                  {/* Méta en haut à gauche, sans pastille */}
                  <span
                    className={`relative font-body text-[11px] uppercase tracking-[0.2em] ${a.meta}`}
                  >
                    {quiz.meta}
                  </span>

                  <h2 className="relative mt-5 pt-4 font-script text-[26px] leading-[2.05] text-ink-deep md:pt-6 md:text-[31px] md:leading-[1.95]">
                    {quiz.title}
                  </h2>

                  <p className={`relative mt-5 text-center font-display text-[17px] italic leading-snug md:text-[19px] ${a.desc}`}>
                    {quiz.question}
                  </p>

                  {quiz.description && (
                    <p className="relative mt-3 max-w-[340px] text-center font-body text-[13px] leading-relaxed text-ink-soft md:text-[14px]">
                      {quiz.description}
                    </p>
                  )}
                </div>

                <span
                  className={`relative mt-7 inline-flex w-fit items-center justify-center rounded-full px-7 pt-[15px] pb-[13px] font-body text-[12px] uppercase tracking-[0.2em] transition-colors ${a.cta}`}
                >
                  {quiz.cta} <span aria-hidden className="ml-2">→</span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Pont vers les offres */}
        <p className="mx-auto mt-14 max-w-[560px] text-center font-body text-[14px] leading-relaxed text-ink-soft">
          Envie d’aller plus loin après ton quiz ?{" "}
          <Link
            href="/mes-offres"
            className="text-turquoise underline-offset-2 hover:underline"
          >
            Découvre mes offres
          </Link>
          .
        </p>
      </section>
    </>
  );
}
