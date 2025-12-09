import AboutSection from "##/components/AboutSection";
import AwardsCarousel from "##/components/AwardsCarousel";
import Hero from "##/components/Hero";
import ProductsSection from "##/components/ProductsSection";
import ServicesSection from "##/components/ServicesSection";
import TeamSection from "##/components/TeamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <section className="bg-black py-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 mb-8 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white/50">
            Featured In
          </h2>
        </div>
        <AwardsCarousel />
      </section>
      <TeamSection />
    </main>
  );
}
