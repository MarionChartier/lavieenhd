import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "La vie en HD — Marion Chartier · Human Design",
  description:
    "Marion Chartier, praticienne en Human Design. Un chemin intérieur pour révéler qui tu es vraiment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${tansongbird.variable} ${rebel.variable} ${luciole.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-ink-deep">
        {children}
      </body>
    </html>
  );
}
