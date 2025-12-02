import { Scissors, ShieldCheck, Armchair, Clock } from "lucide-react";

const VALUES = [
  {
    icon: Scissors,
    title: "Precision",
    description:
      "We don't rush. Every cut is calculated, every line is sharp. Perfection is our baseline.",
  },
  {
    icon: ShieldCheck,
    title: "Tradition",
    description:
      "We honor the timeless techniques of barbering passed down through generations.",
  },
  {
    icon: Armchair,
    title: "Atmosphere",
    description:
      "A space where you can relax, unwind, and escape the chaos of the city.",
  },
  {
    icon: Clock,
    title: "Consistency",
    description:
      "Whether it's your first visit or your fiftieth, you'll get the same top-tier service.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-secondary text-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="p-4 rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                <value.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold">{value.title}</h3>
              <p className="text-primary/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
