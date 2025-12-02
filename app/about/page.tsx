import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { ValuesSection } from "@/components/about/ValuesSection";
import { TeamSection } from "@/components/about/TeamSection";
import { PressSection } from "@/components/about/PressSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <TeamSection />
      <PressSection />
      <Footer />
    </main>
  );
}
