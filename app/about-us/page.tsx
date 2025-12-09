import AwardsCarousel from "##/components/AwardsCarousel";
import AboutHero from "##/components/about/AboutHero";
import AboutPhilosophy from "##/components/about/AboutPhilosophy";
import AboutStory from "##/components/about/AboutStory";
import AboutTeam from "##/components/about/AboutTeam";
import InstagramFeed from "##/components/about/InstagramFeed";
import Testimonials from "##/components/about/Testimonials";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
      <AboutTeam />

      {/* Featured In Section */}
      <section className="bg-black py-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 mb-8 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white/50">
            Featured In
          </h2>
        </div>
        <AwardsCarousel />
      </section>

      <Testimonials />
      <InstagramFeed />
    </main>
  );
}
