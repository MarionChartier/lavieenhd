import type { Metadata } from "next";
import Link from "next/link";
import { QUIZZES, type QuizAccent } from "@/lib/content/quizzes";

export const metadata: Metadata = {
  title: "Quiz gratuits · La vie en HD",
  description:
    "Deux quiz gratuits et ludiques pour mieux te connaître : ton lieu de vie/de travail idéal et ton alignement dans ta vie pro.",
};

const ACCENT: Record<
  QuizAccent,
  { chip: string; chipText: string; cardHover: string; cta: string }
> = {
  turquoise: {
    chip: "bg-turquoise-soft",
    chipText: "text-ink-deep",
    cardHover: "hover:border-turquoise",
    cta: "group-hover:bg-turquoise group-hover:text-ink-deep",
  },
  violet: {
    chip: "bg-line",
    chipText: "text-ink-deep",
    cardHover: "hover:border-ink-lilac",
    cta: "group-hover:bg-ink-lilac group-hover:text-white",
  },
};

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
        <p className="mx-auto mt-8 max-w-[620px] font-display text-[18px] font-light italic leading-snug text-ink md:text-[22px]">
          Deux petits voyages ludiques pour mieux te connaître. Choisis celui qui
          t'appelle aujourd'hui : tout se révèle en quelques minutes.
        </p>
      </section>

      {/* CARTES QUIZ */}
      <section className="bg-white px-6 pb-24 md:px-20 md:pb-32">
        <div className="mx-auto grid max-w-[980px] gap-6 md:grid-cols-2 md:gap-8">
          {QUIZZES.map((quiz) => {
            const a = ACCENT[quiz.accent];
            return (
              <a
                key={quiz.slug}
                href={quiz.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col rounded-2xl border border-ink/12 bg-paper p-10 shadow-[0_16px_40px_-24px_rgba(80,60,98,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_56px_-26px_rgba(80,60,98,0.26)] md:p-12 ${a.cardHover}`}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-4 pt-[7px] pb-[5px] font-body text-[10px] uppercase tracking-[0.18em] ${a.chip} ${a.chipText}`}
                >
                  {quiz.meta}
                </span>

                <h2 className="mt-10 pt-4 font-display text-[27px] font-light leading-[1.05] text-ink-deep md:text-[31px]">
                  {quiz.name.replace(/^Quiz\s*[-–]\s*/, "")}
                </h2>

                <p className="mt-6 font-sans text-[15px] font-normal leading-snug text-ink md:text-[16px]">
                  {quiz.subtitle}
                </p>

                <p className="mt-6 font-sans text-[15px] font-normal leading-relaxed text-ink">
                  {quiz.description}
                </p>

                {/* Espace flexible : garantit un minimum d'air + colle le CTA en bas */}
                <div className="min-h-10 flex-1" />

                <span
                  className={`inline-flex w-fit items-center justify-center gap-2 rounded-full border border-ink-deep bg-white px-7 pt-[15px] pb-[13px] font-body text-[12px] uppercase tracking-[0.2em] text-ink-deep transition-colors ${a.cta}`}
                >
                  Faire le quiz
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>

        {/* Pont vers les offres */}
        <p className="mx-auto mt-14 max-w-[560px] text-center font-body text-[14px] leading-relaxed text-ink-soft">
          Envie d'aller plus loin après ton quiz ?{" "}
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
