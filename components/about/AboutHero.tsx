import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_PAGE_CONTENT } from "##/lib/constants";

export default function AboutHero() {
  const { hero } = ABOUT_PAGE_CONTENT;

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 select-none">
        <Image
          src={hero.image}
          alt="Kings Barber Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 text-center md:px-12">
        <div className="mx-auto max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-200 md:text-2xl font-light">
            {hero.subline}
          </p>
          <div className="pt-8">
            <Link
              href={hero.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-black transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
            >
              {hero.cta.text}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
