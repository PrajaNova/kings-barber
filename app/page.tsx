import AboutSection from "##/components/AboutSection";
import AwardsCarousel from "##/components/AwardsCarousel";
import Hero from "##/components/Hero";
import Navbar from "##/components/Navbar";
import ProductsSection from "##/components/ProductsSection";
import ServicesSection from "##/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <AwardsCarousel />
    </main>
  );
}
