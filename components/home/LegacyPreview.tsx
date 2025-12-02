import {
  ArrowRight,
  Award,
  Clock,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import Button from "##/components/ui/Button";

const features = [
  {
    icon: Clock,
    title: "Est. 2015",
    description: "Serving excellence in men's grooming for over a decade.",
  },
  {
    icon: GraduationCap,
    title: "UK Trained",
    description: "Certified & affiliated with Sid Sottung Academy (UK).",
  },
  {
    icon: ShieldCheck,
    title: "Sole Distributor",
    description: "Official partner for Lock Stock & Barrel (LSB) in SG & MY.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Merging old school traditions with modern techniques.",
  },
];

const LegacyPreview = () => {
  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background texture or gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="font-outfit text-copper uppercase tracking-[0.2em] text-sm mb-4">
                Our Heritage
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl leading-tight mb-6">
                More Than Just A{" "}
                <span className="text-primary">Barber Shop</span>
              </h2>
              <p className="font-outfit text-gray-300 text-lg leading-relaxed max-w-xl">
                Kings Barber was established in 2015 with a vision to provide
                premium grooming services. We believe in hygiene, quality, and
                craftsmanship, blending traditional methods with contemporary
                styles tailored to you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bebas text-xl mb-1">{feature.title}</h4>
                    <p className="font-outfit text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
            >
              Read Our Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            {/* Image composition placeholder */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-700">
                <span className="font-bebas text-4xl opacity-20">
                  Shop Interior / Barber at Work
                </span>
              </div>
              {/* Overlay badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-xl border border-border hidden md:block">
                <div className="text-center">
                  <span className="block font-bebas text-4xl text-primary">
                    10+
                  </span>
                  <span className="block font-outfit text-sm text-muted-foreground uppercase tracking-wider">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyPreview;
