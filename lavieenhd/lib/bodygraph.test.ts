import { describe, expect, it, vi } from "vitest";
import { hasBodygraphResult, redirectResultsToTestHd, testHdResultUrl } from "./bodygraph";

const RESULT = "#chart,bmFtZT1MZWE=";

describe("hasBodygraphResult", () => {
  it.each([RESULT, `${RESULT}&lang=fr`])("reconnaît le résultat %j", (hash) => {
    expect(hasBodygraphResult(hash)).toBe(true);
  });

  it.each(["", "#", "#portes", "#schema-hd", "#chart"])("ignore le hash %j", (hash) => {
    expect(hasBodygraphResult(hash)).toBe(false);
  });
});

describe("testHdResultUrl", () => {
  it("renvoie vers Test HD gratuit avec le résultat intact", () => {
    expect(testHdResultUrl({ search: "", hash: RESULT })).toBe(`/test-gratuit${RESULT}`);
  });

  it("conserve les paramètres de campagne", () => {
    expect(testHdResultUrl({ search: "?utm_source=instagram", hash: RESULT })).toBe(
      `/test-gratuit?utm_source=instagram${RESULT}`,
    );
  });

  it.each(["", "#", "#portes", "#schema-hd", "#chart"])("ne redirige pas pour le hash %j", (hash) => {
    expect(testHdResultUrl({ search: "", hash })).toBeNull();
  });
});

describe("redirectResultsToTestHd", () => {
  /** Fenêtre factice : un vrai EventTarget, et une location observable. */
  function fakeWindow(hash: string) {
    const location = { search: "", hash, replace: vi.fn() };
    return Object.assign(new EventTarget(), { location });
  }

  const calculer = (win: ReturnType<typeof fakeWindow>) => {
    win.location.hash = RESULT;
    win.dispatchEvent(new Event("hashchange"));
  };

  it("redirige si le résultat est déjà dans l'URL", () => {
    const win = fakeWindow(RESULT);
    redirectResultsToTestHd(win);
    expect(win.location.replace).toHaveBeenCalledExactlyOnceWith(`/test-gratuit${RESULT}`);
  });

  it("redirige quand le schéma vient d'être calculé, en remplaçant l'entrée d'historique", () => {
    const win = fakeWindow("");
    redirectResultsToTestHd(win);
    expect(win.location.replace).not.toHaveBeenCalled();
    calculer(win);
    expect(win.location.replace).toHaveBeenCalledExactlyOnceWith(`/test-gratuit${RESULT}`);
  });

  it("ne redirige pas pour une ancre de la page", () => {
    const win = fakeWindow("");
    redirectResultsToTestHd(win);
    win.location.hash = "#portes";
    win.dispatchEvent(new Event("hashchange"));
    expect(win.location.replace).not.toHaveBeenCalled();
  });

  it("n'écoute plus une fois arrêtée (départ de l'accueil)", () => {
    const win = fakeWindow("");
    const stop = redirectResultsToTestHd(win);
    stop();
    calculer(win);
    expect(win.location.replace).not.toHaveBeenCalled();
  });
});
