import { Facebook, Instagram, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TEAM_CONTENT } from "##/lib/constants";

export default function AboutTeam() {
  const { members, title, tagline } = TEAM_CONTENT;

  return (
    <section id="teams" className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{tagline}</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all hover:border-amber-500/30"
            >
              {/* Image Side */}
              <div className="relative h-64 md:h-auto md:w-2/5 shrink-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-black/50" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center p-6 md:w-3/5">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs font-medium text-gray-500 mb-3 bg-white/5 inline-block px-2 py-1 rounded">
                    {member.experience}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                  <div
                    className="flex items-center gap-2 text-gray-400 text-sm"
                    title="Customers Served"
                  >
                    <Users className="h-4 w-4 text-amber-500" />
                    <span>{member.customersServed} Served</span>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={member.socials.instagram}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.socials.facebook}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
