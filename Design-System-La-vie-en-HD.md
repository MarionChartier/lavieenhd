# Design System — La vie en HD

> Référence visuelle du site vitrine de Marion Chartier (Next.js + Tailwind v4).
> But : retravailler les pages HTML fournies par Marion pour qu'elles s'intègrent
> visuellement au site (cohérence + fluidité).
>
> Les pages HTML de Marion n'ont pas Tailwind : ce document donne donc les
> **valeurs brutes (hex, px, CSS)** en plus des classes du site, et un bloc
> `:root` prêt à coller.

---

## 0. Bloc de variables à coller (pages HTML)

À placer dans le `<head>` ou en haut du `<style>` de chaque page HTML de Marion,
pour disposer des mêmes jetons que le site.

```css
:root {
  /* Couleurs */
  --ink-deep: #503c62;      /* texte principal, titres, boutons pleins */
  --ink: #766488;           /* texte courant secondaire */
  --ink-soft: #9784aa;      /* labels, légendes, méta */
  --ink-lilac: #bea4d8;     /* accent violet doux */
  --turquoise: #75ced2;     /* accent signature, liens, survols */
  --turquoise-soft: #dbeef4;
  --beige: #c1ad8d;         /* accent doré (Soul Letter, offre gratuite) */
  --beige-soft: #decdad;
  --beige-paper: #f5ecdb;
  --sage: #b8c8b8;
  --sage-soft: #d8e0d6;
  --paper: #fdfbf7;         /* fond crème très clair */
  --line: #e8dff0;          /* bordures fines lilas */
  --dark: #1c1424;

  /* Violets profonds lisibles (texte sur fond clair coloré) */
  --violet-readable: #5e3aa6;

  /* Typo */
  --font-display: "Cormorant Garamond", "Times New Roman", serif;
  --font-script: "Breathing", "Cormorant Garamond", cursive;
  --font-sub: "Rebel", "Cormorant Garamond", serif;
  --font-body: "Luciole", "Inter", system-ui, sans-serif;
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Layout */
  --container: 1280px;
  --container-text: 620px;  /* largeur de lecture confortable */

  /* Rayons */
  --radius-card: 6px;       /* cartes "carte papier" (rounded-md) */
  --radius-soft: 28px;      /* cartes modernes (quiz, piliers) */
  --radius-pill: 9999px;    /* boutons */

  /* Ombres */
  --shadow-card: 0 16px 40px -20px rgba(80, 60, 98, 0.16);
  --shadow-card-hover: 0 24px 48px -24px rgba(80, 60, 98, 0.18);
  --shadow-soft: 0 18px 44px -26px rgba(80, 60, 98, 0.28);
  --shadow-soft-hover: 0 34px 64px -28px rgba(80, 60, 98, 0.32);
  --shadow-simu: 0 30px 70px -30px rgba(80, 60, 98, 0.18);
}
```

---

## 1. Couleurs

### Palette principale

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Texte / titres | ink-deep | `#503c62` | Couleur de texte par défaut, titres, boutons pleins |
| Texte courant | ink | `#766488` | Paragraphes secondaires |
| Labels / méta | ink-soft | `#9784aa` | Eyebrows, légendes, copyright |
| Accent violet | ink-lilac | `#bea4d8` | Accents doux, blobs, icônes |
| **Accent signature** | turquoise | `#75ced2` | Liens, survols, mots mis en valeur, "HD" |
| Accent doré | beige | `#c1ad8d` | Soul Letter, offre gratuite |

### Fonds

- **Blanc** `#ffffff` — fond par défaut de la majorité des sections.
- **Paper** `#fdfbf7` — crème très clair (sections douces).
- **Texture sage** (`.bg-texture-sage`) — vert d'eau avec motif botanique discret (Manifeste).
- **Texture beige** (`.bg-texture-beige`) — papier doré avec motif botanique.
- **Dégradé lavande** (`.bg-lavender-gradient`) — `linear-gradient(180deg,#fbf8fd 0%,#f5eef9 100%)`.

### Fonds de section par couleur d'offre (soft)

| Couleur | Fond section | Puce (bullet) |
|---|---|---|
| free (doré) | `#efe2c6` | `#b89a5b` |
| violet | `#e6dcef` | `#503c62` |
| turquoise | `#d6e8ea` | `#75ced2` |
| beige | `#ecdfc5` | `#a08b6c` |

### Dégradés signature (cartes modernes)

```css
/* Carte turquoise */
background: linear-gradient(155deg, #e4f4f5 0%, #ffffff 62%);
/* Carte violette */
background: linear-gradient(155deg, #efe8f8 0%, #ffffff 62%);
/* Carte dorée (fun fact / "ce que tu reçois") */
background: linear-gradient(160deg, #f8efd6 0%, #ecd6a6 100%);
```

> **Règle de lisibilité** : sur un fond clair coloré, le texte coloré utilise un
> violet plus foncé `#5e3aa6` (jamais le lilac clair, illisible).

---

## 2. Typographie

Cinq familles, chacune avec un rôle **strict**. Ne pas multiplier les polices dans
un même bloc : c'est la première cause d'incohérence.

| Famille | Police | Poids | Rôle |
|---|---|---|---|
| **display** | Cormorant Garamond | 300–600 + italic | Titres, sous-titres, citations, corps "élégant" |
| **script** | Breathing | 400 | Wordmark, grands titres décoratifs ("Bienvenue chez toi") — **avec parcimonie** |
| **sub** | Rebel | 400 | Sous-titres spéciaux (rare) |
| **body** | Luciole | **700 only** | Micro-labels MAJUSCULES (eyebrows, boutons, méta). Toujours gras. |
| **sans** | système | 400 | Corps de texte discret/lisible non-gras (descriptions, listes) |

### Règles d'or

- **Luciole est gras-only.** Ne jamais l'utiliser pour du corps de texte : réservée
  aux micro-labels en MAJUSCULES avec letter-spacing large.
- **Corps de texte lisible et discret → `font-sans` (système), poids 400.**
  C'est le choix par défaut pour descriptions, listes, FAQ.
- **Corps de texte "élégant" → Cormorant (display), souvent `font-light` + `italic`.**
  Pour les phrases-manifeste, citations, leads.
- **Breathing** : uniquement les grands titres décoratifs et le wordmark. Jamais en
  petit, jamais pour un paragraphe.
- **Accent dans un titre** : mot en `italic` + couleur turquoise.
  Ex. `Découvre ton schéma <em class="italic" style="color:var(--turquoise)">Human Design</em>.`

### Échelle de tailles (px, format mobile → desktop)

| Élément | Mobile | Desktop | Police | Notes |
|---|---|---|---|---|
| H1 page | 45 | 78 | display, light | leading très serré (0.95) |
| H1 hero accueil | 26 | 44 | script | wordmark |
| Titre section | 28 | 56 | display, light | manifeste/grandes phrases |
| Titre section std | 28 | 40 | display, light | |
| Titre de carte | 26 | 32 | display ou script | |
| Sous-titre / lead | 18 | 22 | display, italic | citations entre « » |
| Corps élégant | 16 | 18 | display, light | leading-relaxed |
| Corps discret | 14 | 15 | sans, normal | descriptions, listes |
| Eyebrow / label | 10–11 | 10–11 | body (Luciole) | UPPERCASE, tracking 0.22–0.28em |
| Bouton | 11–12 | 11–12 | body (Luciole) | UPPERCASE, tracking 0.18–0.22em |
| Méta carte | 11 | 11 | body | UPPERCASE, tracking 0.2em |

- Corps de texte global : `font-size: 15px; line-height: 1.6; letter-spacing: 0.01em;`
- Titres : `font-weight: 400` par défaut (le design veut du léger partout), `margin: 0`.

### Citations

Toujours encadrées de guillemets français avec espaces insécables :
`«&nbsp;…&nbsp;»`, en Cormorant italic.

---

## 3. Layout & espacement

- **Conteneur max** : `1280px` (`--container`), centré, padding latéral
  `24px` mobile / `80px` desktop (`px-6 md:px-20`).
- **Largeur de lecture** : ~`480–620px` pour les blocs de texte (`max-w-[480px]` …
  `max-w-[620px]`).
- **Padding vertical de section** : `64px` mobile / `96–128px` desktop
  (`py-16 md:py-24` … `py-32`). Sections compactes : `py-14 md:py-20`.
- **Grilles** : 2 colonnes desktop fréquentes (`lg:grid-cols-2`, gap `48–80px`),
  cartes en `md:grid-cols-2/3`, gap `24–32px`.
- **Alternance** : sections d'offres en quinconce (image gauche/droite alternée).

---

## 4. Rayons & ombres

### Rayons
- **Cartes "papier"** (simulateur, postcards offres) : `6px` (`rounded-md`).
- **Cartes modernes** (quiz, piliers, "ce que tu reçois") : `28px` (`rounded-[28px]`).
- **Encadrés image / oracle** : `18–32px`.
- **Boutons & champs** : `9999px` (pill).
- **Nav flottante** : `20px`.

### Ombres (toutes violettes, jamais noires)
```css
--shadow-card:       0 16px 40px -20px rgba(80,60,98,0.16);
--shadow-card-hover: 0 24px 48px -24px rgba(80,60,98,0.18);
--shadow-soft:       0 18px 44px -26px rgba(80,60,98,0.28);  /* cartes modernes */
--shadow-soft-hover: 0 34px 64px -28px rgba(80,60,98,0.32);
--shadow-simu:       0 30px 70px -30px rgba(80,60,98,0.18);  /* formulaire/encadrés */
```
Halo signature turquoise (offre vedette) :
`0 0 60px 8px rgba(117,206,210,0.55), 0 20px 50px -15px rgba(80,60,98,0.22)`.

---

## 5. Boutons

### Primaire (plein)
Fond ink-deep, texte blanc, survol → fond turquoise + texte ink-deep.
```html
<a class="btn-primary">Révéler mon message</a>
```
```css
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
  border-radius: 9999px;
  background: var(--ink-deep);
  color: #fff;
  padding: 17px 32px 15px;           /* léger sur-padding haut pour Luciole */
  font-family: var(--font-body);
  font-size: 12px; text-transform: uppercase; letter-spacing: 0.22em;
  transition: background-color .2s, color .2s;
}
.btn-primary:hover { background: var(--turquoise); color: var(--ink-deep); }
```

### Secondaire (contour)
Bordure ink-deep, fond translucide, survol → plein ink-deep.
```css
.btn-secondary {
  display: inline-flex; align-items: center; gap: .5rem;
  border: 1px solid var(--ink-deep);
  background: rgba(255,255,255,0.4);
  color: var(--ink-deep);
  border-radius: 9999px;
  padding: 12px 28px;
  font-family: var(--font-body);
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.22em;
  transition: background-color .2s, color .2s;
}
.btn-secondary:hover { background: var(--ink-deep); color: #fff; }
/* Ajouter une flèche → en fin de libellé pour les CTA "Découvrir" */
```

### Désactivé / "Bientôt disponible"
```css
.btn-disabled {
  border: 1px solid rgba(80,60,98,0.25);
  background: rgba(255,255,255,0.3);
  color: rgba(80,60,98,0.45);
  cursor: not-allowed;
  /* mêmes dimensions/typo que .btn-secondary */
}
```

### Variantes colorées (cartes)
- Turquoise : `background:var(--turquoise); color:var(--ink-deep); hover:#5cb8bc`
- Lilac : `background:var(--ink-lilac); color:#fff; hover:#8f76c0`

---

## 6. Eyebrow / labels

Petit label MAJUSCULES, souvent précédé d'un trait. Couleur ink-soft.
```html
<div class="eyebrow"><span></span>Manifeste</div>
```
```css
.eyebrow {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--font-body);
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.28em;
  color: var(--ink-soft);
}
.eyebrow > span::before,           /* trait à gauche */
.eyebrow span.bar { display:block; width:28px; height:1px; background: var(--ink-soft); }
```
Variante "méta de carte" (sans trait) : même typo, tracking `0.2em`.
Variante "discrète" (numéro + tag d'offre) : `10px`, `tracking 0.28em`,
`color: rgba(151,132,170,0.7)`, avec séparateur vertical `1px` entre numéro et tag.

---

## 7. Cartes (3 modèles)

### A. Carte moderne (référence — modèle quiz/piliers)
Le modèle le plus utilisé pour les nouveaux blocs. Dégradé doux + blob flou + survol.
```css
.card-modern {
  position: relative; isolation: isolate; overflow: hidden;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  border: 1px solid rgba(117,206,210,0.30);                  /* ou lilac/30 */
  background: linear-gradient(155deg, #e4f4f5 0%, #ffffff 62%);
  border-radius: 28px;
  padding: 36px;                                             /* md: 44px */
  box-shadow: var(--shadow-soft);
  transition: transform .3s, box-shadow .3s, border-color .3s;
}
.card-modern:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-soft-hover);
  border-color: var(--turquoise);
}
/* Blob flou en haut à droite, rogné par un clip-path arrondi dédié */
.card-modern .blob {
  position: absolute; top: -48px; right: -48px;
  width: 176px; height: 176px; border-radius: 9999px;
  background: rgba(117,206,210,0.30);
  filter: blur(40px);
  /* parent masque : clip-path: inset(0 round 28px) sur un wrapper dédié */
}
```
Titre en script ou display, méta en haut, description en Cormorant italic
(`#5e3aa6` si sur fond coloré), CTA pill en bas.

### B. Carte "papier" (postcards offres / simulateur)
```css
.card-paper {
  border: 1px solid rgba(118,100,136,0.15);
  background: #fff;
  border-radius: 6px;
  box-shadow: var(--shadow-card);   /* ou --shadow-simu pour les formulaires */
  transition: all .3s;
}
.card-paper:hover { border-color: var(--turquoise); box-shadow: var(--shadow-card-hover); }
```

### C. Carte dorée inclinée ("ce que tu reçois" / fun fact)
```css
.card-gold {
  background: linear-gradient(160deg, #f8efd6 0%, #ecd6a6 100%);
  border-radius: 28px;
  transform: rotate(-2deg);
  /* pastille/badge : cercle bg ink-deep en débord ; texte en display, puces ink-deep */
}
```

---

## 8. Champs de formulaire

```css
.field {
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 9999px;
  padding: 10px 16px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--ink-deep);
  outline: none;
  transition: border-color .2s;
}
.field::placeholder { color: rgba(80,60,98,0.45); font-family: var(--font-sans); }
.field:focus { border-color: var(--turquoise); }
```

---

## 9. Décorations & ambiance

Ce qui donne la "signature" du site (à reprendre avec parcimonie) :

- **Halos flous** : grands cercles `blur-3xl` en absolute, très faible opacité
  (`turquoise/[0.07]`, `ink-lilac/[0.12]`, `beige-soft/[0.18]`), derrière le contenu.
- **Courbes SVG fluides** : tracés fins (`stroke-width 1.3–1.4`, `opacity 0.15`),
  couleur `#9784aa`, qui traversent les sections (sensation de mouvement/chemin).
- **Blobs colorés flous** dans les cartes modernes (cf. §7-A).
- **Bordure aquarelle** : image `oracle-frame.png` en fond (nav, oracle, footer) —
  effet "bookend" haut/bas du site, voile blanc `rgba(255,255,255,0.35)` par-dessus
  pour la lisibilité.
- **Fines lignes dorées séparatrices** :
  `linear-gradient(90deg, transparent, rgba(184,151,90,0.85), transparent)`.
- **Paillettes dorées** (`header-glitter.png`) + voile blanc `60%` pour les sections
  vedettes (Quiz).
- **Images en filigrane** : `mix-blend-multiply`, `opacity 0.22`, masque dégradé sur
  les bords (silhouette Marion en arrière-plan du hero).

---

## 10. Iconographie

- SVG **trait** (`fill:none; stroke:currentColor; stroke-width:1.5; linecap/linejoin:round`).
- La couleur suit `currentColor` → se pilote via la couleur du texte.
- Style fin, géométrique, doux (soleil à rayons, fleur 8 pétales, bulle de chat,
  boussole 6 points). Pas d'icônes pleines lourdes.

---

## 11. Ton de voix (micro-copie)

- **Tutoiement** systématique, chaleureux, intime ("je t'écris comme à une amie").
- Phrases courtes, douces, ancrées dans le ressenti.
- Pas de jargon commercial agressif ; "sans bullshit, sans diffusion massive".
- **Pas de tirets longs (—) dans le texte visible** (contrainte projet).
- Accents de couleur turquoise sur 1 mot-clé par titre, pas plus.

---

## 12. Checklist d'harmonisation d'une page HTML de Marion

À passer sur chaque page fournie :

1. **Coller le bloc `:root`** (§0) et charger les 5 polices (ou au minimum
   Cormorant Garamond via Google Fonts + Luciole).
2. **Remplacer toutes les couleurs** par les variables (`--ink-deep`, `--turquoise`…).
   Supprimer le noir pur `#000` (texte → `--ink-deep`) et les ombres noires.
3. **Réassigner les polices par rôle** (§2) : titres → Cormorant light ;
   micro-labels MAJ → Luciole ; corps lisible → sans 400 ; déco → Breathing.
   Viser **2 polices max par bloc**.
4. **Uniformiser les boutons** avec `.btn-primary` / `.btn-secondary` (§5).
5. **Uniformiser les cartes** sur l'un des 3 modèles (§7), rayons `6px` ou `28px`,
   ombres violettes uniquement.
6. **Conteneur 1280px**, padding `24/80px`, largeur de lecture ≤ 620px.
7. **Rythme vertical** : `py-16 md:py-24` (ou plus) entre sections.
8. **Citations** en Cormorant italic, guillemets « » insécables.
9. **Accents turquoise** sur 1 mot par titre ; liens turquoise avec
   `underline-offset-2 hover:underline`.
10. **Ambiance** : ajouter 1–2 halos flous et/ou une fine ligne dorée si la page
    paraît "plate", sans surcharger.
11. **Tutoiement + pas de tirets longs**, relire la micro-copie.
12. **Responsive** : tester mobile (padding 24px, tailles "mobile" de l'échelle §2).

---

*Source : `app/globals.css` (@theme), `app/layout.tsx` (polices), composants
`components/sections/*`. Toute évolution du design system doit partir de ces
fichiers — ce document en est le reflet, pas la source.*
