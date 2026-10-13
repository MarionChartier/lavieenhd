/**
 * Approche de Marion — reprend, retravaillé, le récit qui ouvrait l'ancien hero
 * (maquette V36).
 */
export function Approche() {
  const b = "font-semibold";

  return (
    <section className="bg-lavender-gradient px-6 py-20 md:px-20 md:py-28">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-center font-display text-[36px] font-light leading-tight text-balance text-ink-deep md:text-[52px]">
          Sortir des cases pour avancer à TA façon
        </h2>

        <div className="mt-10 flex flex-col gap-5 font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[18px]">
          <p>
            Nous <strong className={b}>grandissons toutes et tous avec des conditionnements</strong>,
            plus ou moins ancrés, et nombre d&rsquo;entre nous finissent par se retrouver{" "}
            <strong className={b}>bien éloignés de qui ils sont vraiment.</strong>
          </p>
          <p>
            Moi la première, je suis passée par là, et cela a eu un impact direct sur ma vie
            professionnelle : j&rsquo;étais perdue.{" "}
            <strong className={b}>
              Je voyais très bien ce que je ne voulais plus, mais absolument pas où aller.
            </strong>
            <br />
            <em>Comment savoir pour quoi j&rsquo;étais faite, sans comprendre qui j&rsquo;étais vraiment?</em>
          </p>
          <p>
            C&rsquo;est clairement le <strong className={b}>Human Design</strong>{" "}qui m&rsquo;a
            permis de{" "}
            <strong className={b}>
              sortir du brouillard, de trouver ma voie et ma propre façon de construire mon
              Business.
            </strong>
          </p>
          <p>
            Basé sur tes informations de naissance, le Human Design te donne accès à une sorte de
            &quot;mode d&rsquo;emploi&quot; personnel, pour mieux comprendre ton propre
            fonctionnement et revenir à ce qui te ressemble vraiment.
            <br />
            <em>
              Une façon d&rsquo;arrêter peu à peu de forcer, de douter, de t&rsquo;adapter ou de
              vouloir cocher les &quot;bonnes&quot; cases.
            </em>
          </p>
          <p>
            Aujourd&rsquo;hui, je peux enfin dire que je me sens <strong className={b}>à ma place</strong>{" "}
            et que ma <strong className={b}>mission de cœur</strong>{" "}est, à mon tour, de t&rsquo;aider
            à trouver{" "}
            <strong className={b}>
              TA voie, TA façon de travailler et TA propre recette pour réussir, sans te trahir. 💜
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
