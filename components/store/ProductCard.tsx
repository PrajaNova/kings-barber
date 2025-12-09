import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10">
      {/* Image */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-black">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-amber-500">
            {product.name}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-gray-400">
          {product.description}
        </p>

        {/* Price and Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-500">
            ${product.price}
          </span>
          <button
            type="button"
            className="rounded-full bg-amber-500 p-3 text-black transition-all hover:bg-amber-400 hover:scale-110 active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
