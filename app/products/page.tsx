import CategoryFilter from "##/components/product/CategoryFilter";
import { ProductCard } from "##/components/product/ProductCard";

const products = [
  { id: 1, name: "Argan Blend Shave Oil", price: 52.00, image: "https://kingsbarber.com.sg/wp-content/uploads/2016/07/Argan-Oil-100ml-JPEG-600x600.jpg", category: "Oils" },
  { id: 2, name: "Mattify Shaping Paste", price: 38.00, image: "https://kingsbarber.com.sg/wp-content/uploads/2016/07/Argan-Oil-100ml-JPEG-600x600.jpg", category: "Pomades" },
  { id: 3, name: "Preptonic Thickening Spray", price: 34.00, image: "https://kingsbarber.com.sg/wp-content/uploads/2016/07/Argan-Oil-100ml-JPEG-600x600.jpg", category: "Sprays" },
  { id: 4, name: "Recharge Moisture Shampoo", price: 42.00, image: "https://kingsbarber.com.sg/wp-content/uploads/2016/07/Argan-Oil-100ml-JPEG-600x600.jpg", category: "Shampoos" },
  { id: 5, name: "Ruck Matte Styling Putty", price: 38.00, image: "https://kingsbarber.com.sg/wp-content/uploads/2016/07/Argan-Oil-100ml-JPEG-600x600.jpg", category: "Styling" },
  { id: 6, name: "Pucka Grooming Crème", price: 36.00, image: "https://kingsbarber.com.sg/wp-content/uploads/2016/07/Argan-Oil-100ml-JPEG-600x600.jpg", category: "Oils" },
];

const ProductPage = () => {
  return (
   <section id="products" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-outfit text-copper uppercase tracking-[0.3em] text-sm mb-4">
            Our Collection
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-6">
            PREMIUM PRODUCTS
          </h2>
          <p className="font-outfit text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated selection of professional-grade grooming essentials
          </p>
        </div>

        <CategoryFilter/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
  );
};

export default ProductPage;
