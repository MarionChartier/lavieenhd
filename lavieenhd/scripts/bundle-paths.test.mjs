import { describe, expect, it } from "vitest";
import { collectRefs, toRelative } from "./bundle-paths.mjs";

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

  it("ignore les data-URI, les ressources externes et les liens de navigation", () => {
    const html = `
      <img src="data:image/png;base64,iVBORw0KGgo="/>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel"/>
      <a href="/cgv">CGV</a><a href="/inside.html">Inside</a><a href="/">Accueil</a>
    `;
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

  it("laisse intacts les liens de navigation, les data-URI et les URL externes", () => {
    const html = `<a href="/cgv">CGV</a><img src="data:image/png;base64,iVBOR"/><iframe src="https://embed.bodygraphchart.com/x"></iframe>`;
    expect(toRelative(html)).toBe(html);
  });

  it("ne réécrit pas un HTML déjà relatif", () => {
    const relatif = `<img src="assets/a.png"/><style>src:url(fonts/B.ttf);</style>`;
    expect(toRelative(relatif)).toBe(relatif);
  });
});
