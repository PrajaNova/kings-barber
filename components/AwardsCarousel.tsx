"use client";

import Image from "next/image";
import Link from "next/link";
import { AWARDS_CONTENT } from "##/lib/constants";

export default function AwardsCarousel() {
  // Duplicate the items to create a seamless loop
  // Ensure enough duplicates to cover wider screens (at least 3x viewport width for safety)
  const seamlessAwards = [
    ...AWARDS_CONTENT,
    ...AWARDS_CONTENT,
    ...AWARDS_CONTENT,
    ...AWARDS_CONTENT,
    ...AWARDS_CONTENT,
    ...AWARDS_CONTENT,
  ];

  return (
    <section className="w-full overflow-hidden bg-black py-5">
      <div className="container mx-auto px-6 md:px-12 overflow-hidden">
        <div className="relative w-full">
          <div className="flex w-max animate-scroll items-center gap-6 px-4 hover:paused focus-within:paused group">
            {seamlessAwards.map((award, index) => (
              <Link
                // Using index as key because of duplication, and strictly safe here since list is static constant
                key={`${award.id}-${index}`}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-amber-500/20 focus:scale-105 outline-none"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={award.image}
                    alt={award.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
