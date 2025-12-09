import AboutSection from "##/components/AboutSection";
import AwardsCarousel from "##/components/AwardsCarousel";
import Hero from "##/components/Hero";
import Navbar from "##/components/Navbar";
import ServicesSection from "##/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <AwardsCarousel />
      <ServicesSection />
    </main>
  );
}
