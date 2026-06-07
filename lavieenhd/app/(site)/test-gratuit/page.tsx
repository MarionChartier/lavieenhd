import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";
import { Testimonials } from "@/components/sections/home/Testimonials";

export const metadata: Metadata = {
  title: "Test HD gratuit · La vie en HD",
  description:
    "Ta porte d'entrée gratuite vers ton Human Design : calcule ton schéma personnalisé en quelques secondes.",
};

export default function TestGratuitPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 pt-20 pb-12 text-center md:px-20 md:pt-28 md:pb-16">
        <h1 className="font-display text-[45px] font-light leading-[0.95] text-ink-deep md:text-[90px]">
          Ton schéma <em className="italic text-turquoise">Human Design</em>,
          {" "}gratuitement.
        </h1>

        <p className="mx-auto mt-8 max-w-[680px] font-display text-[18px] font-light italic leading-snug text-ink md:text-[22px]">
          Un outil 100% gratuit pour commencer. À partir de ta date, ton heure et ton lieu
          de naissance, calcule ton schéma complet en quelques secondes.
        </p>
      </section>

      {/* SÉPARATEUR fin avant le simulateur */}
      <div className="bg-white px-6 md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION — SIMULATEUR HD */}
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

              <p className="relative font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                Test HD gratuit
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

            {/* Calculateur à droite — composant partagé avec la home */}
            <div className="relative lg:pt-2">
              <HDSimulatorForm />
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <Testimonials />

      {/* CTA BAS — pont vers /mes-offres */}
      <section className="bg-white px-6 pt-12 pb-24 md:px-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="rounded-2xl border border-ink-deep/8 bg-paper p-10 text-center shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-14">
            <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Envie d'aller plus loin&nbsp;?
            </p>
            <h3 className="mt-5 font-display text-[32px] font-light leading-tight text-ink-deep md:text-[44px]">
              Explore <em className="italic text-turquoise">tous les espaces</em> de La vie en HD.
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
