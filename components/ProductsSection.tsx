import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_CONTENT } from "##/lib/constants";

export default function ProductsSection() {
  return (
    <section className="bg-black border-t border-white/5 py-5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            {PRODUCTS_CONTENT.header.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {PRODUCTS_CONTENT.header.tagline}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        {/* Featured Products Grid */}
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS_CONTENT.featured.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-500">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-bold text-amber-500">
                      {product.price}
                    </span>
                    <button
                      type="button"
                      className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-amber-500 hover:text-black"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="flex justify-center">
          <Link
            href={PRODUCTS_CONTENT.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
          >
            <ShoppingBag className="h-5 w-5" />
            {PRODUCTS_CONTENT.cta.text}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
