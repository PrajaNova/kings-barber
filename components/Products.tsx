import { Button } from "./Button";

const products = [
  {
    name: "King's Pomade",
    price: "$25.00",
    image:
      "https://images.unsplash.com/photo-1595329086822-81402180315d?q=80&w=1000&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    name: "Beard Oil Elixir",
    price: "$18.00",
    image:
      "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=1000&auto=format&fit=crop",
    tag: "New",
  },
  {
    name: "Matte Clay",
    price: "$22.00",
    image:
      "https://images.unsplash.com/photo-1556228720-1957be83f304?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-secondary font-serif text-lg uppercase tracking-widest mb-2">
              Shop
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">
              Grooming Essentials
            </h3>
          </div>
          <Button variant="outline">View All Products</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              <div className="relative h-[400px] w-full bg-white/5 rounded-lg overflow-hidden mb-4">
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider z-10">
                    {product.tag}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay with Add to Cart */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-serif font-bold mb-1">
                    {product.name}
                  </h4>
                  <p className="text-gray-400 text-sm">Premium Quality</p>
                </div>
                <span className="text-secondary font-bold text-lg">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
