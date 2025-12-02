import { Feather, Scissors, Sparkles } from "lucide-react";
import Button from "##/components/ui/Button";

const services = [
  {
    icon: Scissors,
    title: "Precision Haircutting",
    description:
      "A complete grooming experience starting with a consultation to find the perfect style for your face shape. Includes a wash, precision cut, and styling with our premium products.",
  },
  {
    icon: Feather,
    title: "Traditional Hot Towel Shave",
    description:
      "Experience the ultimate relaxation with our signature shave. We use pre-shave cream, hot towels, and a straight razor for a close, comfortable shave, finished with a cooling post-shave treatment.",
  },
  {
    icon: Sparkles,
    title: "Scalp & Hair Treatments",
    description:
      "Revitalize your hair and scalp with our specialized treatments. Using premium Fauvert products from France, we address issues like sensitivity and dandruff with a relaxing massage and deep conditioning.",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl mb-4">Our Services</h2>
          <p className="font-outfit text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine traditional techniques with modern styling to deliver an
            exceptional grooming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col"
            >
              <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-fit">
                <service.icon size={32} />
              </div>
              <h3 className="font-bebas text-3xl mb-4">{service.title}</h3>
              <p className="font-outfit text-muted-foreground mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <Button variant="outline" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
