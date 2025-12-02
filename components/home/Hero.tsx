import { ArrowRight } from "lucide-react";
import Button from "##/components/ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(/assets/images/hero.jpg)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <p className="font-outfit text-copper uppercase tracking-[0.3em] text-sm mb-6 animate-slide-up">
          Premium Barber Services & Grooming Products
        </p>
        <h1
          className="font-bebas text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          KINGS BARBER
        </h1>
        <p
          className="font-outfit text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Experience the art of traditional barbering and elevate your daily
          routine with our professionally crafted products.
          <span className="text-gradient block mt-2">
            Trained in England. Perfected Locally.
          </span>
        </p>
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Book Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-foreground hover:bg-primary/10 font-outfit font-semibold px-8 py-6 text-lg"
          >
            Shop Products
          </Button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
