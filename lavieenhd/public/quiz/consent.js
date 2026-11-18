/*
 * Consentement cookies + Microsoft Clarity + événements de parcours, partagé par les 3 quiz.
 *
 * Les quiz sont des pages statiques hors du layout Next : on reproduit ici le bandeau
 * (components/legal/CookieBanner.tsx), le lien « Gérer les cookies » du footer
 * (components/legal/ManageCookiesButton.tsx) et le chargement de Clarity
 * (components/analytics/Clarity.tsx). Même clé localStorage que le site : un choix fait
 * d'un côté vaut de l'autre.
 *
 * Usage dans un quiz : lvehTrack("quiz_start"), lvehTrack("quiz_email_submitted", resultat).
 * Avant tout choix, les événements sont gardés en mémoire dans la page (rien n'est stocké
 * ni envoyé) puis envoyés si le visiteur accepte, oubliés s'il refuse.
 */
(function () {
  "use strict";

  // Identifiant public du projet Clarity (visible dans le code de toutes les pages du site).
  // Doit rester identique à NEXT_PUBLIC_CLARITY_ID, défini côté Vercel pour le site Next.
  var CLARITY_ID = "x6x09tw3vo";
  var KEY = "lveh-consent";
  var QUIZ = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");
  var MAX_PENDING = 50;

  function getConsent() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "granted" || v === "denied" ? v : null;
    } catch {
      return null;
    }
  }

  function setConsent(value) {
    try {
      if (value) localStorage.setItem(KEY, value);
      else localStorage.removeItem(KEY);
    } catch { /* stockage indisponible : le choix vaut pour cette page seulement */ }
  }

  var clarityLoaded = false; // script Clarity injecté dans la page
  var active = false; // consentement accordé : les événements partent
  var pending = []; // événements émis avant tout choix

  function send(name, result) {
    try {
      if (result && result.length) window.clarity("set", "result", result);
      window.clarity("event", name);
    } catch { /* le suivi ne doit jamais bloquer le quiz */ }
  }

  function enableClarity() {
    if (!clarityLoaded) {
      clarityLoaded = true;
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CLARITY_ID);
      window.clarity("set", "quiz", QUIZ);
    }
    window.clarity("consent");
    active = true;
    var queued = pending;
    pending = [];
    queued.forEach(function (e) { send(e[0], e[1]); });
  }

  function disableClarity() {
    pending = [];
    if (active) {
      try { window.clarity("consent", false); } catch { /* idem */ }
    }
    active = false;
  }

  /**
   * Résultat sous forme d'étiquette Clarity : texte simple, ou pour business (objet zone -> niveau)
   * la liste des zones à travailler, sans les zones vertes (même règle que lib/quiz-tag/tags.ts).
   */
  function resultLabel(result) {
    if (result == null) return null;
    if (typeof result === "object") {
      return Object.keys(result)
        .filter(function (k) { return result[k] !== "green"; })
        .map(function (k) { return k + ":" + result[k]; });
    }
    return [String(result)];
  }

  window.lvehTrack = function (name, result) {
    var label = resultLabel(result);
    if (active) send(name, label);
    else if (getConsent() === null && pending.length < MAX_PENDING) pending.push([name, label]);
  };

  // Clic sur un lien de sortie : un compteur par offre (quiz_cta_offer_<offre>), un pour le retour au site.
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || a.closest("#lveh-consent")) return;
    var path;
    try { path = new URL(a.href, location.href).pathname; } catch { return; }
    var offer = path.match(/^\/mes-offres\/([a-z0-9-]+)/);
    window.lvehTrack(offer ? "quiz_cta_offer_" + offer[1] : "quiz_cta_site");
  }, true);

  var CSS =
    "#lveh-consent{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;" +
    "background:rgba(255,255,255,.92);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);" +
    "border-top:1px solid rgba(80,60,98,.15);box-shadow:0 -14px 40px -24px rgba(80,60,98,.6);" +
    "font-family:'Cormorant Garamond',Georgia,serif;color:#503c62}" +
    "#lveh-consent .lc-in{max-width:1180px;margin:0 auto;padding:16px 24px;display:flex;flex-direction:column;gap:12px}" +
    "#lveh-consent p{margin:0;font-size:16px;font-weight:300;line-height:1.55;text-align:center}" +
    "#lveh-consent .lc-row{display:flex;flex-direction:column;align-items:center;gap:10px}" +
    "#lveh-consent .lc-link,.lveh-manage button{font-family:'DM Sans',system-ui,sans-serif;font-size:10px;letter-spacing:.14em;" +
    "text-transform:uppercase;color:rgba(151,132,170,.9);text-decoration:underline;text-underline-offset:2px}" +
    "#lveh-consent .lc-btns{display:flex;gap:12px}" +
    "#lveh-consent .lc-btns button{font-family:'DM Sans',system-ui,sans-serif;font-size:11px;letter-spacing:.16em;" +
    "text-transform:uppercase;border:1px solid #503c62;border-radius:999px;padding:7px 20px;cursor:pointer}" +
    "#lveh-consent .lc-deny{background:transparent;color:#503c62}" +
    "#lveh-consent .lc-ok{background:#503c62;color:#fff}" +
    ".lveh-manage{margin:0;padding:24px 16px 32px;text-align:center}" +
    ".lveh-manage button{background:none;border:0;padding:0;cursor:pointer}" +
    "@media (min-width:640px){#lveh-consent p{text-align:left}" +
    "#lveh-consent .lc-row{flex-direction:row;justify-content:space-between}}";

  function addStyle() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function showBanner() {
    if (document.getElementById("lveh-consent")) return;
    var box = document.createElement("div");
    box.id = "lveh-consent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-live", "polite");
    box.setAttribute("aria-label", "Consentement aux cookies");
    box.innerHTML =
      '<div class="lc-in">' +
      "<p>Ce site utilise des cookies pour comprendre comment il est utilisé et l'améliorer. " +
      "Tu peux les accepter ou les refuser, et modifier ton choix à tout moment. " +
      "Aucun cookie de mesure n'est déposé sans ton accord.</p>" +
      '<div class="lc-row">' +
      '<a class="lc-link" href="/confidentialite" target="_top">Politique de confidentialité</a>' +
      '<div class="lc-btns">' +
      '<button type="button" class="lc-deny">Tout refuser</button>' +
      '<button type="button" class="lc-ok">Tout accepter</button>' +
      "</div></div></div>";
    document.body.appendChild(box);

    box.querySelector(".lc-deny").addEventListener("click", function () {
      setConsent("denied");
      box.remove();
      disableClarity();
    });
    box.querySelector(".lc-ok").addEventListener("click", function () {
      setConsent("granted");
      box.remove();
      enableClarity();
    });
  }

  /** Lien « Gérer les cookies » en bas de page, comme dans le footer du site. */
  function addManageLink() {
    var p = document.createElement("p");
    p.className = "lveh-manage";
    p.innerHTML = '<button type="button">Gérer les cookies</button>';
    p.querySelector("button").addEventListener("click", function () {
      setConsent(null);
      showBanner();
    });
    // Dans le conteneur du quiz : alignement-pro et environnement ont un body en flex
    // horizontal, où un enfant direct se placerait à droite du quiz.
    (document.querySelector(".quiz-wrapper") || document.body).appendChild(p);
  }

  function init() {
    addStyle();
    addManageLink();
    var consent = getConsent();
    if (consent === "granted") enableClarity();
    else if (consent === null) showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
