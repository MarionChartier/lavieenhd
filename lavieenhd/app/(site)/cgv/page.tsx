/*
 * ⚠️ NOTE INTERNE (demande de Marion, 23/10/2026)
 * Toute modification de ces CGV implique de mettre à jour le PDF des CGV
 * envoyé aux clients lors de leurs achats (systeme.io). Prévenir Marion à
 * chaque changement de texte, et mettre à jour la date « Dernière mise à jour ».
 */
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { EXTERNAL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des produits numériques, prestations et accompagnements proposés par Marion Chartier, La vie en HD.",
};

const EMAIL = "hello@marionchartier-lavieenhd.com";

/** Formulaire type annexé aux CGV (article 8.6), fourni par Marion. */
const FORMULAIRE_RETRACTATION_PDF = "/documents/formulaire-retractation.pdf";

const linkClass = "underline underline-offset-2 transition-colors hover:text-turquoise";
const textClass =
  "font-sans text-[15px] font-normal leading-relaxed text-ink-deep md:text-[16px]";

function Article({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="font-display text-[24px] font-light leading-snug text-ink-deep md:text-[28px]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Sub({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <div id={id} className="mt-6 scroll-mt-24">
      <h3 className="font-sans text-[16px] font-medium leading-snug text-ink-deep md:text-[17px]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className={`mt-3 whitespace-pre-line ${textClass}`}>{children}</p>;
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className={`mt-3 flex list-disc flex-col gap-1.5 pl-5 ${textClass}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Numbered({ items }: { items: string[] }) {
  return (
    <ol className={`mt-3 flex list-decimal flex-col gap-1.5 pl-6 ${textClass}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

/** Encadré d'information sur la garantie légale de conformité (article 13). */
function Encadre({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside
      aria-label={label}
      className="mt-4 rounded-[16px] border border-beige-soft bg-beige-paper px-5 pt-2 pb-5 md:px-8 md:pb-7"
    >
      {children}
    </aside>
  );
}

function ArticleLink({ n, children }: { n: number; children: ReactNode }) {
  return (
    <Link href={`#article-${n}`} className={linkClass}>
      {children}
    </Link>
  );
}

function Mail({ address }: { address: string }) {
  return (
    <a href={`mailto:${address}`} className={linkClass}>
      {address}
    </a>
  );
}

const NON_CONFORMITE_CAS = [
  "Le professionnel refuse de mettre le contenu numérique ou le service numérique en conformité ;",
  "La mise en conformité du contenu numérique ou du service numérique est retardée de manière injustifiée ;",
  "La mise en conformité du contenu numérique ou du service numérique ne peut intervenir sans frais imposés au consommateur ;",
  "La mise en conformité du contenu numérique ou du service numérique occasionne un inconvénient majeur pour le consommateur ;",
  "La non-conformité du contenu numérique ou du service numérique persiste en dépit de la tentative de mise en conformité du professionnel restée infructueuse.",
];

export default function CgvPage() {
  return (
    <section className="bg-white px-6 pt-16 pb-24 md:px-20 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-[760px]">
        <h1 className="font-display text-[40px] font-light leading-[1] text-ink-deep md:text-[64px]">
          Conditions générales de vente
        </h1>

        <div className="mt-6">
          <P>
            {"Les présentes Conditions Générales de Vente (CGV) définissent les conditions dans lesquelles Marion Chartier, entrepreneure individuelle (EI), exerçant sous le nom commercial La vie en HD, propose et commercialise ses produits numériques, prestations de services et accompagnements."}
          </P>
          <P>
            {"Ces offres comprennent notamment des guides et ressources numériques, des analyses personnalisées, des séances de coaching, des soins énergétiques collectifs à distance ainsi que des parcours d'accompagnement en ligne."}
          </P>
          <P>
            {"Les présentes CGV ont pour objet de préciser les droits et obligations de La vie en HD et de ses clients dans le cadre de la vente de ces produits et prestations."}
          </P>
          <P>
            {"Elles s'appliquent aux commandes effectuées sur le site internet La vie en HD, sauf conditions particulières expressément convenues entre les parties."}
          </P>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          <Article id="article-1" title="Article 1 : Champ d'application">
            <P>
              {"Les présentes Conditions Générales de Vente (CGV) s'appliquent à l'ensemble des produits numériques, prestations de services et accompagnements proposés à la vente par Marion Chartier, entrepreneure individuelle (EI), exerçant sous le nom commercial La vie en HD, sur son site internet."}
            </P>
            <P>
              {"Elles régissent les relations contractuelles entre La vie en HD et toute personne effectuant une commande, désignée ci-après « le client »."}
            </P>
            <P>
              {"Les caractéristiques essentielles, le contenu, les modalités et les tarifs des offres sont présentés sur les pages de vente correspondantes, avant toute commande."}
            </P>
            <P>
              {"Le client reconnaît avoir pris connaissance des présentes CGV avant de valider sa commande et les accepter expressément au moyen d'une case à cocher prévue à cet effet."}
            </P>
            <P>
              {"La version des CGV applicable à une commande est celle en vigueur au moment de sa validation."}
            </P>
            <P>
              {"La vie en HD se réserve la possibilité de modifier ses CGV à tout moment, sans effet rétroactif sur les commandes déjà conclues, sauf accord des parties ou disposition légale contraire."}
            </P>
          </Article>

          <Article id="article-1-bis" title="Article 1 bis : Conditions d'âge">
            <P>
              {"Les produits numériques, prestations et accompagnements proposés par La vie en HD s'adressent aux personnes majeures, âgées d'au moins 18 ans."}
            </P>
            <P>
              {"En validant sa commande, le client déclare être majeur et disposer de la capacité juridique nécessaire pour contracter."}
            </P>
            <P>
              {"Les demandes concernant des personnes mineures pourront être étudiées individuellement, sous réserve de l'accord et de l'intervention de leur représentant légal et des conditions particulières éventuellement applicables."}
            </P>
          </Article>

          <Article id="article-2" title="Article 2 : Commande">
            <P>
              {"Le client sélectionne le produit numérique, la prestation ou l'accompagnement de son choix à partir des offres présentées sur le site internet La vie en HD."}
            </P>
            <P>
              {"Avant la validation définitive de sa commande, le client peut prendre connaissance des caractéristiques essentielles de l'offre, de son prix et des conditions applicables. Il est invité à vérifier les informations communiquées et à corriger toute éventuelle erreur."}
            </P>
            <P>
              {"La validation de la commande implique l'acceptation expresse des présentes Conditions Générales de Vente, au moyen d'une case à cocher dédiée."}
            </P>
            <P>
              {"Lorsque la nature de l'offre le nécessite, des consentements ou demandes spécifiques sont également recueillis, notamment concernant le commencement de l'exécution d'une prestation ou la fourniture d'un contenu numérique avant l'expiration du délai légal de rétractation, dans les conditions prévues à "}
              <ArticleLink n={8}>{"l'article 8"}</ArticleLink>.
            </P>
            <P>
              {"La commande est définitivement validée après confirmation du paiement par le prestataire concerné."}
            </P>
            <P>
              {"Une confirmation de commande est ensuite adressée au client par courrier électronique, accompagnée des informations contractuelles requises sur un support durable, notamment les présentes CGV et, le cas échéant, les consentements recueillis."}
            </P>
            <P>
              {"Le client s'engage à fournir des informations exactes et à jour, notamment une adresse électronique valide permettant la réception des confirmations de commande et des éléments nécessaires à la réalisation de la prestation."}
            </P>
          </Article>

          <Article id="article-3" title="Article 3 : Prix">
            <P>
              {"Les prix des produits numériques, prestations et accompagnements proposés par La vie en HD sont indiqués en euros."}
            </P>
            <P>
              {"La vie en HD bénéficie du régime de franchise en base de TVA. La TVA n'est donc pas applicable."}
            </P>
            <P>
              {"Les prix peuvent être modifiés à tout moment. Toutefois, le tarif applicable à une commande est celui affiché et accepté par le client au moment de sa validation."}
            </P>
            <P>
              {"Aucun frais de livraison physique ne s'applique aux produits et prestations proposés."}
            </P>
          </Article>

          <Article id="article-4" title="Article 4 : Paiement">
            <P>{"Le paiement est exigible au moment de la commande."}</P>
            <P>
              {"Les règlements sont effectués en ligne, par les moyens de paiement proposés lors de la commande, notamment par carte bancaire ou via PayPal."}
            </P>
            <P>
              {"Les paiements par carte bancaire sont traités par un prestataire de paiement sécurisé."}
            </P>
            <P>
              {"Des facilités de paiement en plusieurs fois peuvent être proposées directement par PayPal, sous réserve d'éligibilité et conformément aux conditions propres à ce service. La vie en HD ne propose pas directement de paiement échelonné."}
            </P>
            <P>
              {"La commande est considérée comme validée après confirmation de l'acceptation du paiement par le prestataire concerné."}
            </P>
          </Article>

          <Article id="article-5" title="Article 5 : Modalités de délivrance des produits et prestations">
            <Sub title="5.1. Guides et contenus numériques téléchargeables">
              <P>
                {"Les guides numériques THE PLACE to be et Body Bloom sont accessibles en téléchargement immédiatement après la validation du paiement, depuis la page de confirmation de commande. Ils sont également transmis au client par courrier électronique après son achat."}
              </P>
              <P>
                {"Le client doit disposer d'un équipement et d'une connexion internet adaptés à leur téléchargement et à leur consultation."}
              </P>
            </Sub>
            <Sub title="5.2. Analyses personnalisées et prestations individuelles">
              <P>
                {"Le contenu, les livrables et les modalités de réalisation des prestations individuelles sont détaillés sur les pages de vente correspondantes."}
              </P>
              <P>
                {"Lorsque le délai maximum de transmission d'un livrable n'est pas expressément précisé sur la page de vente, celui-ci est fixé à 15 jours calendaires à compter de la réalisation de la séance concernée ou, pour les livrables remis avant une séance, de la réception de l'ensemble des informations nécessaires à leur réalisation."}
              </P>
            </Sub>
            <Sub title="5.3. Parcours RECONNECT">
              <P>
                {"Le contenu, la durée, les modalités de démarrage et de déroulement du parcours RECONNECT, ainsi que les ressources et prestations incluses dans chaque formule, sont détaillés sur la page de vente correspondante."}
              </P>
              <P>
                {"Les informations nécessaires pour accéder au parcours sont communiquées au client après son inscription."}
              </P>
            </Sub>
            <Sub title="5.4. Soins énergétiques collectifs à distance">
              <P>
                {"Les soins énergétiques collectifs à distance sont réalisés à la date et à l'heure annoncées lors de l'inscription."}
              </P>
              <P>
                {"Le contenu, les modalités de réalisation et les éventuels éléments transmis à l'issue du soin sont précisés sur la page de présentation correspondante."}
              </P>
              <P>
                {"Les informations pratiques nécessaires au déroulement du soin sont communiquées au client après son inscription."}
              </P>
              <P>
                {"Les conditions de report et d'annulation sont précisées à "}
                <ArticleLink n={9}>{"l'article 9"}</ArticleLink>
                {" des présentes CGV."}
              </P>
            </Sub>
            <Sub title="5.5. Difficultés d'accès ou de réception">
              <P>
                {"En cas de difficulté pour accéder à un contenu numérique, télécharger un document ou recevoir un livrable, le client est invité à contacter La vie en HD afin qu'une solution adaptée puisse être recherchée."}
              </P>
              <P>
                {"La vie en HD ne saurait être tenue responsable des dysfonctionnements exclusivement imputables à l'équipement, à la connexion internet ou aux services tiers utilisés par le client, sous réserve des garanties légales applicables."}
              </P>
            </Sub>
            <Sub title="5.6. Circonstances exceptionnelles et empêchement">
              <P>
                {"En cas de circonstances exceptionnelles, notamment de problème de santé grave, d'accident ou d'événement indépendant de sa volonté, susceptibles d'empêcher ou de retarder l'exécution d'une prestation, La vie en HD en informe le client dans les meilleurs délais, dès lors qu'elle est en mesure de le faire."}
              </P>
              <P>
                {"Lorsque la situation le permet, un report de la prestation ou un nouveau délai de transmission peut être proposé au client."}
              </P>
              <P>
                {"En cas de force majeure au sens de l'article 1218 du Code civil, les conséquences de l'empêchement sont régies par les dispositions légales applicables."}
              </P>
              <P>
                {"Si la prestation ne peut finalement pas être réalisée, les conditions de résolution du contrat et de remboursement sont déterminées conformément aux dispositions légales applicables."}
              </P>
              <P>{"Ces dispositions ne portent pas atteinte aux droits légaux du client."}</P>
            </Sub>
          </Article>

          <Article id="article-6" title="Article 6 : Protection des données personnelles">
            <P>
              {"Dans le cadre de son activité, La vie en HD collecte et traite les données personnelles nécessaires à la gestion des commandes, à la réalisation des prestations, à la prise de rendez-vous et aux échanges avec ses clients."}
            </P>
            <P>
              {"Ces données peuvent notamment comprendre les coordonnées du client, ses informations de naissance nécessaires aux analyses personnalisées, ainsi que les informations qu'il choisit de communiquer dans le cadre des questionnaires et des accompagnements."}
            </P>
            <P>
              {"La vie en HD s'engage à traiter ces données conformément à la réglementation applicable en matière de protection des données personnelles, notamment au Règlement général sur la protection des données (RGPD)."}
            </P>
            <P>
              {"Les informations relatives aux finalités des traitements, à leurs bases légales, aux destinataires des données, à leurs durées de conservation et aux droits des personnes concernées sont détaillées dans la "}
              <Link href="/confidentialite" className={linkClass}>
                Politique de confidentialité
              </Link>
              {" accessible sur le site internet de La vie en HD."}
            </P>
            <P>
              {"Le client peut exercer ses droits concernant ses données personnelles en contactant La vie en HD aux coordonnées indiquées dans les présentes CGV."}
            </P>
          </Article>

          <Article id="article-7" title="Article 7 : Droit applicable et règlement des litiges">
            <P>
              {"Les présentes Conditions Générales de Vente sont soumises au droit français, sous réserve des dispositions impératives de protection des consommateurs éventuellement applicables."}
            </P>
            <P>
              {"En cas de difficulté ou de différend relatif à une commande ou à une prestation, le client est invité à contacter préalablement La vie en HD afin de rechercher une solution amiable."}
            </P>
            <P>
              {"À défaut de résolution amiable, le client peut recourir gratuitement à un médiateur de la consommation, selon les modalités précisées à "}
              <ArticleLink n={14}>{"l'article 14"}</ArticleLink>
              {" des présentes CGV."}
            </P>
            <P>
              {"En cas de litige persistant, les juridictions compétentes sont déterminées conformément aux règles légales applicables."}
            </P>
          </Article>

          <Article id="article-8" title="Article 8 : Droit de rétractation">
            <Sub title="8.1. Droit légal de rétractation">
              <P>
                {"Conformément aux articles L221-18 et suivants du Code de la consommation, le client ayant la qualité de consommateur dispose, pour tout contrat conclu à distance, d'un délai légal de rétractation de quatorze (14) jours calendaires à compter de la conclusion du contrat."}
              </P>
              <P>
                {"Le client peut exercer ce droit sans avoir à justifier sa décision, sous réserve des exceptions et conditions prévues par la réglementation applicable."}
              </P>
            </Sub>
            <Sub title="8.2. Prestations de services personnalisées et soins énergétiques">
              <P>
                {"Les offres INSIDE, REVEAL et Blooming comprennent des prestations personnalisées dont l'exécution peut commencer dès la validation de la commande, à la demande expresse du client."}
              </P>
              <P>
                {"Les soins énergétiques, individuels ou collectifs, réalisés à distance, constituent également des prestations de services, exécutées à la date ou selon les modalités convenues lors de la commande."}
              </P>
              <P>
                {"Lorsque le client demande expressément que l'exécution de sa prestation commence avant l'expiration du délai légal de rétractation de quatorze (14) jours, il conserve son droit de rétractation tant que la prestation n'a pas été entièrement exécutée."}
              </P>
              <P>
                {"En cas de rétractation après le commencement de la prestation, le client reste redevable d'un montant proportionnel aux services effectivement fournis jusqu'à la communication de sa décision de se rétracter, conformément à l'article L221-25 du Code de la consommation."}
              </P>
              <P>
                {"Lorsque la prestation est entièrement exécutée avant la fin du délai légal de rétractation, le client perd son droit de rétractation, sous réserve qu'il ait préalablement donné son accord exprès au commencement anticipé de la prestation et reconnu cette perte du droit de rétractation, conformément à l'article L221-28 du Code de la consommation."}
              </P>
            </Sub>
            <Sub title="8.3. Parcours RECONNECT">
              <P>
                {"Le parcours RECONNECT est proposé en trois formules: Solo, Circle et Premium 1:1."}
              </P>
              <P>
                {"La formule Solo repose sur un parcours numérique interactif de 13 semaines, comprenant notamment des questionnaires introspectifs guidés, des sections personnalisées en fonction du Human Design du client et des ressources accessibles progressivement au fil du parcours. Les réponses aux questionnaires sont enregistrées sur une plateforme numérique et sont restituées au client."}
              </P>
              <P>
                {"Les formules Circle et Premium 1:1 complètent ce parcours par des ressources supplémentaires et des prestations d'accompagnement, selon les modalités propres à chaque formule."}
              </P>
              <P>
                {"Pour l'application du présent article, les trois formules sont considérées comme relevant du régime de rétractation applicable aux prestations de services et services numériques."}
              </P>
              <P>
                {"Le client dispose d'un délai légal de rétractation de quatorze (14) jours à compter de la conclusion du contrat."}
              </P>
              <P>
                {"Le parcours débute le lundi suivant l'inscription et se déroule sur 13 semaines, avec une nouvelle étape accessible chaque lundi."}
              </P>
              <P>
                {"Lorsque le client demande expressément que l'exécution du parcours commence avant l'expiration de son délai légal de rétractation, il conserve son droit de rétractation pendant ce délai."}
              </P>
              <P>
                {"En cas de rétractation après le commencement du parcours, un montant proportionnel aux services effectivement fournis jusqu'à la communication de sa décision de rétractation reste dû, conformément à l'article L221-25 du Code de la consommation, sous réserve du respect des conditions légales applicables."}
              </P>
              <P>
                {"Ce montant est déterminé en fonction du prix total convenu et de la part du parcours effectivement exécutée à la date de la rétractation, en tenant compte de la durée d'accompagnement écoulée et de la nature des prestations fournies."}
              </P>
              <P>
                {"Dans le cadre de la formule RECONNECT Premium 1:1, certaines prestations personnalisées peuvent être commencées pendant le délai légal de rétractation, notamment les travaux préparatoires relatifs à l'analyse INSIDE, dont la réalisation débute généralement en deuxième semaine, pour une remise du guide en troisième semaine."}
              </P>
              <P>
                {"L'analyse Blooming intervient plus tard dans le parcours, après l'expiration du délai légal de rétractation."}
              </P>
              <P>
                {"En cas de rétractation pendant ce délai, les travaux et interventions déjà réalisés dans le cadre de Premium 1:1 peuvent être pris en considération dans l'évaluation de la part du parcours effectivement exécutée, dans les limites et conditions prévues par la réglementation."}
              </P>
              <P>
                {"Le commencement d'une analyse personnalisée ne donne toutefois pas automatiquement lieu à la facturation intégrale de sa valeur commerciale. Les prestations non encore exécutées ne sont pas considérées comme réalisées."}
              </P>
              <P>
                {"La mise à disposition progressive des questionnaires et ressources intégrés au parcours ne constitue pas, à elle seule, une renonciation du client à son droit légal de rétractation."}
              </P>
              <P>
                {"Lorsque les conditions légales de perte du droit de rétractation pour une prestation entièrement exécutée avant l'expiration du délai sont réunies, le client ne peut plus exercer ce droit au titre de cette prestation."}
              </P>
            </Sub>
            <Sub title="8.4. Contenus numériques sans support matériel">
              <P>
                {"Les offres THE PLACE to be et Body Bloom sont proposées sous forme de contenus numériques accessibles après l'achat."}
              </P>
              <P>
                {"Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation peut être perdu dès le commencement de la fourniture de ces contenus avant l'expiration du délai légal de 14 jours, lorsque les conditions suivantes sont réunies:"}
              </P>
              <Bullets
                items={[
                  "Le client a préalablement donné son consentement exprès au commencement anticipé de la fourniture.",
                  "Le client a reconnu qu'il perdrait son droit de rétractation dès le début de cette fourniture.",
                  "La vie en HD a transmis au client la confirmation de cet accord sur un support durable, conformément aux dispositions légales applicables.",
                ]}
              />
              <P>
                {"À défaut de réunion de ces conditions, le droit de rétractation demeure applicable dans les conditions prévues par la loi."}
              </P>
            </Sub>
            <Sub title="8.5. Calcul des sommes dues en cas de rétractation après commencement d'une prestation">
              <P>
                {"Lorsqu'une prestation de services a commencé à la demande expresse du client avant l'expiration du délai légal de rétractation, le montant restant dû en cas de rétractation correspond à la part des services effectivement fournis jusqu'à la communication de sa décision."}
              </P>
              <P>
                {"Ce montant est calculé proportionnellement au prix total convenu dans le contrat, conformément à l'article L221-25 du Code de la consommation. Si le prix total est excessif, le montant approprié est déterminé sur la base de la valeur marchande de ce qui a été fourni."}
              </P>
              <P>
                {"L'évaluation tient compte des caractéristiques du contrat et des prestations effectivement réalisées."}
              </P>
              <P>
                {"Aucun pourcentage forfaitaire du prix ne reste automatiquement acquis à La vie en HD du seul fait de la validation de la commande."}
              </P>
              <P>
                {"Lorsque les conditions légales relatives à la demande expresse de commencement anticipé ou à l'information préalable du client n'ont pas été respectées, aucune somme ne peut être exigée au titre des services fournis pendant le délai de rétractation, dans les conditions prévues par la loi."}
              </P>
            </Sub>
            <Sub id="article-8-6" title="8.6. Modalités d'exercice du droit de rétractation">
              <P>
                {"Lorsque le droit de rétractation est applicable, le client peut notifier sa décision avant l'expiration du délai légal, au moyen d'une déclaration dénuée d'ambiguïté:"}
              </P>
              <Bullets
                items={[
                  <>
                    {"Par email à l'adresse suivante: "}
                    <Mail address={EMAIL} />
                  </>,
                  "Par courrier à l'adresse suivante: 20 chemin de Menoux 74350 CERCIER",
                  <>
                    {"Par la fonctionnalité de rétractation en ligne accessible via le lien suivant : "}
                    <a
                      href={EXTERNAL.retractation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkClass} break-all`}
                    >
                      {EXTERNAL.retractation}
                    </a>
                  </>,
                ]}
              />
              <P>
                {"Le client peut également utiliser le formulaire type de rétractation annexé aux présentes Conditions Générales de Vente, sans que son utilisation soit obligatoire."}
              </P>
              <P>
                {"La fonctionnalité de rétractation en ligne permet au client de transmettre et de confirmer sa déclaration de rétractation."}
              </P>
              <P>
                {"Un accusé de réception mentionnant notamment le contenu de la déclaration ainsi que sa date et son heure d'envoi lui est transmis sur un support durable, conformément aux dispositions réglementaires applicables."}
              </P>
            </Sub>
            <Sub title="8.7. Remboursement">
              <P>
                {"En cas d'exercice valable du droit de rétractation, les sommes devant être restituées au client sont remboursées sans retard injustifié et au plus tard dans un délai de quatorze (14) jours à compter de la date à laquelle La vie en HD est informée de sa décision de rétractation."}
              </P>
              <P>
                {"Le remboursement est effectué par le même moyen de paiement que celui utilisé lors de la transaction initiale, sauf accord exprès du client pour un autre moyen, sans frais supplémentaires pour lui."}
              </P>
              <P>
                {"Lorsque la prestation de services a commencé à la demande expresse du client, les sommes légalement dues au titre des services effectivement fournis sont prises en compte dans le calcul du remboursement."}
              </P>
            </Sub>
            <Sub title="8.8. Information et confirmation des consentements">
              <P>
                {"Les informations relatives au droit de rétractation et aux exceptions éventuellement applicables sont communiquées au client avant la validation de sa commande."}
              </P>
              <P>
                {"Lorsque l'exécution anticipée d'une prestation ou la fourniture anticipée d'un contenu numérique nécessite son accord exprès, celui-ci est recueilli préalablement au commencement de l'exécution, dans les conditions prévues par la réglementation applicable."}
              </P>
              <P>
                {"Une confirmation du contrat et des informations légalement requises est transmise au client sur un support durable, conformément à l'article L221-13 du Code de la consommation."}
              </P>
              <P>
                {"Le formulaire type de rétractation est également transmis dans les conditions prévues par la réglementation."}
              </P>
            </Sub>
          </Article>

          <Article id="article-9" title="Article 9 : Exécution et annulation">
            <Sub title="9.1. Séances de coaching">
              <P>
                {"En cas d'empêchement, le client dispose de la possibilité de reporter une seule fois chaque séance de coaching réservée."}
              </P>
              <P>
                {"Le client s'engage à effectuer lui-même la démarche de replanification, directement depuis le lien de prise de rendez-vous Calendly, et à informer l'organisateur de toute indisponibilité dans les meilleurs délais, impérativement avant la date et l'heure prévues de la séance."}
              </P>
              <P>
                {"En cas d'absence du client au rendez-vous, sans information préalable, ou de non-respect des modalités de report, la séance pourra être considérée comme due et ne donnera pas automatiquement lieu à un nouveau rendez-vous ni à un remboursement, sous réserve des droits légaux du client."}
              </P>
              <P>
                {"En cas d'empêchement de l'organisateur, celui-ci s'engage à prévenir le client dans les meilleurs délais et à proposer un nouveau créneau, sans que ce report soit décompté de la possibilité de report accordée au client."}
              </P>
              <P>
                {"Si la séance ne peut finalement pas être assurée par l'organisateur, les sommes versées au titre de la prestation non réalisée seront remboursées."}
              </P>
            </Sub>
            <Sub title="9.2. Soins énergétiques collectifs à distance">
              <P>
                {"Les soins énergétiques collectifs à distance sont réalisés à la date et à l'heure annoncées lors de l'inscription."}
              </P>
              <P>
                {"La présence ou la disponibilité du client au moment du soin n'étant pas requise, une indisponibilité personnelle ne donne pas lieu au report individuel de la prestation. Le soin collectif est maintenu à la date prévue, sous réserve des dispositions légales relatives au droit de rétractation."}
              </P>
              <P>
                {"En cas d'empêchement de l'organisateur ne permettant pas d'assurer le soin dans de bonnes conditions, celui-ci s'engage à informer les participants dans les meilleurs délais et à proposer une nouvelle date."}
              </P>
              <P>
                {"Si le soin ne peut finalement pas être réalisé, les sommes versées au titre de cette prestation seront remboursées."}
              </P>
            </Sub>
            <Sub title="9.3. Dispositions générales">
              <P>
                {"Toute demande relative à une difficulté d'exécution, une annulation ou un report doit être adressée à l'organisateur dans les meilleurs délais."}
              </P>
              <P>
                {"Les présentes modalités s'appliquent sans préjudice des dispositions légales impératives, notamment celles relatives au droit de rétractation prévues à "}
                <ArticleLink n={8}>{"l'article 8"}</ArticleLink>
                {" des présentes Conditions Générales de Vente."}
              </P>
            </Sub>
          </Article>

          <Article id="article-10" title="Article 10 : Nature des prestations et responsabilité">
            <P>
              {"Les prestations, accompagnements, analyses et contenus proposés par La vie en HD s'inscrivent dans une démarche de connaissance de soi, de développement personnel et d'exploration de son parcours personnel ou professionnel."}
            </P>
            <P>
              {"Les approches mobilisées, notamment le Human Design, la numérologie et les pratiques énergétiques, constituent des outils d'exploration et de réflexion personnelle. Elles ne reposent pas sur des méthodes scientifiques validées permettant de prédire des résultats individuels."}
            </P>
            <P>
              {"Les prestations proposées ne constituent ni un diagnostic médical, ni un traitement thérapeutique, ni une consultation psychologique. Elles ne se substituent pas à un accompagnement par un professionnel de santé lorsque celui-ci est nécessaire."}
            </P>
            <P>
              {"Les informations, analyses et pistes proposées ont pour vocation d'éclairer la réflexion du client et de l'accompagner dans son cheminement. Elles ne constituent pas une garantie de résultat, notamment en matière de reconversion, d'évolution professionnelle, de développement d'activité ou de bien-être."}
            </P>
            <P>
              {"Le client demeure libre et responsable de ses décisions et des actions qu'il choisit d'entreprendre à partir des éléments transmis."}
            </P>
            <P>
              {"La vie en HD s'engage à réaliser les prestations convenues avec sérieux et diligence, conformément à leur description contractuelle et aux obligations légales applicables."}
            </P>
            <P>
              {"Les présentes dispositions ne limitent ni n'excluent les droits légaux du client ni les responsabilités auxquelles il ne peut être dérogé."}
            </P>
          </Article>

          <Article id="article-11" title="Article 11 : Propriété intellectuelle et utilisation des contenus">
            <P>
              {"L'ensemble des contenus originaux créés et transmis par La vie en HD, notamment les guides numériques, analyses personnalisées, Fleur de Talents Innés™, questionnaires, exercices, textes, supports pédagogiques, méditations, enregistrements audio, vidéos, illustrations et ressources des accompagnements, est protégé par les dispositions applicables en matière de propriété intellectuelle."}
            </P>
            <P>
              {"Ces contenus sont destinés à un usage personnel et privé du client, sauf autorisation écrite préalable de Marion Chartier."}
            </P>
            <P>
              {"Toute reproduction, diffusion, transmission à des tiers, mise en ligne, revente, adaptation ou exploitation commerciale, totale ou partielle, des contenus protégés est interdite sans autorisation préalable, sauf exceptions prévues par la loi."}
            </P>
            <P>
              {"L'achat d'un produit ou d'une prestation ne transfère aucun droit de propriété intellectuelle au client sur les contenus fournis."}
            </P>
            <P>
              {"Les droits éventuels de tiers sur certains éléments utilisés dans les prestations demeurent réservés à leurs titulaires respectifs."}
            </P>
          </Article>

          <Article id="article-12" title="Article 12 : Identification de l'entreprise">
            <P>
              {"Les produits et prestations proposés sur le site La vie en HD sont commercialisés par :"}
            </P>
            <P>
              {"Marion Chartier, entrepreneure individuelle (EI)\nExerçant sous le nom commercial La vie en HD"}
            </P>
            <P>{"Adresse professionnelle :\n20 chemin de Menoux\n74350 CERCIER"}</P>
            <P>
              {"Adresse électronique : "}
              <Mail address={EMAIL} />
            </P>
            <P>{"Numéro SIREN : 938589785"}</P>
            <P>
              {"Entreprise individuelle relevant du régime de la micro-entreprise et bénéficiant de la franchise en base de TVA."}
            </P>
            <P>{"TVA non applicable."}</P>
          </Article>

          <Article
            id="article-13"
            title="Article 13 : Garanties légales applicables aux contenus et services numériques"
          >
            <P>
              {"Les contenus et services numériques proposés par La vie en HD bénéficient des garanties légales applicables, conformément au Code de la consommation."}
            </P>
            <P>
              {"Les informations ci-dessous concernent notamment les guides numériques, les ressources téléchargeables et les questionnaires numériques proposés dans le cadre des offres de La vie en HD."}
            </P>

            <Sub title="13.1. Contenus numériques fournis ponctuellement ou en plusieurs fois">
              <Encadre label="Information sur la garantie légale de conformité des contenus numériques fournis ponctuellement ou en plusieurs fois">
                <P>
                  {"Le consommateur dispose d'un délai de deux ans à compter de la fourniture du contenu numérique ou du service numérique pour obtenir la mise en œuvre de la garantie légale de conformité en cas d'apparition d'un défaut de conformité. Durant un délai d'un an à compter de la date de fourniture, le consommateur n'est tenu d'établir que l'existence du défaut de conformité et non la date d'apparition de celui-ci."}
                </P>
                <P>
                  {"La garantie légale de conformité emporte obligation de fournir toutes les mises à jour nécessaires au maintien de la conformité du contenu numérique ou du service numérique."}
                </P>
                <P>
                  {"La garantie légale de conformité donne au consommateur droit à la mise en conformité du contenu numérique ou du service numérique sans retard injustifié suivant sa demande, sans frais et sans inconvénient majeur pour lui."}
                </P>
                <P>
                  {"Le consommateur peut obtenir une réduction du prix en conservant le contenu numérique ou le service numérique ou il peut mettre fin au contrat en se faisant rembourser intégralement contre renoncement au contenu numérique ou au service numérique, si :"}
                </P>
                <Numbered items={NON_CONFORMITE_CAS} />
                <P>
                  {"Le consommateur a également droit à une réduction du prix ou à la résolution du contrat lorsque le défaut de conformité est si grave qu'il justifie que la réduction du prix ou la résolution du contrat soit immédiate. Le consommateur n'est alors pas tenu de demander la mise en conformité du contenu numérique ou du service numérique au préalable."}
                </P>
                <P>
                  {"Dans les cas où le défaut de conformité est mineur, le consommateur n'a droit à l'annulation du contrat que si le contrat ne prévoit pas le paiement d'un prix."}
                </P>
                <P>
                  {"Toute période d'indisponibilité du contenu numérique ou du service numérique en vue de sa remise en conformité suspend la garantie qui restait à courir jusqu'à la fourniture du contenu numérique ou du service numérique de nouveau conforme."}
                </P>
                <P>
                  {"Les droits mentionnés ci-dessus résultent de l'application des articles L. 224-25-1 à L. 224-25-31 du Code de la consommation."}
                </P>
                <P>
                  {"Le professionnel qui fait obstacle de mauvaise foi à la mise en œuvre de la garantie légale de conformité encourt une amende civile d'un montant maximal de 300 000 euros, qui peut être porté jusqu'à 10 % du chiffre d'affaires moyen annuel (article L. 242-18-1 du Code de la consommation)."}
                </P>
                <P>
                  {"Le consommateur bénéficie, en outre, de la garantie légale des vices cachés en application des articles 1641 à 1649 du Code civil, pendant une durée de deux ans à compter de la découverte du défaut. Cette garantie donne droit à une réduction de prix si le contenu numérique ou le service numérique est conservé ou à un remboursement intégral contre renonciation au contenu numérique ou au service numérique."}
                </P>
              </Encadre>
            </Sub>

            <Sub title="13.2. Services numériques fournis en continu pendant une durée déterminée">
              <Encadre label="Information sur la garantie légale de conformité des services numériques fournis en continu pendant une durée déterminée">
                <P>
                  {"Pour les questionnaires numériques accessibles dans le cadre de RECONNECT, la période contractuelle de fourniture retenue est celle des 13 semaines du parcours."}
                </P>
                <P>
                  {"Le consommateur a droit à la mise en œuvre de la garantie légale de conformité en cas d'apparition d'un défaut de conformité durant la période de fourniture de 13 semaines. Durant cette période, le consommateur n'est tenu d'établir que l'existence du défaut de conformité et non la date d'apparition de celui-ci."}
                </P>
                <P>
                  {"La garantie légale de conformité emporte obligation de fournir toutes les mises à jour nécessaires au maintien de la conformité du contenu numérique ou du service numérique durant cette période."}
                </P>
                <P>
                  {"La garantie légale de conformité donne au consommateur droit à la mise en conformité du contenu numérique ou du service numérique sans retard injustifié suivant sa demande, sans frais et sans inconvénient majeur pour lui."}
                </P>
                <P>
                  {"Le consommateur peut obtenir une réduction du prix en conservant le contenu numérique ou le service numérique, ou il peut mettre fin au contrat en se faisant rembourser intégralement contre renoncement au contenu numérique ou au service numérique, si :"}
                </P>
                <Numbered items={NON_CONFORMITE_CAS} />
                <P>
                  {"Le consommateur a également droit à une réduction du prix ou à la résolution du contrat lorsque le défaut de conformité est si grave qu'il justifie que la réduction du prix ou la résolution du contrat soit immédiate. Le consommateur n'est alors pas tenu de demander la mise en conformité du contenu numérique ou du service numérique au préalable."}
                </P>
                <P>
                  {"Dans les cas où le défaut de conformité est mineur, le consommateur n'a droit à l'annulation du contrat que si le contrat ne prévoit pas le paiement d'un prix."}
                </P>
                <P>
                  {"Toute période d'indisponibilité du contenu numérique ou du service numérique en vue de sa remise en conformité suspend la garantie qui restait à courir jusqu'à la fourniture du contenu numérique ou du service numérique de nouveau conforme."}
                </P>
                <P>
                  {"Ces droits résultent de l'application des articles L. 224-25-1 à L. 224-25-31 du Code de la consommation."}
                </P>
                <P>
                  {"Le professionnel qui fait obstacle de mauvaise foi à la mise en œuvre de la garantie légale de conformité encourt une amende civile d'un montant maximal de 300 000 euros, qui peut être porté jusqu'à 10 % du chiffre d'affaires moyen annuel (article L. 242-18-1 du Code de la consommation)."}
                </P>
                <P>
                  {"Le consommateur bénéficie également de la garantie légale des vices cachés en application des articles 1641 à 1649 du Code civil, pendant une durée de deux ans à compter de la découverte du défaut. Cette garantie donne droit à une réduction de prix si le contenu numérique ou le service numérique est conservé, ou à un remboursement intégral contre renonciation au contenu numérique ou au service numérique."}
                </P>
              </Encadre>
            </Sub>

            <Sub title="13.3. Mise en œuvre des garanties">
              <P>
                {"Le professionnel responsable des garanties légales est La vie en HD, dont les coordonnées sont indiquées à "}
                <ArticleLink n={12}>{"l'article 12"}</ArticleLink>
                {" des présentes CGV."}
              </P>
              <P>
                {"Pour toute demande relative à ces garanties, le client peut contacter La vie en HD aux coordonnées indiquées dans cet article."}
              </P>
            </Sub>
          </Article>

          <Article id="article-14" title="Article 14 : Médiation de la consommation">
            <P>
              {"En cas de litige, le client est invité à contacter préalablement La vie en HD afin de rechercher une solution amiable."}
            </P>
            <P>
              {"Conformément aux dispositions du Code de la consommation concernant « le processus de médiation des litiges de la consommation », après avoir sollicité La vie en HD et à défaut de réponse le satisfaisant, le client a la possibilité de recourir gratuitement à une procédure de médiation de la consommation auprès de :"}
            </P>
            <P>
              {"CM2C\n49 rue de Ponthieu\n75 008 PARIS\nTel : 01 89 47 00 14\nSite internet : "}
              <a
                href="https://www.cm2c.net/declarer-un-litige.php"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} break-all`}
              >
                https://www.cm2c.net/declarer-un-litige.php
              </a>
              {"\nMail : "}
              <Mail address="litiges@cm2c.net" />
            </P>
            <P>
              {"Le client peut saisir le médiateur dans les conditions prévues par la réglementation applicable."}
            </P>
          </Article>

          <Article id="annexe" title="Annexe : Modèle de formulaire de rétractation">
            <P>
              <a
                href={FORMULAIRE_RETRACTATION_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Consulter et télécharger le formulaire type de rétractation (PDF)
              </a>
            </P>
          </Article>
        </div>

        <p className="mt-12 font-sans text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          Dernière mise à jour : 23 octobre 2026
        </p>
      </div>
    </section>
  );
}
