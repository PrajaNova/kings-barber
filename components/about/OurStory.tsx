import Image from "next/image";
import { Button } from "@/components/Button";

export function OurStory() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-secondary font-serif text-sm uppercase tracking-[0.2em]">
                Our History
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Crafting Confidence <br />
                <span className="text-gray-400">Since 2015</span>
              </h3>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                It started with a simple chair and a vision: to bring back the
                classic gentleman's barbershop experience, but with a modern
                edge. What began as a small shop in the heart of the city has
                grown into a destination for those who appreciate the finer
                details of grooming.
              </p>
              <p>
                At King's Barber, we honor the traditions of the trade while
                embracing innovation. Every cut, shave, and trim is executed
                with precision and passion, ensuring you leave not just looking
                your best, but feeling it too.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
              >
                Read Our Full Story
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[600px] w-full order-1 md:order-2">
            <div className="absolute inset-0 bg-secondary/10 rounded-lg transform translate-x-4 translate-y-4" />
            <div className="relative h-full w-full rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                alt="Vintage Barber Tools"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
