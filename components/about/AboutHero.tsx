import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Barber Shop Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
          The King's Standard
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light tracking-wide">
          More than just a cut. It's a ritual, a lifestyle, and a legacy of
          excellence.
        </p>
      </div>
    </section>
  );
}
