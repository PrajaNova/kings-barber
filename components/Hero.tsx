import { Award, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_PHONE_NUMBER,
  CONTACT_WHATSAPP_NUMBER,
  HERO_CONTENT,
} from "##/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-[750px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/assets/images/hero.jpg"
          alt={HERO_CONTENT.imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay - Darker at bottom/left for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          {/* Award Badge */}
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md transition-transform hover:scale-105">
            <div className="flex items-center justify-center rounded-full bg-amber-500/20 p-1">
              <Award className="h-5 w-5 text-amber-400" />
            </div>
            <span className="text-sm font-medium tracking-wide text-white/90">
              {HERO_CONTENT.certification}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {HERO_CONTENT.title}
          </h1>

          {/* Tagline */}
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            {HERO_CONTENT.tagline}
          </p>

          {/* CTA Section */}
          <div className="pt-8 space-y-4">
            <p className="text-xl font-medium text-amber-500">
              {HERO_CONTENT.cta.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
                <Link
                  href={`tel:${CONTACT_PHONE_NUMBER}`}
                  className="rounded-full px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Call Us"
                >
                  <Phone className="h-6 w-6" />
                </Link>
                <Link
                  href={`https://wa.me/${CONTACT_WHATSAPP_NUMBER.replace("+", "")}`}
                  className="rounded-full px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="WhatsApp Us"
                >
                  <MessageCircle className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
