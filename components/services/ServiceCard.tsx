import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    price: number;
    durationLabel: string;
    image: string;
    description: string;
    category: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10">
      {/* Image */}
      <Link href={`/book?service=${service.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-black">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/book?service=${service.id}`}>
          <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-amber-500">
            {service.title}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-gray-400">
          {service.description}
        </p>

        {/* Meta Info */}
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{service.durationLabel}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-500">
            ${service.price}
          </span>
          <Link
            href={`/book?service=${service.id}`}
            className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
