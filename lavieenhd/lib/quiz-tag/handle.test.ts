import { describe, expect, it, vi } from "vitest";
import { SystemeIoError, type ApplyTagsOutcome } from "../systemeio";
import { handleQuizTag } from "./handle";

const email = "lea@example.com";
const body = { quiz: "alignement-pro", email: ` ${email}`, result: "PERDU" };

function request(payload: unknown, headers: Record<string, string> = { origin: "https://lavieenhd.vercel.app" }) {
  return new Request("https://lavieenhd.vercel.app/api/quiz-tag", {
    method: "POST",
    headers: { host: "lavieenhd.vercel.app", "content-type": "application/json", ...headers },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

function setup(applyTags: () => Promise<ApplyTagsOutcome> = async () => "tagged") {
  const client = { applyTags: vi.fn(applyTags) };
  const log = vi.fn();
  return { client, log };
}

describe("handleQuizTag", () => {
  it("tague le contact et répond 204", async () => {
    const { client, log } = setup();

    const res = await handleQuizTag(request(body), { client, log });

    expect(res.status).toBe(204);
    expect(client.applyTags).toHaveBeenCalledWith(email, ["❔ QUIZ Alignement Pro", "❔ QUIZ Alignement Pro - PERDU"]);
  });

  it.each([
    ["sans en-tête Origin", {}],
    ["depuis un autre site", { origin: "https://ailleurs.example" }],
  ])("refuse un appel %s (403)", async (_, headers) => {
    const { client, log } = setup();

    const res = await handleQuizTag(request(body, headers), { client, log });

    expect(res.status).toBe(403);
    expect(client.applyTags).not.toHaveBeenCalled();
  });

  it.each([
    ["un JSON illisible", "{pas du json"],
    ["un payload hors liste blanche", { ...body, result: "RIVAGES" }],
  ])("répond 400 sur %s", async (_, payload) => {
    const { client, log } = setup();

    const res = await handleQuizTag(request(payload), { client, log });

    expect(res.status).toBe(400);
    expect(client.applyTags).not.toHaveBeenCalled();
  });

  it("répond 204 même quand le contact n'apparaît pas (pas d'oracle d'inscription), sans journaliser l'email", async () => {
    const { client, log } = setup(async () => "contact-not-found");

    const res = await handleQuizTag(request(body), { client, log });

    expect(res.status).toBe(204);
    expect(log).toHaveBeenCalled();
    expect(JSON.stringify(log.mock.calls)).not.toContain(email);
  });

  it("répond 502 quand systeme.io échoue, sans journaliser l'email", async () => {
    const { client, log } = setup(async () => {
      throw new SystemeIoError(429, "/contacts?email=lea%40example.com");
    });

    const res = await handleQuizTag(request(body), { client, log });

    expect(res.status).toBe(502);
    expect(JSON.stringify(log.mock.calls)).toContain("429");
    expect(JSON.stringify(log.mock.calls)).not.toMatch(/lea/);
  });

  it("répond 502 sur une erreur inattendue (réseau, réponse illisible), journalisée sans l'email", async () => {
    const { client, log } = setup(async () => {
      throw new TypeError("fetch failed");
    });

    const res = await handleQuizTag(request(body), { client, log });

    expect(res.status).toBe(502);
    expect(JSON.stringify(log.mock.calls)).toContain("TypeError");
    expect(JSON.stringify(log.mock.calls)).not.toContain(email);
  });

  it("refuse un corps de plus de 4 Ko (413) sans appeler systeme.io", async () => {
    const { client, log } = setup();

    const res = await handleQuizTag(request({ ...body, padding: "x".repeat(5000) }), { client, log });

    expect(res.status).toBe(413);
    expect(client.applyTags).not.toHaveBeenCalled();
  });

  it("répond 503 quand la clé API n'est pas configurée", async () => {
    const { log } = setup();

    const res = await handleQuizTag(request(body), { client: null, log });

    expect(res.status).toBe(503);
    expect(log).toHaveBeenCalled();
  });
});
