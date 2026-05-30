type LegalSection = {
  heading: string;
  body: string;
};

type LegalShellProps = {
  title: string;
  intro?: string;
  sections: LegalSection[];
};

/**
 * Gabarit commun aux pages légales (mentions légales, CGV, confidentialité).
 * Contenu volontairement en placeholder : à compléter avec les informations
 * juridiques réelles de Marion avant mise en ligne.
 */
export function LegalShell({ title, intro, sections }: LegalShellProps) {
  return (
    <section className="bg-white px-6 pt-16 pb-24 md:px-20 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-[760px]">
        <h1 className="font-display text-[40px] font-light leading-[1] text-ink-deep md:text-[64px]">
          {title}
        </h1>

        {intro && (
          <p className="mt-6 font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
            {intro}
          </p>
        )}

        <p className="mt-4 font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          Contenu à compléter
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-[24px] font-light leading-snug text-ink-deep md:text-[28px]">
                {s.heading}
              </h2>
              <p className="mt-3 font-display text-[16px] font-light leading-relaxed text-ink md:text-[17px]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
