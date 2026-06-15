# La vie en HD, suivi des modifications, V3

Document de suivi du site pour la construction de la V3.
Dernière mise à jour : 15 juin 2026.

---

## En bref

On construit la V3 ensemble, à partir de tes retours sur la V2. Ce document récapitule, sans jargon, ce qui vient d'être fait et ce qu'on prépare ensuite.

---

## Déjà réalisé pour la V3

**Identité visuelle**
- Nouvelle police "Breathing" : "La vie en HD" apparaît maintenant en haut à gauche, juste au-dessus de "Marion Chartier", dans cette écriture. Et l'ancienne police script (TAN Songbird) a été remplacée par Breathing sur tout le site (titres, accroches), pour un rendu plus doux et élégant.

**Quiz gratuits**
- Tes 2 quiz (le lieu de vie/de travail idéal, et l'alignement vie pro) sont intégrés au site, exactement avec le design que tu as créé. Ils sont regroupés sous une nouvelle page "Quiz gratuits", accessible depuis l'accueil et depuis le menu "Mes offres".
- Le mot "HD" n'apparaît pas dans le nom du quiz environnement, pour garder la surprise jusqu'à la fin, comme tu le souhaitais.
- Les boutons à la fin des quiz sont branchés sur les bonnes pages d'offres du site : le quiz environnement renvoie vers The Place to be, et le quiz pro renvoie vers Inside, Reveal, Fleur de Talents Innés ou Reconnect selon le profil du visiteur (la logique que tu avais définie dans tes quiz est respectée à l'identique). Chaque visiteur arrive donc sur la page qui décrit l'offre, avant de passer au paiement.
- La récupération des emails est en place : quand quelqu'un termine un quiz, son prénom et son email partent directement dans ton systeme.io, avec le bon tag selon le quiz ("Quiz - Lieu idéal" pour l'environnement, "Quiz - Alignement pro" pour l'alignement). Tu as créé les formulaires côté systeme.io, et je les ai reliés aux quiz.
- Il reste une seule chose pour finaliser ce volet : l'outil de statistiques type Clarity, pour suivre qui répond, quand, et comment.

**Instagram**
- Ton flux Instagram en direct est branché : tes vrais derniers posts s'affichent automatiquement sur la page d'accueil (via Behold).

**Page d'accueil**
- Section "Bienvenue chez toi" : les logos The Place to be, Inside, Reveal et Blooming (Fleur de Talents) ont été agrandis et recentrés pour un meilleur équilibre.
- La carte Blooming renvoie directement vers ta page de vente Blooming (pas besoin de passer par la page de description).
- Bandeau The Soul Letter : remplacé par ta version haute qualité (dorée), bien nette en pleine largeur.
- Ta photo (marion_home) a été ajoutée en filigrane discret en fond de l'accueil.
- Transit solaire : voir ci-dessous, désormais branché sur ton Google Sheet.

**Transit solaire (et phases lunaires)**
- Le bandeau "Transit solaire actuel" est maintenant branché en direct sur le Google Sheet que tu remplis. Le site affiche automatiquement la ligne dont la période contient la date du jour (porte, nom, période, phase lunaire, message). Tu ajoutes ou modifies des lignes dans la feuille, et ça se met à jour tout seul sur le site, sans rien me redemander.

**Oracle du jour**
- L'oracle (un message au hasard à chaque clic) lit en direct ton Google Sheet de messages. Il a été déplacé dans la page "Qui suis-je", juste après tes valeurs, avec ta petite intro ("...et j'adooore aussi les oracles..."). Tu gères les messages depuis la feuille.

**Page de vente Blooming (Fleur de Talents Innés)**
- Ta page de vente Blooming est intégrée au site avec son design d'origine. Tous les boutons du site qui mènent à l'offre Fleur de Talents Innés pointent désormais vers cette page de vente.

**Offres**
- Le quiz s'appelle désormais "Quiz - Ton lieu de vie/de travail idéal" (sans "HD"), et son bouton est passé à "Explorer".
- Reveal : le verbe d'action est passé à "Clarifier".
- Frise en haut de "Mes offres" : les verbes d'action sont ajoutés en italique au-dessus de chaque étape, et les noms "The Place to be" et "Fleur de Talents Innés" sont corrigés.
- Le menu déroulant "Mes offres" se referme bien quand on clique sur une offre.

**Qui suis-je**
- Nuage de mots-clés : remplacé par tes 27 valeurs.
- Fun fact : ton vrai texte (la découverte du Human Design grâce à la nounou).

**Bas de page**
- "Me contacter" (avec une petite icône) et "Me rejoindre sur Instagram".

---

## Ce qu'on construit ensuite

- **Quiz gratuits** : il reste à installer les stats (Clarity). L'intégration des 2 quiz, les liens des boutons de fin et la récupération des emails vers ton systeme.io sont déjà faits.
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

- **Licence de la police Breathing** : elle est gratuite pour un usage personnel uniquement. Il faudra prendre la licence commerciale avant la mise en ligne du site.
- **Relecture des textes** encore provisoires (FAQ, accroches) à ajuster à ta voix.
- **RGPD** : Clarity et les cookies à cadrer proprement (mention dans la politique de confidentialité + bannière de consentement).

---

## Ce qui dépend de toi

- **Pour les quiz** : il ne reste que l'ID de projet Clarity (les formulaires de capture et les tags sont faits et reliés).
- **Sécurité** : penser à régénérer ta clé API systeme.io (elle a servi le temps d'une vérification et a transité par messagerie). C'est dans tes réglages systeme.io, rubrique API.
- **Remplir et tenir à jour tes Google Sheets** : celui des transits solaires (avec les phases lunaires) et celui des messages de l'oracle. Le site s'y branche en direct.
- Les **textes définitifs** (accroches, présentation Qui suis-je, descriptifs des offres si tu veux les retravailler).
- Le réglage des **couleurs du calculateur**, depuis ton compte Bodygraphchart.
- La **régularisation de la licence Breathing** avant la mise en ligne.
