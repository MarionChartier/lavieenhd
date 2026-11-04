import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <PromoBanner />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
