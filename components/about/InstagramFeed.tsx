import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_PAGE_CONTENT } from "##/lib/constants";

export default function InstagramFeed() {
  const { instagram } = ABOUT_PAGE_CONTENT;

  return (
    <section className="bg-neutral-900 py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <div className="mb-12">
          <Link
            href={instagram.link}
            target="_blank"
            className="group inline-flex items-center gap-3 text-2xl font-bold text-white transition-colors hover:text-amber-500"
          >
            <Instagram className="h-8 w-8" />
            <span>{instagram.title}</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {instagram.images.map((src, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: Static list of images without IDs
              key={index}
              href={instagram.link}
              target="_blank"
              className="group relative aspect-square overflow-hidden rounded-lg bg-black"
            >
              <Image
                src={src}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
