import { describe, expect, it } from "vitest";
import { collectRefs, collectStrayRefs, toAbsolute, toRelative } from "./bundle-paths.mjs";

describe("collectRefs", () => {
  it("relève les src, srcset et url() en absolu", () => {
    const html = `
      <picture><source type="image/webp" srcset="/assets/logo.webp"/><img src="/assets/logo.png"/></picture>
      <style>@font-face{src:url(/fonts/Breathing.ttf) format('truetype');}</style>
    `;
    expect(collectRefs(html)).toEqual([
      "assets/logo.png",
      "assets/logo.webp",
      "fonts/Breathing.ttf",
    ]);
  });

  it("dédoublonne et conserve les sous-dossiers", () => {
    const html = `<img src="/assets/temoignages/Barbara.png"/><img src="/assets/temoignages/Barbara.png"/>`;
    expect(collectRefs(html)).toEqual(["assets/temoignages/Barbara.png"]);
  });

  it("ignore les data-URI et les ressources externes", () => {
    const html = `
      <img src="data:image/png;base64,iVBORw0KGgo="/>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel"/>
      <iframe src="https://embed.bodygraphchart.com/v1/22753/iframe"></iframe>
    `;
    expect(collectRefs(html)).toEqual([]);
  });

  it("ignore les liens de navigation du site", () => {
    const html = `<a href="/cgv">CGV</a><a href="/inside.html">Inside</a><a href="/">Accueil</a>`;
    expect(collectRefs(html)).toEqual([]);
  });
});

describe("toRelative", () => {
  it("retire le slash de tête des src, srcset et url()", () => {
    const html = `<source srcset="/assets/a.webp"/><img src="/assets/a.png"/><style>src:url(/fonts/B.ttf);</style>`;
    expect(toRelative(html)).toBe(
      `<source srcset="assets/a.webp"/><img src="assets/a.png"/><style>src:url(fonts/B.ttf);</style>`,
    );
  });

  it("laisse les liens de navigation intacts", () => {
    const html = `<a href="/cgv">CGV</a><a href="/inside.html">Inside</a>`;
    expect(toRelative(html)).toBe(html);
  });

  it("laisse les data-URI et les URL externes intacts", () => {
    const html = `<img src="data:image/png;base64,iVBOR"/><iframe src="https://embed.bodygraphchart.com/x"></iframe>`;
    expect(toRelative(html)).toBe(html);
  });
});

describe("aller-retour", () => {
  it("restitue le HTML d'origine à l'octet près", () => {
    const html = `
      <link href="https://fonts.googleapis.com/css2?family=Cinzel" rel="stylesheet"/>
      <style>@font-face{font-family:'Breathing';src:url(/fonts/Breathing.ttf) format('truetype');}</style>
      <picture><source type="image/webp" srcset="/assets/reveal/seance-visio.webp"/><img src="/assets/reveal/seance-visio.jpg"/></picture>
      <img src="/assets/temoignages/Laura.png"/>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRg=="/>
      <a href="/cgv">CGV</a><a href="/">Accueil</a>
      <iframe src="https://embed.bodygraphchart.com/v1/22753/iframe"></iframe>
    `;
    expect(toAbsolute(toRelative(html))).toBe(html);
  });

  it("ne réécrit pas deux fois un HTML déjà relatif", () => {
    const relatif = `<img src="assets/a.png"/><style>src:url(fonts/B.ttf);</style>`;
    expect(toRelative(relatif)).toBe(relatif);
  });

  it("ne réécrit pas deux fois un HTML déjà absolu", () => {
    const absolu = `<img src="/assets/a.png"/><style>src:url(/fonts/B.ttf);</style>`;
    expect(toAbsolute(absolu)).toBe(absolu);
  });
});

describe("collectStrayRefs", () => {
  it("repère une ressource ajoutée hors des dossiers assets/ et fonts/", () => {
    const html = `<img src="/assets/a.png"/><img src="ma-photo.jpg"/><img src="photos/autre.png"/>`;
    expect(collectStrayRefs(html)).toEqual(["ma-photo.jpg", "photos/autre.png"]);
  });

  it("ne signale rien sur une page réinjectée normalement", () => {
    const html = `
      <link href="https://fonts.googleapis.com/css2?family=Cinzel" rel="stylesheet"/>
      <style>@font-face{src:url(/fonts/Breathing.ttf) format('truetype');}</style>
      <picture><source type="image/webp" srcset="/assets/logo.webp"/><img src="/assets/logo.png"/></picture>
      <img src="data:image/png;base64,iVBOR"/>
      <a href="/cgv">CGV</a>
      <iframe src="https://embed.bodygraphchart.com/x"></iframe>
    `;
    expect(collectStrayRefs(html)).toEqual([]);
  });

  it("ignore les protocoles sans slash de tête", () => {
    const html = `<a href="mailto:marion@example.com">Mail</a><a href="tel:0600000000">Tel</a>`;
    expect(collectStrayRefs(html)).toEqual([]);
  });
});
