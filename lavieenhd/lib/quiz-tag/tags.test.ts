import { describe, expect, it } from "vitest";
import { tagsFor } from "./tags";

const email = "lea@example.com";

describe("tagsFor", () => {
  it("tague le résultat du quiz alignement", () => {
    expect(tagsFor({ quiz: "alignement-pro", email, result: "OK" })).toEqual({
      ok: true,
      email,
      tags: ["❔ QUIZ Alignement Pro - OK"],
    });
  });

  it("tague le résultat du quiz environnement", () => {
    expect(tagsFor({ quiz: "environnement", email, result: "RIVAGES" })).toEqual({
      ok: true,
      email,
      tags: ["❔ QUIZ Lieu idéal - RIVAGES"],
    });
  });

  const scan = {
    attraction: "green",
    communication: "eye",
    forces: "amber",
    energie: "eye",
    decisions: "green",
    vente: "eye",
  };

  it("tague chaque zone business en eye (👀) ou amber (💡), dans l'ordre des zones", () => {
    expect(tagsFor({ quiz: "business", email, result: scan })).toEqual({
      ok: true,
      email,
      tags: [
        "❔ QUIZ Business check-up - 👀 COMMUNICATION",
        "❔ QUIZ Business check-up - 💡 FORCES",
        "❔ QUIZ Business check-up - 👀 ENERGIE",
        "❔ QUIZ Business check-up - 👀 VENTE",
      ],
    });
  });

  it("ne pose aucun tag business quand toutes les zones sont green (💜)", () => {
    const calme = Object.fromEntries(Object.keys(scan).map((zone) => [zone, "green"]));
    expect(tagsFor({ quiz: "business", email, result: calme })).toEqual({ ok: true, email, tags: [] });
  });

  it("retire les espaces autour de l'email", () => {
    expect(tagsFor({ quiz: "alignement-pro", email: `  ${email} `, result: "LOIN" })).toMatchObject({
      ok: true,
      email,
    });
  });

  it.each([
    ["un payload qui n'est pas un objet", "bonjour"],
    ["un payload nul", null],
    ["un quiz inconnu", { quiz: "inconnu", email, result: "OK" }],
    ["un résultat alignement inconnu", { quiz: "alignement-pro", email, result: "RIVAGES" }],
    ["un résultat environnement inconnu", { quiz: "environnement", email, result: "OK" }],
    ["un résultat qui n'est pas une chaîne", { quiz: "environnement", email, result: 3 }],
    ["un email sans arobase", { quiz: "alignement-pro", email: "lea.example.com", result: "OK" }],
    ["un email absent", { quiz: "alignement-pro", result: "OK" }],
    ["un scan business qui n'est pas un objet", { quiz: "business", email, result: "VENTE" }],
    ["une zone business inconnue", { quiz: "business", email, result: { ...scan, argent: "eye" } }],
    ["un niveau business inconnu", { quiz: "business", email, result: { ...scan, vente: "red" } }],
    ["un scan business vide", { quiz: "business", email, result: {} }],
    ["un scan business partiel", { quiz: "business", email, result: { vente: "eye" } }],
    ["un quiz __proto__", { quiz: "__proto__", email, result: "OK" }],
    ["un quiz toString", { quiz: "toString", email, result: "OK" }],
    ["un email de plus de 254 caractères", { quiz: "alignement-pro", email: "a@" + "a.".repeat(200) + "fr", result: "OK" }],
  ])("rejette %s", (_, payload) => {
    expect(tagsFor(payload)).toMatchObject({ ok: false });
  });
});

describe("tagsFor face à un email piégé", () => {
  it("rejette en temps constant un très long email fait de points (pas de ReDoS)", () => {
    const start = performance.now();
    expect(tagsFor({ quiz: "alignement-pro", email: "a@" + "a.".repeat(50_000) + "@", result: "OK" })).toMatchObject({
      ok: false,
    });
    expect(performance.now() - start).toBeLessThan(50);
  });
});
