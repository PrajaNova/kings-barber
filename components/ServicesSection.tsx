import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_CONTENT } from "##/lib/constants";

export default function ServicesSection() {
  return (
    <section className="bg-black py-5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            {SERVICES_CONTENT.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES_CONTENT.items.map((service) => (
            <div
              key={service.title}
              className="group relative h-[450px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              {/* Background Image */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-amber-500">
                    {service.title}
                  </h3>
                  <p className="line-clamp-2 text-gray-300 transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden">
                    {service.description}
                  </p>
                </div>

                {/* Expanded Details - Animated using grid-rows trick */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="border-t border-white/20 pt-4 text-gray-200 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                      {service.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href={SERVICES_CONTENT.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
          >
            {SERVICES_CONTENT.cta.text}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
