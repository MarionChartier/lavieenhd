import type { PorteTon } from "@/lib/content/portes";
import {
  INSIDE_COMPLEMENT,
  type PorteQuiz,
  type PorteSection,
} from "@/lib/content/mes-offres";

/** Couleurs par porte, alignées sur les tons des portes de l'accueil (TroisPortes). */
const TONS: Record<
  PorteTon,
  { card: string; num: string; quiz: string; button: string }
> = {
  violet: {
    card: "border-[#ded1ec] bg-[linear-gradient(155deg,#f8f3fb,#fff)]",
    num: "text-[#8d71a8]",
    quiz: "border-[#e6dced] bg-[radial-gradient(circle_at_90%_2%,rgba(186,158,208,0.22),transparent_46%),linear-gradient(160deg,#f2ecf9_0%,#fff_72%)]",
    button: "bg-[#bda1d5] text-white hover:bg-ink-deep",
  },
  turquoise: {
    card: "border-[#c9e5e7] bg-[linear-gradient(155deg,#eff9f9,#fff)]",
    num: "text-[#68afb4]",
    quiz: "border-[#c3e7e8] bg-[radial-gradient(circle_at_93%_2%,rgba(117,206,210,0.33),transparent_45%),linear-gradient(165deg,#eaf8f7_0%,#fff_69%)]",
    button: "bg-turquoise text-ink-deep hover:bg-ink-deep hover:text-white",
  },
  beige: {
    card: "border-[#e7ddca] bg-[linear-gradient(155deg,#f9f5ed,#fff)]",
    num: "text-[#b78c4a]",
    quiz: "border-[#c3e7e8] bg-[radial-gradient(circle_at_93%_2%,rgba(117,206,210,0.33),transparent_45%),linear-gradient(165deg,#eaf8f7_0%,#fff_69%)]",
    button: "bg-turquoise text-ink-deep hover:bg-ink-deep hover:text-white",
  },
};

/** Les 3 cartes du hero : mêmes intitulés que les portes de l'accueil, ancrées sur chaque section. */
export function PortesCards({ sections }: { sections: PorteSection[] }) {
  return (
    <nav
      aria-label="Les 3 portes"
      className="mx-auto mt-14 grid max-w-[1130px] grid-cols-1 gap-5 text-left md:mt-20 lg:grid-cols-3"
    >
      {sections.map(({ id, porte }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`flex flex-col gap-4 rounded-[22px] border px-6 pt-7 pb-6 shadow-[0_12px_25px_rgba(71,47,83,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_17px_27px_rgba(71,47,83,0.11)] ${TONS[porte.ton].card}`}
        >
          <span className={`font-display text-[44px] font-light leading-none ${TONS[porte.ton].num}`}>
            {porte.num}
          </span>
          <span className="font-body text-[15px] font-semibold uppercase leading-snug tracking-[0.06em] text-ink-deep md:text-[17px]">
            {porte.title}
          </span>
          <span className="flex-1 font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[18px]">
            {porte.description}
          </span>
          <span className="flex flex-wrap gap-2">
            {porte.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-ink/15 bg-white/70 px-3 pt-[3px] pb-[2px] font-body text-[11px] text-ink"
              >
                {chip}
              </span>
            ))}
          </span>
          <span className="mt-1 font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
            Découvrir les offres <span aria-hidden>↓</span>
          </span>
        </a>
      ))}
    </nav>
  );
}

/** Titre d'une porte, en tête de son groupe d'offres. */
export function PorteHeading({ section }: { section: PorteSection }) {
  return (
    <header className="border-t border-line bg-white px-6 pt-16 pb-10 text-center md:pt-24 md:pb-14">
      <h2 className="mx-auto max-w-[900px] font-display text-[36px] font-light uppercase leading-tight text-ink-deep md:text-[60px]">
        {section.heading}
      </h2>
    </header>
  );
}

/** Carte du quiz gratuit qui ouvre chaque porte. */
export function QuizPresentation({ quiz, ton }: { quiz: PorteQuiz; ton: PorteTon }) {
  return (
    <div className="flex justify-center bg-white px-6 pb-16 md:pb-24">
      <div
        className={`w-full max-w-[635px] rounded-[34px] border px-6 py-11 text-center shadow-[0_12px_26px_rgba(71,47,83,0.07)] md:px-12 md:py-14 ${TONS[ton].quiz}`}
      >
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.17em] text-ink-deep">
          Quiz gratuit
        </p>
        <p className="mt-2 font-body text-[12px] uppercase tracking-[0.22em] text-ink-soft md:text-[13px]">
          {quiz.meta}
        </p>
        <h3 className="mx-auto mt-10 max-w-[520px] font-display text-[44px] italic font-light leading-[1.05] text-ink-deep md:text-[64px]">
          {quiz.title}
        </h3>
        <p className="mx-auto mt-8 max-w-[520px] font-display text-[21px] italic leading-snug text-ink md:text-[25px]">
          {quiz.question}
        </p>
        {quiz.description && (
          <p className="mx-auto mt-5 max-w-[500px] font-body text-[15px] leading-relaxed text-ink md:text-[17px]">
            {quiz.description}
          </p>
        )}
        {/* Page HTML statique : pas de prefetch, simple lien. */}
        <a
          href={quiz.href}
          className={`mt-10 inline-flex min-h-[56px] items-center justify-center rounded-full px-6 font-body text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors md:px-8 md:text-[13px] md:tracking-[0.2em] ${TONS[ton].button}`}
        >
          {quiz.cta} <span aria-hidden className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
}

/** Bandeau de liaison, avec une phrase propre à la porte, au-dessus d'un complément. */
export function ComplementLabel({ children }: { children: string }) {
  return (
    <p className="mx-auto max-w-[840px] text-center font-body text-[13px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink md:text-[14px]">
      {children}
    </p>
  );
}

/** Petite carte INSIDE des portes 1 et 2 : renvoie à la carte complète de la porte 3 (#inside). */
export function InsideComplement({ label }: { label: string }) {
  return (
    <div className="bg-[linear-gradient(135deg,#f8f6fa,#edf9f9)] px-6 py-12 md:py-16">
      <ComplementLabel>{label}</ComplementLabel>
      <div className="mx-auto mt-6 max-w-[840px] rounded-[20px] border border-[#d6d0df] bg-white px-6 py-7 shadow-[0_8px_24px_rgba(79,53,85,0.07)] md:px-9 md:py-8">
        <h3 className="font-display text-[26px] font-light leading-tight text-ink-deep md:text-[36px]">
          {INSIDE_COMPLEMENT.title}
        </h3>
        <p className="mt-4 font-display text-[18px] leading-relaxed text-ink-deep md:text-[19px]">
          {INSIDE_COMPLEMENT.text}
        </p>
        <p className="mt-2 font-display text-[18px] italic leading-relaxed text-ink md:text-[19px]">
          {INSIDE_COMPLEMENT.coaching}
        </p>
        <a
          href="#inside"
          className="mt-6 inline-flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-deep underline decoration-ink-deep/40 underline-offset-[5px] transition-colors hover:decoration-ink-deep md:text-[14px]"
        >
          {INSIDE_COMPLEMENT.cta} <span aria-hidden>↓</span>
        </a>
      </div>
    </div>
  );
}

/** Transition entre la porte 3 et le Soin énergétique, hors des portes. */
export function SoinTransition({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-t border-[#f0e9e0] bg-[linear-gradient(180deg,#fffdfb_0%,#f2ebdf_100%)] px-6 py-16 text-center">
      <p className="mx-auto max-w-[920px] font-display text-[26px] italic font-light leading-snug text-ink-deep md:text-[38px]">
        {title}
      </p>
      <p className="mx-auto mt-4 max-w-[830px] font-display text-[19px] leading-relaxed text-ink md:text-[24px]">
        {subtitle}
      </p>
    </div>
  );
}
