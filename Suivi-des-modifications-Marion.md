# La vie en HD, suivi des modifications, V4

Document de suivi du site pour la construction de la V4.
Dernière mise à jour : 1er juillet 2026.

---

## En bref

On passe en V4 : l'objectif est de préparer le site à sa mise en ligne "pour de vrai" (conformité, rapidité, mesure d'audience, référencement, puis nom de domaine). Ce document récapitule, sans jargon, ce qui vient d'être fait et ce qu'on prépare ensuite. On l'enrichit au fur et à mesure.

---

## Déjà réalisé pour la V4

**Confidentialité et cookies (RGPD)**
- Un bandeau de consentement apparaît en bas de page, sur toute la largeur, dans le style du site (le même fond aquarelle que la bordure du header). Il propose deux boutons de même importance, "Tout refuser" et "Tout accepter" (conforme aux règles CNIL, sans bouton piège), et un petit lien discret vers la politique de confidentialité.
- Aucun cookie de mesure n'est posé tant que la personne n'a pas accepté. Un lien "Gérer les cookies" en bas de page permet de revenir sur son choix à tout moment.
- Les pages légales ont été rédigées avec des textes conformes : Mentions légales, Politique de confidentialité et CGV. Quelques informations restent à compléter avec tes données (voir "Ce qui dépend de toi"). La date de mise à jour est au 1er juillet 2026.

**Mesure d'audience (Microsoft Clarity)**
- L'outil Clarity a été intégré sur tout le site pour que tu puisses observer le comportement des visiteurs (pages vues, clics, parcours, enregistrements de sessions). Il ne se déclenche que si la personne a accepté les cookies. Il s'activera dès que tu m'auras transmis l'identifiant de ton compte Clarity.

**Rapidité du site (images allégées)**
- Les images des pages de vente ont été converties dans un format plus léger (WebP) : au total, elles passent d'environ 3,2 Mo à 1 Mo, soit trois fois moins lourd, sans perte de qualité visible. Le site se charge donc plus vite. Les images d'origine sont conservées en secours pour les navigateurs plus anciens.

**Référencement (SEO)**
- Le site a été préparé pour être bien compris par Google : un titre et une description propres à chaque page, une image et des informations pour un bel aperçu quand on partage un lien sur les réseaux, un plan du site (sitemap) et un fichier d'instructions pour les moteurs de recherche, et une fiche décrivant ton activité. Un audit complet avec les outils en ligne (vitesse, SEO, accessibilité) sera fait une fois le site en ligne.

**Préparation de la mise en ligne**
- On prépare le déploiement en deux temps : d'abord sur mon espace pour tout valider, puis bascule sur ton propre compte d'hébergement (Vercel) avec ton nom de domaine, afin que tu en gardes la pleine maîtrise. Le code du projet reste de mon côté pour que je puisse continuer à faire les évolutions.

---

## Ce qu'on construit ensuite

Priorité V4 (mise en ligne) :
- **Mise en ligne du site** sur mon espace pour tout valider, puis **audit complet en ligne** (vitesse, SEO, accessibilité) sur cette adresse.
- **Bascule sur ton compte Vercel + nom de domaine**, en toute fin, une fois tout stable.

Reste à faire (contenus et finitions) :
- **Quiz environnement** : tester une autre couleur.
- **Descriptifs des offres + libellés de boutons** repris de ton magasin systeme.io.
- **Témoignages mis en valeur** (pastille de l'offre d'origine, style téléphone et petits mots), reprise des FAQ et témoignages systeme.io (The Place to be, Inside, Reveal), plus les nouveaux audios (Reveal) et messages reçus en DM.
- **Photos en filigrane** plus dynamiques sur l'ensemble du site.
- **Couleurs du calculateur** harmonisées (réglage depuis ton compte Bodygraphchart).
- **Police des sous-titres d'offres** à revoir si tu la trouves encore peu lisible.

---

## Décisions déjà prises

- La barre de navigation reste visible en permanence quand on défile (ton choix).
- Header : bandeau blanc flottant, entouré d'une fine bordure aquarelle (violet/cyan/doré), aux coins arrondis. Recréé directement en code, ajustable à volonté.
- Reveal : verbe d'action "Clarifier".
- Quiz : intégrés en pages autonomes (ton design 100% préservé).

---

## Points de vigilance

- **Relecture des textes** encore provisoires (FAQ, accroches) à ajuster à ta voix.
- **RGPD** : le bandeau de consentement, les cookies et les pages légales sont en place. Il reste à compléter quelques informations légales avec tes données (voir ci-dessous).

---

## Ce qui dépend de toi

Au fil de l'eau :
- **Remplir et tenir à jour tes Google Sheets** : celui des transits solaires (avec les phases lunaires) et celui des messages de l'oracle. Le site s'y branche en direct.
- Les **textes définitifs** (accroches, présentation Qui suis-je, descriptifs des offres si tu veux les retravailler).
- Le réglage des **couleurs du calculateur**, depuis ton compte Bodygraphchart.
- **The Soul Letter, tag d'inscription** : tu voulais qu'un tag soit posé sur les personnes qui s'inscrivent. Ce tag se crée dans ton systeme.io (Automatisations → Workflow "Funnel form subscribed" sur le formulaire Soul Letter → action "Add tag"). Une fois fait, on testera une inscription pour vérifier que le tag s'applique bien. Si besoin, on basculera sur l'iframe officielle systeme.io.

Au moment de la mise en ligne finale (je te le redemanderai en temps voulu, tout en dernier) :
- **Clarity** : créer un projet sur clarity.microsoft.com et me transmettre l'identifiant, pour activer la mesure d'audience.
- **Informations légales** pour compléter les pages : statut (micro-entreprise ou autre), adresse, numéro SIRET, mention TVA, durées de conservation des données, et coordonnées d'un médiateur de la consommation.
- **Nom de domaine** choisi, et accès pour le brancher.
- **Compte Vercel** (l'hébergement) et ton identifiant GitHub, pour te transférer le projet en gardant la main sur les évolutions.
