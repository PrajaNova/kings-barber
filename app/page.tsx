import Link from "next/link";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Showcase } from "@/components/Showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />

      {/* Welcome / Teaser Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-secondary font-serif text-lg uppercase tracking-widest mb-2">
            Welcome to King's Barber
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Experience the Art of Grooming
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We combine traditional techniques with modern styles to give you the
            perfect look. Visit us for a haircut, shave, or beard trim.
          </p>
          <Link href="/services">
            <Button variant="outline">View Our Services</Button>
          </Link>
        </div>
      </section>

      <Showcase />
      <Footer />
    </main>
  );
}
