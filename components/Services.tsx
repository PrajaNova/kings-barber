import { Coffee, Ruler, Scissors, Zap } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description:
      "Precision cut tailored to your style, finished with a hot towel.",
    price: "$45",
  },
  {
    icon: Zap,
    title: "Beard Trim & Shape",
    description:
      "Sculpting and grooming for the perfect beard line and length.",
    price: "$30",
  },
  {
    icon: Ruler,
    title: "The Royal Shave",
    description:
      "Traditional straight razor shave with pre-shave oil and hot foam.",
    price: "$55",
  },
  {
    icon: Coffee,
    title: "Hair & Beard Combo",
    description:
      "The complete package. Haircut, beard trim, and a complimentary drink.",
    price: "$70",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-serif text-lg uppercase tracking-widest mb-2">
            Our Menu
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Premium Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-primary border border-white/5 rounded-lg hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors">
                <service.icon
                  size={24}
                  className="text-secondary group-hover:text-primary"
                />
              </div>
              <h4 className="text-xl font-serif font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-secondary">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
