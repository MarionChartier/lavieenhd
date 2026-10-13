import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment tes données personnelles sont collectées, utilisées et protégées sur le site La vie en HD.",
};

const CONTACT = "hello@marionchartier-lavieenhd.com";

export default function ConfidentialitePage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      updatedAt="Dernière mise à jour : 13 octobre 2026"
      sections={[
        {
          heading: "1. Responsable du traitement",
          body: [
            "Les données personnelles collectées dans le cadre de l'utilisation du site La vie en HD, des inscriptions, des achats et des prestations proposées sont traitées sous la responsabilité de Marion Chartier, entrepreneure individuelle exerçant sous le nom commercial La vie en HD.",
            "Ses coordonnées professionnelles figurent dans les Mentions légales du site.",
            `Pour toute question relative au traitement de tes données personnelles, tu peux écrire à : ${CONTACT}.`,
          ],
        },
        {
          heading: "2. Données collectées",
          body: "Selon ton utilisation du site La vie en HD et des services proposés, les catégories de données personnelles suivantes peuvent être collectées :",
          items: [
            "Données d'identification et de contact : nom, prénom, adresse e-mail, adresse postale et, le cas échéant, numéro de téléphone, notamment lors d'une inscription, d'un achat, d'une prise de rendez-vous ou d'une demande de contact.",
            "Données de commande et de facturation : informations nécessaires à la gestion des achats, des paiements et des factures.",
            "Données d'état civil et de naissance : prénom(s), nom(s) de famille, nom de naissance, nom d'adoption et, le cas échéant, autres noms utilisés, ainsi que la date, l'heure et le lieu de naissance, lorsque ces informations sont nécessaires à la réalisation d'analyses personnalisées, notamment en Human Design et en Numérologie.",
            "Réponses aux quiz et questionnaires : informations communiquées dans les quiz du site, les questionnaires du parcours RECONNECT et les autres supports d'exploration proposés. Les réponses aux questionnaires RECONNECT sont conservées dans le compte Tally utilisé par La vie en HD.",
            "Informations liées aux accompagnements : éléments partagés lors des échanges, séances de coaching ou prestations personnalisées, ainsi que les documents et supports nécessaires à leur réalisation. Certaines réponses ou informations communiquées peuvent relever de catégories particulières de données personnelles au sens du RGPD. Leur traitement est soumis aux conditions et garanties légales applicables.",
            "Enregistrements des séances : enregistrements audio ou vidéo réalisés dans le cadre des prestations prévoyant la transmission d'un replay, selon les modalités communiquées au client.",
            "Données de navigation : informations relatives à l'utilisation du site et à la mesure d'audience, notamment par l'intermédiaire des cookies et outils de suivi, dans les conditions précisées dans la rubrique « Cookies ».",
          ],
        },
        {
          heading: "3. Finalités du traitement des données",
          body: "Les données personnelles collectées par La vie en HD sont utilisées, selon les situations, pour les finalités suivantes :",
          items: [
            "Répondre aux demandes de contact et aux questions adressées à La vie en HD.",
            "Permettre la participation aux quiz et transmettre les résultats correspondants.",
            "Gérer les inscriptions, commandes, paiements et factures.",
            "Organiser les rendez-vous et assurer le suivi des prestations.",
            "Réaliser les analyses personnalisées en Human Design, Numérologie et autres approches proposées dans le cadre des prestations.",
            "Permettre la participation aux parcours d'accompagnement, notamment RECONNECT, et assurer l'accès aux questionnaires et aux ressources associés.",
            "Préparer, réaliser et assurer le suivi des séances de coaching et des accompagnements individuels.",
            "Enregistrer les séances lorsque cela est prévu dans la prestation, afin de transmettre les replays aux clients concernés.",
            "Communiquer les informations nécessaires au bon déroulement des prestations.",
            "Adresser des communications commerciales, des actualités ou des offres, lorsque les conditions légales applicables sont réunies.",
            "Assurer le fonctionnement, la sécurité et l'amélioration du site, ainsi que la mesure de son audience, dans le respect des règles applicables aux cookies et autres traceurs.",
            "Respecter les obligations légales, notamment comptables et fiscales.",
          ],
        },
        {
          heading: "4. Bases légales des traitements",
          body: "Selon la finalité poursuivie, les traitements de données personnelles réalisés par La vie en HD reposent sur les bases légales suivantes :",
          items: [
            "L'exécution d'un contrat ou de mesures précontractuelles : pour gérer les commandes, inscriptions, rendez-vous, prestations, analyses personnalisées, accompagnements et transmissions des contenus prévus.",
            "Le consentement : notamment pour l'envoi de communications commerciales lorsque celui-ci est requis, l'utilisation de cookies non essentiels et certains traitements spécifiques nécessitant un accord préalable.",
            "Le respect d'obligations légales : notamment pour la facturation, la comptabilité et la conservation des documents obligatoires.",
            "L'intérêt légitime de La vie en HD : notamment pour répondre aux demandes générales, assurer la sécurité du site et améliorer ses services, sous réserve du respect des droits et libertés des personnes concernées.",
          ],
          after: [
            "Données sensibles : certains questionnaires ou échanges réalisés dans le cadre des accompagnements peuvent conduire à communiquer des informations relevant de catégories particulières de données personnelles au sens de l'article 9 du RGPD.",
            "Lorsque leur traitement est nécessaire et repose sur le consentement explicite de la personne concernée, celui-ci est recueilli préalablement. Les personnes sont invitées à ne pas communiquer de données sensibles qui ne seraient pas nécessaires à leur accompagnement.",
          ],
        },
        {
          heading: "5. Destinataires des données et outils utilisés",
          body: [
            "Les données personnelles collectées par La vie en HD sont accessibles à Marion Chartier, dans la mesure nécessaire à la gestion de son activité et à la réalisation des prestations proposées.",
            "Certaines données peuvent également être traitées par des prestataires techniques intervenant dans le fonctionnement du site et des services proposés, notamment :",
          ],
          items: [
            "Outils de gestion des contacts et des communications : gestion des inscriptions, des contacts et des échanges par e-mail.",
            "Plateformes de formulaires et de questionnaires : collecte et conservation des informations et réponses transmises dans le cadre des prestations.",
            "Outils de prise de rendez-vous : organisation et gestion des réservations de séances.",
            "Prestataires de paiement : traitement sécurisé des transactions.",
            "Outils de visioconférence et d'enregistrement : organisation des séances à distance et réalisation des replays lorsqu'ils sont prévus dans les prestations.",
            "Prestataires d'hébergement : hébergement et fonctionnement technique du site internet.",
          ],
          after: [
            "Ces prestataires interviennent dans le cadre de leurs missions respectives, conformément aux règles applicables en matière de protection des données personnelles.",
            "Les données personnelles ne sont pas vendues à des tiers.",
            "Certains prestataires techniques peuvent être amenés à traiter des données personnelles en dehors de l'Espace économique européen, notamment aux États-Unis.",
            "Lorsque de tels transferts ont lieu, ils sont encadrés par les mécanismes de protection prévus par la réglementation applicable, notamment les décisions d'adéquation de la Commission européenne ou les clauses contractuelles types, selon les situations.",
            "Pour obtenir davantage d'informations sur les garanties applicables à ces transferts, tu peux contacter La vie en HD à l'adresse indiquée dans la présente politique.",
          ],
        },
        {
          heading: "6. Durées de conservation des données",
          body: [
            "La vie en HD conserve les données personnelles pendant une durée adaptée aux finalités pour lesquelles elles ont été collectées, sous réserve des obligations légales de conservation applicables.",
            "Les durées de conservation sont les suivantes :",
          ],
          items: [
            "Demandes de contact : les données sont conservées pendant le temps nécessaire au traitement de la demande et à son éventuel suivi.",
            "Données relatives aux clients et aux prestations : elles sont conservées pendant la relation contractuelle, puis, si nécessaire, pendant les délais légaux applicables à la gestion des réclamations ou à la défense des droits de La vie en HD.",
            "Documents comptables et justificatifs de facturation : ils sont conservés pendant 10 ans, conformément aux obligations légales applicables.",
            "Réponses aux questionnaires : elles sont conservées pendant toute la durée de la prestation ou du parcours concerné, puis pendant 6 mois après sa fin.",
            "Données utilisées pour les communications commerciales : elles sont conservées jusqu'au retrait du consentement ou à l'opposition de la personne concernée, dans la limite des durées légalement applicables.",
            "Enregistrements des séances : les replays sont mis à disposition des clients jusqu'à 30 jours après la date de la séance concernée, quelle que soit la date de transmission du lien d'accès. Les enregistrements sont ensuite supprimés, sous réserve des délais techniques de suppression propres à la plateforme utilisée.",
            "Données de navigation et cookies : leurs durées de conservation dépendent de leur nature et des règles applicables aux outils utilisés.",
          ],
          after: [
            "À l'issue des durées applicables, les données sont supprimées, anonymisées ou archivées lorsque leur conservation reste nécessaire pour respecter une obligation légale ou défendre un droit.",
            "Toute personne peut obtenir davantage d'informations sur la conservation de ses données en contactant La vie en HD à l'adresse indiquée dans la présente politique.",
          ],
        },
        {
          heading: "7. Sécurité et confidentialité des données",
          body: [
            "La vie en HD veille à préserver la confidentialité et la sécurité des données personnelles collectées dans le cadre de son activité.",
            "Des mesures techniques et organisationnelles adaptées sont mises en œuvre afin de limiter les risques d'accès non autorisé, de divulgation, de modification, de perte ou de destruction des données.",
            "L'accès aux données personnelles est limité aux personnes et prestataires qui en ont besoin pour assurer le fonctionnement des services et la réalisation des prestations proposées.",
            "La vie en HD s'appuie également sur des prestataires techniques disposant de leurs propres dispositifs de sécurité et de protection des données.",
            "Malgré les précautions mises en place, aucun système informatique ne peut garantir une sécurité absolue.",
            "En cas de violation de données personnelles, La vie en HD applique les procédures prévues par la réglementation en vigueur, notamment en matière de notification aux autorités compétentes et d'information des personnes concernées lorsque cela est nécessaire.",
          ],
        },
        {
          heading: "8. Droits des personnes concernant leurs données personnelles",
          body: "Conformément à la réglementation applicable en matière de protection des données personnelles, toute personne dispose, selon les conditions prévues par le RGPD, des droits suivants :",
          items: [
            "Droit d'accès : obtenir des informations sur les données personnelles la concernant et en demander une copie.",
            "Droit de rectification : demander la correction de données inexactes ou incomplètes.",
            "Droit à l'effacement : demander la suppression de ses données personnelles lorsque les conditions légales sont réunies.",
            "Droit à la limitation du traitement : demander, dans certaines situations, la suspension temporaire de l'utilisation de ses données.",
            "Droit d'opposition : s'opposer à certains traitements de ses données personnelles, notamment à des fins de prospection commerciale.",
            "Droit à la portabilité : recevoir certaines données personnelles dans un format structuré et couramment utilisé, ou demander leur transmission à un autre responsable du traitement lorsque cela est applicable.",
            "Droit de retirer son consentement : retirer à tout moment un consentement précédemment donné, sans remettre en cause la licéité des traitements effectués avant ce retrait.",
          ],
          after: [
            `Pour exercer ces droits ou poser toute question relative à ses données personnelles, il suffit de contacter La vie en HD à l'adresse suivante : ${CONTACT}.`,
            "La vie en HD répond aux demandes dans les délais prévus par la réglementation applicable, en principe dans un délai d'un mois à compter de leur réception.",
            "En cas de difficulté ou de désaccord concernant le traitement de ses données personnelles, toute personne peut introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés (CNIL), sur le site www.cnil.fr.",
          ],
        },
        {
          heading: "9. Cookies et traceurs",
          body: [
            "Le site La vie en HD peut utiliser des cookies et autres traceurs nécessaires à son fonctionnement, ainsi que des outils permettant de mesurer son audience et d'améliorer l'expérience des visiteurs.",
            "Les cookies strictement nécessaires au fonctionnement du site peuvent être utilisés sans consentement préalable, conformément à la réglementation applicable.",
            "Les cookies et traceurs non essentiels, notamment ceux utilisés à des fins de mesure d'audience non exemptée ou de publicité, ne sont déposés qu'après avoir recueilli le consentement du visiteur.",
            "Lorsque ce consentement est requis, le visiteur peut accepter ou refuser les cookies concernés et modifier son choix à tout moment grâce au dispositif de gestion des cookies mis à sa disposition sur le site.",
            "Pour davantage d'informations sur les cookies utilisés, leurs finalités et leurs durées de conservation, le visiteur peut consulter les informations fournies par le dispositif de gestion des cookies du site.",
          ],
        },
        {
          heading: "10. Mise à jour de la politique de confidentialité",
          body: [
            "La vie en HD se réserve la possibilité de modifier la présente Politique de confidentialité afin de tenir compte des évolutions de ses activités, de ses services, de ses outils ou de la réglementation applicable.",
            "La version en vigueur est celle publiée sur le site internet La vie en HD.",
            "La date de dernière mise à jour est indiquée ci-dessous.",
          ],
        },
      ]}
    />
  );
}
