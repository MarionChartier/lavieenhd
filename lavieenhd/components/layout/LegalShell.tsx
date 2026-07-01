type LegalSection = {
  heading: string;
  /** Un ou plusieurs paragraphes. */
  body?: string | string[];
  /** Liste à puces optionnelle, affichée sous les paragraphes. */
  items?: string[];
};

type LegalShellProps = {
  title: string;
  intro?: string;
  /** Note de bas de page facultative (ex. date de mise à jour). */
  updatedAt?: string;
  sections: LegalSection[];
};

/**
 * Gabarit commun aux pages légales (mentions légales, CGV, confidentialité).
 * Les valeurs entre crochets [À COMPLÉTER] sont à renseigner avec les informations
 * juridiques réelles de Marion avant la mise en ligne définitive.
 */
export function LegalShell({ title, intro, updatedAt, sections }: LegalShellProps) {
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

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((s) => {
            const paragraphs =
              s.body === undefined ? [] : Array.isArray(s.body) ? s.body : [s.body];

            return (
              <div key={s.heading}>
                <h2 className="font-display text-[24px] font-light leading-snug text-ink-deep md:text-[28px]">
                  {s.heading}
                </h2>

                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 font-display text-[16px] font-light leading-relaxed text-ink md:text-[17px]"
                  >
                    {p}
                  </p>
                ))}

                {s.items && s.items.length > 0 && (
                  <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 font-display text-[16px] font-light leading-relaxed text-ink md:text-[17px]">
                    {s.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {updatedAt && (
          <p className="mt-12 font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            {updatedAt}
          </p>
        )}
      </div>
    </section>
  );
}
