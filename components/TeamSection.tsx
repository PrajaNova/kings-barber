import { ArrowRight, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TEAM_CONTENT } from "##/lib/constants";

export default function TeamSection() {
  return (
    <section className="bg-black py-5 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            {TEAM_CONTENT.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{TEAM_CONTENT.tagline}</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        {/* Team Grid */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_CONTENT.members.map((member) => (
            <div
              key={member.name}
              className="group relative h-[320px] w-full max-w-[260px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="mb-1 text-sm font-bold uppercase tracking-widest text-amber-500">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {member.name}
                  </h3>

                  {/* Social Icons */}
                  <div className="flex gap-4 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                    <Link
                      href={member.socials.instagram}
                      className="rounded-full bg-white/10 p-2 text-white hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.socials.facebook}
                      className="rounded-full bg-white/10 p-2 text-white hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href={TEAM_CONTENT.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
          >
            {TEAM_CONTENT.cta.text}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
