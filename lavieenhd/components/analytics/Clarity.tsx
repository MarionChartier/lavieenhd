"use client";

import Script from "next/script";
import { useConsent } from "@/components/legal/consent";

/**
 * Microsoft Clarity, chargé uniquement après consentement (RGPD / CNIL).
 * L'ID de projet vient de NEXT_PUBLIC_CLARITY_ID ; s'il est absent (dev/local),
 * on ne charge rien. Le script n'est monté que si l'internaute a accepté :
 * aucun cookie de mesure n'est déposé sans accord.
 */
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export function Clarity() {
  const consent = useConsent();

  if (!CLARITY_ID || consent !== "granted") return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");
window.clarity("consent");`}
    </Script>
  );
}
