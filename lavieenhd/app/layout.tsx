import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Clarity } from "@/components/analytics/Clarity";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const tansongbird = localFont({
  src: "./fonts/Tansongbird.otf",
  variable: "--font-tansongbird",
  display: "swap",
  weight: "400",
});

const breathing = localFont({
  src: "./fonts/Breathing.ttf",
  variable: "--font-breathing",
  display: "swap",
  weight: "400",
});

const rebel = localFont({
  src: "./fonts/Rebel.otf",
  variable: "--font-rebel",
  display: "swap",
  weight: "400",
});

const luciole = localFont({
  src: "./fonts/Luciole-Bold.ttf",
  variable: "--font-luciole",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Human Design",
    "Marion Chartier",
    "La vie en HD",
    "design humain",
    "accompagnement",
    "développement personnel",
  ],
  authors: [{ name: "Marion Chartier" }],
  creator: "Marion Chartier",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/assets/marion_home.png", alt: "Marion Chartier · La vie en HD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/assets/marion_home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Données structurées (JSON-LD) : aide les moteurs à comprendre l'activité de Marion. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/assets/marion_home.png`,
  areaServed: "FR",
  knowsAbout: ["Human Design", "Développement personnel", "Accompagnement"],
  founder: {
    "@type": "Person",
    name: "Marion Chartier",
    jobTitle: "Praticienne en Human Design",
  },
  sameAs: ["https://www.instagram.com/marionchartier_lavieenhd/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${tansongbird.variable} ${breathing.variable} ${rebel.variable} ${luciole.variable}`}
    >
      {/* Préconnexion aux services externes (calculateur HD, flux Instagram) pour accélérer le LCP. */}
      <link rel="preconnect" href="https://app.bodygraphchart.com" />
      <link rel="preconnect" href="https://embed.bodygraphchart.com" />
      <link rel="preconnect" href="https://feeds.behold.so" />
      <link rel="preconnect" href="https://w.behold.so" />
      <body className="min-h-screen flex flex-col bg-white text-ink-deep">
        {children}
        <CookieBanner />
        <Clarity />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
