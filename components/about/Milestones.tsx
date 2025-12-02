const milestones = [
  {
    year: "2015",
    title: "Establishment",
    description:
      "Kings Barber Pte Ltd was registered and opened its doors to provide premium grooming services.",
  },
  {
    year: "2015",
    title: "Sole Distributorship",
    description:
      "Secured exclusive rights for Lock Stock & Barrel (LSB) men's grooming products in Singapore & Malaysia.",
  },
  {
    year: "Ongoing",
    title: "UK Certification",
    description:
      "Our barbers undergo rigorous training and certification with the prestigious Sid Sottung Academy (UK).",
  },
  {
    year: "Present",
    title: "Market Leader",
    description:
      "Continuing to set the standard for hygiene, quality, and service in the local barbering industry.",
  },
];

const Milestones = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl mb-4">Our Journey</h2>
          <p className="font-outfit text-muted-foreground text-lg max-w-2xl mx-auto">
            Key moments that have shaped who we are today.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="group relative">
                {/* Dot on timeline */}
                <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-300" />

                <div
                  className={`flex flex-col items-center text-center ${index % 2 === 0 ? "md:flex-col-reverse md:mb-12" : "md:mt-12"}`}
                >
                  <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
                    <span className="font-bebas text-4xl text-primary/20 block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-bebas text-2xl mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-outfit text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
