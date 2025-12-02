"use client"
import { useState } from "react";
import Button from "##/components/ui/button"

const categories = ["All Products", "Oils", "Pomades", "Sprays", "Shampoos", "Styling"];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={`
            font-outfit font-medium px-6 py-2 rounded-full transition-all duration-300
            ${activeCategory === category 
              ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" 
              : "border-border text-foreground hover:border-primary hover:text-primary"
            }
          `}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter