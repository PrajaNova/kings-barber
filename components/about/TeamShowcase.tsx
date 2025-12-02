import { Instagram } from "lucide-react";

const team = [
  {
    name: "Master Barber",
    role: "Head Barber",
    image: "/assets/images/barber-1.jpg",
  },
  {
    name: "Senior Stylist",
    role: "Senior Barber",
    image: "/assets/images/barber-2.jpg",
  },
  {
    name: "Grooming Expert",
    role: "Barber",
    image: "/assets/images/barber-3.jpg",
  },
  {
    name: "Master Barber",
    role: "Head Barber",
    image: "/assets/images/barber-1.jpg",
  },
  {
    name: "Senior Stylist",
    role: "Senior Barber",
    image: "/assets/images/barber-2.jpg",
  },
  {
    name: "Grooming Expert",
    role: "Barber",
    image: "/assets/images/barber-3.jpg",
  },
];

const TeamShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl mb-4">
            Meet The Team
          </h2>
          <p className="font-outfit text-muted-foreground text-lg max-w-2xl mx-auto">
            Skilled artisans dedicated to your look.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center bg-background rounded-xl"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 relative rounded-t-lg">
                {/* Placeholder for Team Image */}
                <div className="absolute inset-0 bg-neutral-600 flex items-center justify-center text-neutral-600 group-hover:scale-105 transition-transform duration-500">
                  <span className="font-bebas text-3xl opacity-20">
                    Barber Photo
                  </span>
                </div>

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="/"
                    className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bebas text-2xl mb-1">{member.name}</h3>
                <p className="font-outfit text-primary font-medium text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
