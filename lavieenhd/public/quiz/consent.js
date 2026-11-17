/*
 * Consentement cookies + Microsoft Clarity + événements de parcours, partagé par les 3 quiz.
 *
 * Les quiz sont des pages statiques hors du layout Next : on reproduit ici le bandeau
 * (components/legal/CookieBanner.tsx) et le chargement de Clarity (components/analytics/Clarity.tsx).
 * Même clé localStorage que le site : un choix fait d'un côté vaut de l'autre.
 *
 * Usage dans un quiz : lvehTrack("quiz_start"), lvehTrack("quiz_email_submitted", resultat).
 * Sans consentement, lvehTrack ne fait rien.
 */
(function () {
  "use strict";

  // Identifiant public du projet Clarity (visible dans le code de toutes les pages du site).
  // Doit rester identique à NEXT_PUBLIC_CLARITY_ID, défini côté Vercel pour le site Next.
  var CLARITY_ID = "x6x09tw3vo";
  var KEY = "lveh-consent";
  var QUIZ = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");

  function getConsent() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "granted" || v === "denied" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) { /* stockage indisponible : le choix vaut pour cette page seulement */ }
  }

  var clarityLoaded = false;
  function loadClarity() {
    if (clarityLoaded) return;
    clarityLoaded = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
    window.clarity("consent");
    window.clarity("set", "quiz", QUIZ);
  }

  /** Résultat en texte pour une étiquette Clarity (business renvoie un objet zone -> niveau). */
  function resultLabel(result) {
    if (result == null) return "";
    if (typeof result === "object") {
      return Object.keys(result).map(function (k) { return k + ":" + result[k]; }).join(",");
    }
    return String(result);
  }

  window.lvehTrack = function (name, result) {
    if (!clarityLoaded) return;
    try {
      var label = resultLabel(result);
      if (label) window.clarity("set", "result", label);
      window.clarity("event", name);
    } catch (e) { /* le suivi ne doit jamais bloquer le quiz */ }
  };

  // Clic sur un lien de sortie (CTA d'offre, retour au site) : un seul écouteur pour tous les quiz.
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || !clarityLoaded) return;
    try {
      var path = new URL(a.href, location.href).pathname;
      window.clarity("set", "cta", path);
      window.clarity("event", "quiz_cta_click");
    } catch (err) { /* idem */ }
  }, true);

  var CSS =
    "#lveh-consent{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;" +
    "background:rgba(255,255,255,.92);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);" +
    "border-top:1px solid rgba(80,60,98,.15);box-shadow:0 -14px 40px -24px rgba(80,60,98,.6);" +
    "font-family:'Cormorant Garamond',Georgia,serif;color:#503c62}" +
    "#lveh-consent .lc-in{max-width:1180px;margin:0 auto;padding:16px 24px;display:flex;flex-direction:column;gap:12px}" +
    "#lveh-consent p{margin:0;font-size:16px;font-weight:300;line-height:1.55;text-align:center}" +
    "#lveh-consent .lc-row{display:flex;flex-direction:column;align-items:center;gap:10px}" +
    "#lveh-consent .lc-link{font-family:'DM Sans',system-ui,sans-serif;font-size:10px;letter-spacing:.14em;" +
    "text-transform:uppercase;color:rgba(151,132,170,.7);text-decoration:underline;text-underline-offset:2px}" +
    "#lveh-consent .lc-btns{display:flex;gap:12px}" +
    "#lveh-consent button{font-family:'DM Sans',system-ui,sans-serif;font-size:11px;letter-spacing:.16em;" +
    "text-transform:uppercase;border:1px solid #503c62;border-radius:999px;padding:7px 20px;cursor:pointer}" +
    "#lveh-consent .lc-deny{background:transparent;color:#503c62}" +
    "#lveh-consent .lc-ok{background:#503c62;color:#fff}" +
    "@media (min-width:640px){#lveh-consent p{text-align:left}" +
    "#lveh-consent .lc-row{flex-direction:row;justify-content:space-between}}";

  function showBanner() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

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
    });
    box.querySelector(".lc-ok").addEventListener("click", function () {
      setConsent("granted");
      box.remove();
      loadClarity();
    });
  }

  function init() {
    var consent = getConsent();
    if (consent === "granted") loadClarity();
    else if (consent === null) showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
