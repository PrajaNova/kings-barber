import Image from "next/image";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "James 'The King' Sterling",
    role: "Master Barber & Founder",
    image:
      "https://images.unsplash.com/photo-1583336137348-82bc11c031ea?q=80&w=1974&auto=format&fit=crop",
    bio: "With over 15 years of experience, James brings a mastery of classic cuts and straight razor shaves.",
  },
  {
    name: "Marcus Chen",
    role: "Senior Stylist",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2080&auto=format&fit=crop",
    bio: "Specializing in modern fades and textured crops, Marcus keeps King's Barber on the cutting edge.",
  },
  {
    name: "Elena Rodriguez",
    role: "Grooming Specialist",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop",
    bio: "Elena's attention to detail is unmatched, making her the go-to for beard sculpting and facials.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-serif text-sm uppercase tracking-[0.2em] mb-4">
            The Masters
          </h2>
          <h3 className="text-4xl font-serif font-bold text-white mb-6">
            Meet the Team
          </h3>
          <p className="text-gray-400 text-lg">
            Our barbers are more than just stylists; they are artists dedicated
            to the craft of male grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group relative bg-primary/50 rounded-lg overflow-hidden border border-white/5 hover:border-secondary/50 transition-colors duration-300"
            >
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Social Links Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4">
                  <a
                    href="#"
                    className="p-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 text-center relative z-10 bg-primary">
                <h4 className="text-xl font-serif font-bold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-secondary text-sm uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
