import { Award, Star, Trophy } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Barber Shop 2023",
    org: "Grooming Awards SG",
  },
  {
    icon: Star,
    title: "Top Rated Service",
    org: "Lifestyle Magazine",
  },
  {
    icon: Award,
    title: "Master Barber Certification",
    org: "Global Barber Association",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=800&auto=format&fit=crop",
];

export function Showcase() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-white/10 pb-12">
          {awards.map((award, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <award.icon size={32} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{award.title}</h4>
                <p className="text-gray-400 text-sm">{award.org}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="text-center mb-12">
          <h2 className="text-secondary font-serif text-lg uppercase tracking-widest mb-2">
            Gallery
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Our Masterpieces
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden h-64 md:h-80 ${index % 2 === 0 ? "mt-8" : ""}`}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
