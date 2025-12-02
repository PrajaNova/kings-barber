import { Heart, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Hygiene First",
    description:
      "We adhere to strict hygiene standards to ensure a safe and clean environment for every client.",
  },
  {
    icon: Heart,
    title: "Passion for Craft",
    description:
      "Our barbers are not just skilled; they are passionate artisans dedicated to the art of grooming.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "From our tools to our products, we use only the best to deliver an exceptional experience.",
  },
];

const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted relative">
              {/* Placeholder for Brand Image */}
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                <span className="font-bebas text-4xl opacity-20">
                  Shop Atmosphere
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-card p-2 rounded-lg shadow-xl hidden md:block">
              <div className="w-full h-full bg-neutral-700 rounded flex items-center justify-center text-neutral-500">
                <span className="font-bebas text-2xl opacity-20">
                  Detail Shot
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-outfit text-copper uppercase tracking-[0.2em] text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl mb-6 leading-tight">
              Redefining{" "}
              <span className="text-primary">Gentlemen's Grooming</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-outfit leading-relaxed">
              <p>
                Kings Barber was established in 2015 with a singular mission: to
                provide high-quality barbering services that blend the nostalgia
                of old-school shops with modern techniques and hygiene
                standards.
              </p>

              <h3 className="font-bebas text-2xl text-foreground pt-4">
                Our Vision
              </h3>
              <p>
                We envisioned Kings Barber as a major market provider of premium
                services in men’s grooming needs with emphasis on hygiene,
                quality products and services. We believe in practicing good
                hygiene in our barber shop and using top quality product for our
                customers.
              </p>

              <h3 className="font-bebas text-2xl text-foreground pt-4">
                Our Philosophy
              </h3>
              <p>
                We mix old school with modern techniques to suit our customers.
                Hygiene is paramount—we implement a 2-stage sanitization process
                for all tools and use single-use blades for every shave.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="text-center sm:text-left">
                  <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon size={24} />
                  </div>
                  <h4 className="font-bebas text-xl mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground font-outfit">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
