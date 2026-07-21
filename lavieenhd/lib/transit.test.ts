import { describe, expect, it } from "vitest";
import { findTransit, parseCsv, splitPhaseDescription } from "./transit";

describe("parseCsv", () => {
  it("découpe lignes et champs simples", () => {
    expect(parseCsv("a,b\nc,d")).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("gère les champs entre guillemets contenant virgules et retours à la ligne", () => {
    expect(parseCsv('"a,x","l1\nl2"\r\nb,c')).toEqual([
      ["a,x", "l1\nl2"],
      ["b", "c"],
    ]);
  });

  it("gère les guillemets échappés (double guillemet)", () => {
    expect(parseCsv('"dit ""bonjour"" fort",b')).toEqual([['dit "bonjour" fort', "b"]]);
  });
});

/** Feuille type : Date | Porte | Mots clés | Message | Phase lunaire | Description phase. */
const HEADER = ["Date", "Porte", "Mots clés", "Message", "Phase lunaire", "Description phase lunaire"];
const SHEET: string[][] = [
  HEADER,
  ["16/07/2026", "56", "Histoire - Récit", '"Je partage."', "Lune croissante", "Période d'action."],
  ["17/07/2026", "56", "Histoire - Récit", '"Je partage."', "Lune croissante", "Période d'action."],
  ["18/07/2026", "56", "Histoire - Récit", '"Je partage."', "Pleine Lune J-1", "Presque pleine."],
  ["19/07/2026", "56", "Histoire - Récit", '"Je partage."', "Pleine Lune", "Récolte."],
  ["20/07/2026", "56", "Histoire - Récit", '"Je partage."', "Pleine Lune J+1", "Récolte."],
  ["21/07/2026", "31", "Influence - Leader", '"Je guide."', "Lune décroissante", "Libération."],
];

describe("findTransit", () => {
  it("retourne la ligne du jour avec période regroupée sur la même porte", () => {
    const t = findTransit(SHEET, new Date(2026, 6, 19));
    expect(t).not.toBeNull();
    expect(t!.porte).toBe("56");
    expect(t!.motsCles).toBe("Histoire - Récit");
    expect(t!.periode).toBe("du 16 au 20 juillet");
    expect(t!.phase).toBe("Pleine Lune");
    expect(t!.phaseDescription).toBe("Récolte.");
  });

  it("retire les guillemets décoratifs autour du message", () => {
    const t = findTransit(SHEET, new Date(2026, 6, 19));
    expect(t!.message).toBe("Je partage.");
  });

  it("borne la période au changement de porte", () => {
    const t = findTransit(SHEET, new Date(2026, 6, 21));
    expect(t!.porte).toBe("31");
    expect(t!.periode).toBe("le 21 juillet");
  });

  it("formate la période à cheval sur deux mois", () => {
    const sheet = [
      HEADER,
      ["30/06/2026", "12", "Prudence", '"Je choisis."', "Lune croissante", "Action."],
      ["01/07/2026", "12", "Prudence", '"Je choisis."', "Lune croissante", "Action."],
    ];
    const t = findTransit(sheet, new Date(2026, 6, 1));
    expect(t!.periode).toBe("du 30 juin au 1 juillet");
  });

  it("retourne null si la date du jour est absente de la feuille", () => {
    expect(findTransit(SHEET, new Date(2026, 6, 25))).toBeNull();
  });

  it("ignore les lignes vides ou mal datées", () => {
    const sheet = [HEADER, ["", "", "", "", "", ""], ...SHEET.slice(1)];
    expect(findTransit(sheet, new Date(2026, 6, 19))!.porte).toBe("56");
  });

  it("sépare les mots-clés de la description de phase", () => {
    const sheet = [
      HEADER,
      [
        "19/07/2026",
        "56",
        "Histoire",
        '"Je partage."',
        "Lune croissante",
        "Période d'action et de prise de décision.\n VITALITE - JOIE - INSPIRATION",
      ],
    ];
    const t = findTransit(sheet, new Date(2026, 6, 19))!;
    expect(t.phaseDescription).toBe("Période d'action et de prise de décision.");
    expect(t.phaseMotsCles).toBe("VITALITE - JOIE - INSPIRATION");
  });
});

describe("splitPhaseDescription", () => {
  it("extrait les mots-clés placés après un retour à la ligne", () => {
    expect(splitPhaseDescription("Période d'action.\n VITALITE - JOIE - INSPIRATION")).toEqual({
      texte: "Période d'action.",
      motsCles: "VITALITE - JOIE - INSPIRATION",
    });
  });

  it("extrait les mots-clés collés en fin de phrase (sans retour à la ligne)", () => {
    expect(
      splitPhaseDescription(
        "C'est le moment de lâcher prise sur ce qui n'a pas fonctionné. RALENTISSEMENT - BAISSE D'ENERGIE - TRI",
      ),
    ).toEqual({
      texte: "C'est le moment de lâcher prise sur ce qui n'a pas fonctionné.",
      motsCles: "RALENTISSEMENT - BAISSE D'ENERGIE - TRI",
    });
  });

  it("laisse la description intacte quand il n'y a pas de mots-clés", () => {
    expect(splitPhaseDescription("Période de repos et de purification.")).toEqual({
      texte: "Période de repos et de purification.",
      motsCles: "",
    });
  });

  it("ne confond pas un mot isolé en capitales avec des mots-clés", () => {
    expect(splitPhaseDescription("Une énergie de type YANG")).toEqual({
      texte: "Une énergie de type YANG",
      motsCles: "",
    });
  });
});
