import { ArrowRight, ShoppingBag } from "lucide-react";
import Button from "##/components/ui/Button";

const products = [
  {
    name: "Matte Pomade",
    price: "$28",
    image: "/assets/images/product-1.jpg",
    tag: "Best Seller",
  },
  {
    name: "Beard Oil",
    price: "$22",
    image: "/assets/images/product-2.jpg",
    tag: "New Arrival",
  },
  {
    name: "Texture Spray",
    price: "$24",
    image: "/assets/images/product-3.jpg",
    tag: "Trending",
  },
  {
    name: "Shaving Cream",
    price: "$30",
    image: "/assets/images/product-4.jpg",
    tag: "Classic",
  },
];

const ProductHighlights = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-bebas text-5xl md:text-6xl mb-4">
              Premium Essentials
            </h2>
            <p className="font-outfit text-muted-foreground text-lg">
              Curated grooming products for the modern gentleman.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {product.tag}
                </div>
                {/* Placeholder for image */}
                <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                  <ShoppingBag size={48} className="opacity-20" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bebas text-2xl mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-outfit font-semibold text-primary">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
