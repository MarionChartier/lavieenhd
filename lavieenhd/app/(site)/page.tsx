import { HomeHero } from "@/components/sections/home/HomeHero";
import { LeChemin } from "@/components/sections/home/LeChemin";
import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { SoulLetterBanner } from "@/components/sections/SoulLetterBanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LeChemin />
      <AboutTeaser />
      <Testimonials />
      <SoulLetterBanner />
    </>
  );
}
