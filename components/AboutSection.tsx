import { Scissors, ShieldCheck, SprayCan, Store } from "lucide-react";
import Image from "next/image";
import { ABOUT_CONTENT } from "##/lib/constants";

export default function AboutSection() {
  const iconMap = {
    scissors: Scissors,
    spray: SprayCan,
    pole: Store,
    shield: ShieldCheck,
  };

  return (
    <section className="w-full bg-black ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left Side - Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/assets/images/hero.jpg" // Using hero image for now, user can update
              alt="Barber working on a client"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Intro Content */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                {ABOUT_CONTENT.intro.title}
              </h2>
              <p className="text-xl leading-relaxed text-gray-300 sm:text-2xl">
                {ABOUT_CONTENT.intro.description}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              {ABOUT_CONTENT.highlights.map((item) => {
                // Determine icon component
                const IconComponent =
                  iconMap[item.icon as keyof typeof iconMap] || Scissors;

                return (
                  <div key={item.title} className="flex flex-col space-y-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
