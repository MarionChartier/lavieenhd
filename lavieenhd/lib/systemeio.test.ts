import { describe, expect, it } from "vitest";
import { createSystemeIoClient } from "./systemeio";

type Call = { method: string; url: string; body?: unknown; apiKey: string | null };
type Route = (call: Call) => { status: number; json?: unknown };

/** Faux fetch : enregistre chaque appel et répond via `route`. */
function fakeApi(route: Route) {
  const calls: Call[] = [];
  const fetch = async (input: string | URL | Request, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    const call: Call = {
      method: init?.method ?? "GET",
      url: String(input),
      body: init?.body ? JSON.parse(String(init.body)) : undefined,
      apiKey: headers.get("X-API-Key"),
    };
    calls.push(call);
    const { status, json } = route(call);
    return new Response(json === undefined ? null : JSON.stringify(json), { status });
  };
  const sleeps: number[] = [];
  const client = createSystemeIoClient({
    apiKey: "test-key",
    fetch,
    sleep: async (ms) => {
      sleeps.push(ms);
    },
  });
  return { client, calls, sleeps };
}

const email = "lea+quiz@example.com";
const API = "https://api.systeme.io/api";

describe("applyTags", () => {
  it("retrouve le contact, réutilise le tag au nom exact et l'attache", async () => {
    const { client, calls } = fakeApi(({ method, url }) => {
      if (method === "GET" && url.startsWith(`${API}/contacts`)) return { status: 200, json: { items: [{ id: 42 }], hasMore: false } };
      if (method === "GET" && url.startsWith(`${API}/tags`))
        return {
          status: 200,
          json: { items: [{ id: 6, name: "Quiz alignement - OK 2" }, { id: 7, name: "Quiz alignement - OK" }], hasMore: false },
        };
      return { status: 204 };
    });

    await expect(client.applyTags(email, ["Quiz alignement - OK"])).resolves.toBe("tagged");

    expect(calls).toEqual([
      { method: "GET", url: `${API}/contacts?email=lea%2Bquiz%40example.com`, apiKey: "test-key" },
      { method: "GET", url: `${API}/tags?query=Quiz+alignement+-+OK&limit=100`, apiKey: "test-key" },
      { method: "POST", url: `${API}/contacts/42/tags`, body: { tagId: 7 }, apiKey: "test-key" },
    ]);
  });

  it("crée le tag quand aucun tag ne porte exactement ce nom", async () => {
    const { client, calls } = fakeApi(({ method, url }) => {
      if (method === "GET" && url.startsWith(`${API}/contacts`)) return { status: 200, json: { items: [{ id: 42 }], hasMore: false } };
      if (method === "GET" && url.startsWith(`${API}/tags`))
        return { status: 200, json: { items: [{ id: 6, name: "Quiz business - VENTE 2" }], hasMore: false } };
      if (method === "POST" && url === `${API}/tags`) return { status: 201, json: { id: 9, name: "Quiz business - VENTE" } };
      return { status: 204 };
    });

    await expect(client.applyTags(email, ["Quiz business - VENTE"])).resolves.toBe("tagged");

    expect(calls.slice(2)).toEqual([
      { method: "POST", url: `${API}/tags`, body: { name: "Quiz business - VENTE" }, apiKey: "test-key" },
      { method: "POST", url: `${API}/contacts/42/tags`, body: { tagId: 9 }, apiKey: "test-key" },
    ]);
  });

  it("attend le contact créé par le formulaire, puis abandonne après 3 essais", async () => {
    const { client, calls, sleeps } = fakeApi(() => ({ status: 200, json: { items: [], hasMore: false } }));

    await expect(client.applyTags(email, ["Quiz alignement - OK"])).resolves.toBe("contact-not-found");

    expect(calls.map((c) => c.url)).toEqual(Array(3).fill(`${API}/contacts?email=lea%2Bquiz%40example.com`));
    expect(sleeps).toEqual([2000, 2000]);
  });

  it("tague le contact dès qu'il apparaît", async () => {
    let essais = 0;
    const { client, sleeps } = fakeApi(({ method, url }) => {
      if (url.startsWith(`${API}/contacts?`)) {
        essais++;
        return { status: 200, json: { items: essais < 2 ? [] : [{ id: 42 }], hasMore: false } };
      }
      if (method === "GET") return { status: 200, json: { items: [{ id: 7, name: "Quiz alignement - OK" }], hasMore: false } };
      return { status: 204 };
    });

    await expect(client.applyTags(email, ["Quiz alignement - OK"])).resolves.toBe("tagged");
    expect(sleeps).toEqual([2000]);
  });

  it("n'appelle pas l'API sans tag à poser", async () => {
    const { client, calls } = fakeApi(() => ({ status: 500 }));

    await expect(client.applyTags(email, [])).resolves.toBe("tagged");
    expect(calls).toEqual([]);
  });

  it("borne chaque appel par un timeout", async () => {
    const signals: (AbortSignal | null | undefined)[] = [];
    const client = createSystemeIoClient({
      apiKey: "test-key",
      fetch: async (_input, init) => {
        signals.push(init?.signal);
        return new Response(JSON.stringify({ items: [{ id: 42 }], hasMore: false }), { status: 200 });
      },
      sleep: async () => {},
    });

    await client.applyTags(email, []).then(() => client.applyTags(email, ["x"])).catch(() => {});

    expect(signals.length).toBeGreaterThan(0);
    expect(signals.every((signal) => signal instanceof AbortSignal)).toBe(true);
  });

  it.each([
    ["un fetch qui échoue (réseau, timeout)", async () => Promise.reject(new TypeError("fetch failed"))],
    ["une réponse 200 qui n'est pas du JSON", async () => new Response("<html>", { status: 200 })],
  ])("traduit %s en SystemeIoError sans l'email dans le message", async (_, fetch) => {
    const client = createSystemeIoClient({ apiKey: "test-key", fetch, sleep: async () => {} });

    const error = await client.applyTags(email, ["x"]).catch((e: unknown) => e);

    expect(error).toMatchObject({ name: "SystemeIoError" });
    expect(String((error as Error).message)).not.toMatch(/lea|example/);
  });

  it("n'écrit pas l'email dans le message d'une SystemeIoError", async () => {
    const { client } = fakeApi(() => ({ status: 500 }));

    const error = await client.applyTags(email, ["x"]).catch((e: unknown) => e);

    expect(String((error as Error).message)).not.toMatch(/lea|example/);
  });

  it.each([429, 401, 500])("lève une SystemeIoError sur un statut %i", async (status) => {
    const { client } = fakeApi(() => ({ status }));

    await expect(client.applyTags(email, ["Quiz alignement - OK"])).rejects.toMatchObject({
      name: "SystemeIoError",
      status,
    });
  });
});
