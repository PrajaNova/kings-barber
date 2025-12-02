import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Button from "##/components/ui/button"

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden border-border bg-card hover-lift card-glow flex flex-col space-y-1.5 p-6">
      <div className="aspect-square overflow-hidden bg-charcoal">
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-outfit uppercase tracking-widest text-copper mb-2">{category}</p>
        <h3 className="font-outfit font-semibold text-foreground mb-3 text-lg">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bebas text-gradient">${price.toFixed(2)}</span>
          <Button 
            size="icon" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
