"use client";

import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  brand: string;
  featured: boolean;
}

interface ProductGridProps {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
}

export default function ProductGrid({
  products,
  currentPage,
  itemsPerPage,
}: ProductGridProps) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of{" "}
          {products.length} products
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {displayedProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl text-gray-400">No products found</p>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your filters
          </p>
        </div>
      )}
    </div>
  );
}
