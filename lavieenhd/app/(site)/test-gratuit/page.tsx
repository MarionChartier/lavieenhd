import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EXTERNAL } from "@/lib/links";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";

export const metadata: Metadata = {
  title: "Test gratuit · La vie en HD",
  description:
    "Deux portes d'entrée gratuites vers ton Human Design : le quiz des 6 environnements et le simulateur de schéma personnalisé.",
};

export default function TestGratuitPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 pt-20 pb-12 text-center md:px-20 md:pt-28 md:pb-16">
        <h1 className="font-display text-[45px] font-light leading-[0.95] text-ink-deep md:text-[90px]">
          Deux portes d'entrée vers ton{" "}
          <em className="italic text-turquoise">Human Design</em>.
        </h1>

        <p className="mx-auto mt-8 max-w-[680px] font-display text-[18px] font-light italic leading-snug text-ink md:text-[22px]">
          Deux outils 100% gratuits pour commencer. Le quiz pour t'éclairer en 5 minutes,
          le simulateur pour découvrir ton schéma complet.
        </p>
      </section>

      {/* SÉPARATEUR fin avant la section Quiz */}
      <div className="bg-white px-6 md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION 01 — QUIZ : 2 colonnes, titre + narration à gauche, 6 environnements à droite */}
      <section id="quiz" className="scroll-mt-24 bg-white px-6 pt-12 pb-20 md:px-20 md:pt-16 md:pb-28">
        <div className="mx-auto max-w-(--container-content)">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* COLONNE GAUCHE — titre, narration, ce que tu obtiens, CTA */}
            <div className="relative isolate">
              {/* Visuel en arrière-plan de la colonne, très discret */}
              <Image
                src="/assets/environnement-sun.jpeg"
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pointer-events-none -z-10 object-cover opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
              />

              <p className="relative flex items-baseline gap-3">
                <span className="font-display text-[26px] italic text-turquoise md:text-[30px]">
                  01
                </span>
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  Quiz Environnement HD
                </span>
              </p>

              <h2 className="mt-5 font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[64px]">
                Quel est ton <em className="italic text-turquoise">environnement</em>
                {" "}idéal&nbsp;?
              </h2>

              <p className="mt-6 font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
                «&nbsp;5 minutes pour t'éclairer.&nbsp;»
              </p>

              <p className="mt-5 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                Le Human Design définit pour chacun un «&nbsp;Environnement idéal&nbsp;» parmi
                6 profils&nbsp;: Marchés, Cuisines, Grottes, Côtes, Jardins, Sommets. C'est le
                terreau où ton énergie circule sans effort, où tu deviens toi-même.
              </p>

              {/* CE QUE TU OBTIENS */}
              <div className="mt-8">
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                  Ce que tu obtiens
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "12 questions guidées en moins de 5 minutes",
                    "Résultat instantané parmi 6 profils",
                    "Rapport email personnalisé",
                    "Aucune création de compte requise",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-[14px] leading-snug text-ink-deep md:text-[15px]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#7a9b6d]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA inline dans la colonne */}
              <div className="mt-9">
                <a
                  href={EXTERNAL.quiz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
                >
                  Faire le quiz
                </a>
              </div>
            </div>

            {/* COLONNE DROITE — les 6 environnements en paragraphes développés */}
            <div className="lg:pt-2">
              <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
                Les 6 environnements
              </p>
              <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {[
                  {
                    name: "Marchés",
                    blurb:
                      "Tu es nourri par le mouvement, les échanges, les ambiances vivantes. Les lieux où ça circule, où l'on croise du monde et où l'énergie passe de personne en personne, c'est ton terrain de jeu.",
                  },
                  {
                    name: "Cuisines",
                    blurb:
                      "Les espaces où l'on prépare, où l'on transforme, où l'activité concrète se déploie. Tu te sens à ta place près d'une action, d'un processus en cours, d'une matière qui se travaille.",
                  },
                  {
                    name: "Grottes",
                    blurb:
                      "Des espaces clos, protégés, où le monde extérieur s'éloigne. Tu te ressources dans le retrait, dans l'intimité d'un cocon où tu peux baisser la garde et redevenir entièrement toi.",
                  },
                  {
                    name: "Côtes",
                    blurb:
                      "L'entre-deux, la frontière mouvante entre deux mondes. Tu trouves ton équilibre là où ça bascule, entre l'eau et la terre, entre le repos et l'action, entre soi et les autres.",
                  },
                  {
                    name: "Jardins",
                    blurb:
                      "Les espaces ouverts mais structurés, en contact avec la nature et le vivant. Tu fleuris là où l'air circule, où la lumière entre, où le sol invite à prendre racine et à grandir.",
                  },
                  {
                    name: "Sommets",
                    blurb:
                      "La hauteur, le recul, la perspective qui éclaire. Tu vois mieux d'en haut, physiquement comme mentalement. Les espaces qui dégagent la vue te rendent ta clarté.",
                  },
                ].map((env) => (
                  <div key={env.name} className="flex flex-col gap-3">
                    <h3 className="font-display text-[22px] font-light leading-none text-ink-deep md:text-[26px]">
                      {env.name}
                    </h3>
                    <p className="font-display text-[15px] font-light leading-relaxed text-ink md:text-[16px]">
                      {env.blurb}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR FINEMENT MARQUÉ */}
      <div className="bg-white px-6 md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION 02 — SIMULATEUR HD */}
      <section id="simulateur" className="scroll-mt-24 bg-white px-6 pt-12 pb-20 md:px-20 md:pt-16 md:pb-28">
        <div className="mx-auto max-w-(--container-content)">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Contenu à gauche — version enrichie */}
            <div className="relative isolate">
              {/* Visuel en arrière-plan de la colonne, discret */}
              <Image
                src="/assets/simulateur-aligne.jpeg"
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pointer-events-none -z-10 object-cover opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
              />

              <p className="relative flex items-baseline gap-3">
                <span className="font-display text-[26px] italic text-turquoise md:text-[30px]">
                  02
                </span>
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  Simulateur HD
                </span>
              </p>

              <h2 className="mt-5 font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[64px]">
                Calcule ton <em className="italic text-turquoise">schéma</em> personnalisé.
              </h2>

              <p className="mt-6 font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
                «&nbsp;Ton design, tel qu'il est inscrit dans le ciel à ta naissance.&nbsp;»
              </p>

              <p className="mt-5 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                À partir de ta date, ton heure et ton lieu de naissance, ton schéma Human
                Design se révèle. Tu obtiens ton Type, ton Autorité intérieure, ton Profil et
                bien plus. C'est la base de tout&nbsp;: la cartographie unique de ton énergie.
              </p>

              {/* CE QUE TU OBTIENS */}
              <div className="mt-8">
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                  Ce que tu reçois
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Ton schéma visuel complet (les 9 centres, canaux et portes)",
                    "Ton Type énergétique parmi les 5 (Generator, MG, Projector, Manifestor, Reflector)",
                    "Ton Autorité intérieure pour décider juste",
                    "Ton Profil de personnalité (les 12 combinaisons)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-[14px] leading-snug text-ink-deep md:text-[15px]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-turquoise"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* À SAVOIR — précisions sur les champs, structure label + texte */}
              <div className="mt-8 rounded-md border border-ink-deep/10 bg-paper/60 p-6 md:p-7">
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                  À savoir avant de commencer
                </p>
                <ul className="mt-5 flex flex-col gap-5">
                  <li>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      Heure de naissance précise
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      Même 10 minutes peuvent changer ton Profil ou ton Autorité. Si tu ne la
                      connais pas exactement, tu peux la demander à ta mairie de naissance.
                    </p>
                  </li>
                  <li>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      Lieu de naissance
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      Une ville suffit, pas besoin de l'hôpital. Le simulateur s'occupe du
                      fuseau horaire et des coordonnées.
                    </p>
                  </li>
                  <li>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      Aucun engagement
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      Le simulateur est gratuit, ton schéma t'appartient. Tu peux ensuite
                      explorer{" "}
                      <Link
                        href="/mes-offres"
                        className="text-turquoise underline-offset-2 hover:underline"
                      >
                        mes offres
                      </Link>{" "}
                      si tu veux aller plus loin.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulaire à droite — composant partagé avec la home */}
            <div className="relative lg:pt-2">
              <HDSimulatorForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAS — pont vers /mes-offres */}
      <section className="bg-white px-6 pb-24 md:px-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="rounded-2xl border border-ink-deep/8 bg-paper p-10 text-center shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-14">
            <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Envie d'aller plus loin&nbsp;?
            </p>
            <h3 className="mt-5 font-display text-[32px] font-light leading-tight text-ink-deep md:text-[44px]">
              Explore <em className="italic text-turquoise">tous les espaces</em> de Marion.
            </h3>
            <p className="mx-auto mt-5 max-w-[560px] font-body text-[14px] leading-relaxed text-ink md:text-[15px]">
              Du quiz découverte au programme d'incarnation de 3 mois, chaque offre
              correspond à un besoin et à un moment de ton parcours.
            </p>
            <Link
              href="/mes-offres"
              className="mt-9 inline-flex items-center justify-center rounded-full border border-ink-deep bg-white px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
            >
              Découvrir mes offres
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
