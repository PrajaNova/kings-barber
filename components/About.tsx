import Image from "next/image";
import { Button } from "./Button";

export function About() {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl border border-white/10">
            {/* Using a placeholder image from Unsplash */}
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop"
              alt="Barber working on a client"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-secondary font-serif text-lg uppercase tracking-widest">
              Since 2015
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Legacy of <br />
              <span className="text-gray-400">Excellence & Style</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              At King's Barber, we believe that a haircut is more than just a
              service—it's an experience. Founded with a passion for the
              traditional art of barbering, we blend classic techniques with
              modern trends to create a look that is uniquely yours.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team of master barbers is dedicated to providing the highest
              quality grooming services in a relaxed and sophisticated
              atmosphere. Sit back, relax, and let us take care of the rest.
            </p>
            <div className="pt-4">
              <Button variant="outline">Meet the Team</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
