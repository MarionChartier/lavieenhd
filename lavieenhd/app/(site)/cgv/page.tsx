import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des accompagnements proposés par Marion Chartier, La vie en HD.",
};

export default function CgvPage() {
  return (
    <LegalShell
      title="Conditions générales de vente"
      intro="Les présentes conditions régissent les prestations et accompagnements proposés par Marion Chartier. La vente et le paiement s'effectuent sur la plateforme systeme.io."
      updatedAt="Dernière mise à jour : 6 octobre 2026"
      sections={[
        {
          heading: "Article 1 : Champ d'application",
          body: "Les présentes conditions générales de vente s'appliquent à toutes les transactions conclues par le biais des sites Internet du réseau de la société La vie en HD. Est considérée comme « client » toute personne physique ou morale réalisant auprès de la société La vie en HD une commande validée via notre plateforme de paiement sécurisée.",
        },
        {
          heading: "Article 1 bis : Limitation d'âge",
          body: "Des limitations d'âge s'appliquent: La société La vie en HD n'accepte que des clients de plus de 16 ans (pour les livres numériques) et de plus de 18 ans (pour les services: coaching, ateliers, séminaires). Nous faisons de notre mieux pour restreindre l'accès à nos sites, produits et services aux mineurs. Même si le contenu de nos produits et services n'est pas de nature choquante, nous préférons nous adresser à un public mature et capable d'appréhender les implications et les responsabilités du monde de l'entreprise. Tout inscrit à la newsletter ne remplissant pas ces critères (âge supérieur à 16 ans) sera immédiatement supprimé de notre base de données dès que ce fait est porté à notre connaissance.",
        },
        {
          heading: "Article 2 : Commande",
          body: "Toute commande passée sur un site appartenant à la société La vie en HD implique l'acceptation intégrale et sans réserve des présentes conditions générales de vente.",
        },
        {
          heading: "Article 3 : Prix",
          body: "Les prix sont indiqués en euros toutes taxes comprises (au taux de TVA française en vigueur), hors frais de port et de traitement de votre commande. Le prix des articles peut être modifié à tout moment. Toutefois, le tarif appliqué à une commande sera celui annoncé au moment de la commande.",
        },
        {
          heading: "Article 4 : Paiement",
          body: "Le paiement est exigible immédiatement à la date de la commande, y compris pour les produits en précommande. Vous pouvez effectuer le règlement par carte de paiement. Les cartes émises par des banques domiciliées hors de France doivent obligatoirement être des cartes bancaires internationales (Mastercard ou Visa). Nous n'acceptons pas l'American Express. Le paiement sécurisé en ligne par carte bancaire est réalisé par l'intermédiaire de la société Stripe. Les informations transmises sont chiffrées par un logiciel dans les règles de l'art et ne peuvent être lues au cours du transport sur le réseau. Toute garantie quant à la sécurité de ce système est entièrement de la responsabilité de la société Stripe et ne saurait nous être imputée.",
        },
        {
          heading: "Article 5 : Délivrable",
          body: "Les produits numériques achetés sur notre plateforme seront délivrés par envoi à l'adresse e-mail que vous avez indiquée lors de votre commande. Par conséquent, soyez particulièrement attentifs à l'orthographe de celles-ci.",
        },
        {
          heading: "Article 6 : Protection des données personnelles",
          body: "Conformément à la Loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès et de rectification aux données personnelles vous concernant. Nous déclarons l'ensemble de nos fichiers à la Commission Nationale de l'Informatique et des Libertés. En adhérant à ces conditions générales de vente, vous reconnaissez avoir pris connaissance de notre politique de protection des données personnelles et consentez à ce que nous collections et utilisions ces données. En saisissant votre adresse email sur l'un des sites de notre réseau, vous recevrez des emails contenant des informations et/ou des offres promotionnelles concernant des produits édités par la société La vie en HD. Vous pouvez vous désinscrire à tout instant. Il vous suffit pour cela de cliquer sur le lien présent à la fin de nos emails.\n\nNotre newsletter est conforme aux règles de protection des données personnelles, et respecte la loi Informatique et Libertés.",
        },
        {
          heading: "Article 7 : Droit applicable",
          body: "Toutes les clauses figurant dans les présentes conditions générales de vente, ainsi que toutes les opérations d'achat et de vente qui y sont visées, seront soumises au droit français.",
        },
        {
          heading: "Article 8 : Droit de rétractation",
          body: "Pour les prestations de services, vous disposez d'un délai de rétractation de 14 jours à compter de la commande, sauf si la prestation a été pleinement exécutée avant la fin de ce délai. Pour toutes les prestations contenant des supports numériques (document, audio, vidéo,...) fournis dans ce délai de 14 jours, vous reconnaissez renoncer à ce droit dès lors que vous avez la possibilité d'accès au contenu.",
        },
        {
          heading: "Article 9 : Exécution et annulation",
          body: "En cas d'empêchement du client à une séance de coaching, il dispose de la possibilité de replanifier une fois le RDV. Le client s'engage à effectuer lui-même la démarche de replanification du RDV, directement depuis le lien de prise de rendez-vous CALENDLY. Cette même règle s'applique à l'organisateur.\n\nEn cas d'indisponibilité de dernière minute pour une séance de coaching, le client s'engage à informer l'organisateur avant la date et l'heure prévues de la séance de coaching, et à replanifier rapidement le RDV via le lien CALENDLY. Cette même règle s'applique à l'organisateur.\n\nSans respect de cette règle par le client, la prestation pourra être annulée par l'organisateur, sans remboursement possible.\n\nSans respect de cette règle par l'organisateur, la prestation pourra être annulée par le client, avec remboursement possible.\n\nEn cas d'empêchement de dernière minute d'un client inscrit à un soin énergétique, si celui-ci intervient au-delà du délai de rétractation, le soin aura lieu malgré tout. L'indisponibilité du client n'est pas bloquante car même si l'attention du client est ailleurs au moment du soin, l'énergie fera quand même le travail.\n\nEn cas d'empêchement de dernière minute de l'organisateur à la date prévue du soin énergétique (maladie ou autre évènement pouvant nuire au bon déroulement du soin), il sera accepté par le client que la date soit reportée dans un souci de qualité de prestation. Dans tous les cas, l'organisateur s'engage à communiquer et informer le client au plus tôt.",
        },
        {
          heading: "Article 10 : Responsabilité",
          body: "Les accompagnements proposés relèvent du développement personnel et ne constituent ni un avis médical, ni un traitement thérapeutique, ni un conseil psychologique. Ils ne se substituent pas à un suivi par un professionnel de santé.",
        },
        {
          heading: "Article 11 : Propriété intellectuelle et usage des contenus",
          id: "article-11",
          body: "Les contenus transmis dans le cadre de RECONNECT, notamment les questionnaires, exercices, textes, supports, audios et ressources, sont réservés à l'usage personnel de la participante ou du participant. Ils ne peuvent être reproduits, adaptés, diffusés, transmis, revendus ou utilisés, en totalité ou en partie, dans le cadre d'une activité personnelle ou professionnelle sans l'autorisation écrite préalable de Marion Chartier.",
        },
        {
          heading: "Article 12 : Informations sur la société La vie en HD",
          body: "La Société La vie en HD est société de droit français dont l'adresse est :\n\nMarion Chartier - La vie en HD\n\n20 chemin de Menoux\n\n74350 CERCIER\n\nEt l'adresse mail :\n\nhello@marionchartier-lavieenhd.com",
        },
      ]}
    />
  );
}
