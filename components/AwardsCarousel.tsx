"use client";

import Image from "next/image";
import Link from "next/link";
import { AWARDS_CONTENT } from "##/lib/constants";

export default function AwardsCarousel() {
  // Duplicate the items to create a seamless loop
  const seamlessAwards = [...AWARDS_CONTENT, ...AWARDS_CONTENT];

  return (
    <section className="w-full overflow-hidden bg-black py-10 border-t border-white/5">
      <div className="relative w-full">
        {/* Gradients for creating fading effect at edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-black via-black/80 to-transparent" />

        {/* Scrolling Container */}
        {/* We use w-max to ensure the container is wide enough for all items in a row */}
        <div className="flex w-max animate-scroll items-center gap-0 px-4 hover:paused focus-within:paused group">
          {seamlessAwards.map((award, index) => (
            <Link
              // Using index as key because of duplication, and strictly safe here since list is static constant
              key={`${award.id}-${index}`}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-[200px] w-[200px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px] shrink-0 items-center justify-center border border-white/10 bg-white/5 p-2 shadow-sm transition-all duration-300 hover:z-10 hover:border-2 hover:scale-105 focus:scale-105 focus:z-10 outline-none"
            >
              <div className="relative h-full w-full">
                <Image
                  src={award.image}
                  alt={award.alt}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
