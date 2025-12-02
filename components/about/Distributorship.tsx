import { CheckCircle } from "lucide-react";

const brands = [
  { name: "Lock Stock & Barrel", description: "Sole Distributor (SG & MY)" },
  { name: "Proraso", description: "Premium Shaving Range" },
  { name: "FAUVERT Professionnel", description: "Hair & Scalp Treatment" },
  { name: "Marvis", description: "Luxury Dental Care" },
];

const Distributorship = () => {
  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-outfit text-copper uppercase tracking-[0.2em] text-sm mb-4">
              Our Partners
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl mb-6 leading-tight">
              Exclusive <span className="text-primary">Distributorship</span>
            </h2>
            <p className="font-outfit text-gray-300 text-lg leading-relaxed mb-8">
              Kings Barber is proud to be the sole distributor for Lock Stock &
              Barrel (LSB) grooming products in Singapore and Malaysia. We also
              retail a curated selection of the world's finest grooming brands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <div>
                    <h4 className="font-bebas text-xl tracking-wide">
                      {brand.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-outfit">
                      {brand.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-neutral-800 border-2 border-primary/20 relative">
              {/* Placeholder for Product Display Image */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                <span className="font-bebas text-4xl opacity-20">
                  LSB Product Range
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributorship;
