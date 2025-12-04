import { Package, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "##/components/ui/badge";
import { Button } from "##/components/ui/button";
import { Card, CardContent } from "##/components/ui/card";
import { brands, featuredProducts, productCategories } from "##/lib/schema";
import productsImage from "##/public/assets/generated_images/premium_grooming_products_display.png";

export function Products() {
  return (
    <section id="products" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Shop Products
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Premium Grooming Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're the sole distributor of Lock Stock & Barrel in Singapore and
            Malaysia, plus premium brands like Proraso, Marvis, and Fauvert.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={productsImage}
              alt="Premium grooming products display"
              className="w-full h-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Badge className="mb-3 bg-primary text-primary-foreground">
                <Star className="h-3 w-3 mr-1" />
                Exclusive Distributor
              </Badge>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Lock Stock & Barrel
              </h3>
              <p className="text-gray-300 text-sm max-w-md">
                Premium British men's grooming range. We're proud to be the
                exclusive distributor for Singapore and Malaysia since 2015.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground mb-4">
              Featured Products
            </h3>
            <div className="grid gap-4">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="hover-elevate transition-all duration-300"
                  data-testid={`card-product-${product.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center shrink-0">
                        <Package className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-primary font-medium uppercase tracking-wider">
                          {product.brand}
                        </p>
                        <h4 className="font-semibold text-foreground">
                          {product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span
                          className="font-bold text-lg text-foreground"
                          data-testid={`text-price-${product.id}`}
                        >
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-semibold text-lg text-foreground mb-6 text-center">
            Shop by Category
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {productCategories.map((category) => (
              <Card
                key={category.id}
                className="hover-elevate transition-all duration-300 cursor-pointer group"
                data-testid={`card-category-${category.id}`}
              >
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {category.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div
          className="bg-accent rounded-lg p-6 sm:p-8"
          data-testid="section-brands"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg text-accent-foreground mb-1">
                Our Premium Brands
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                {brands.map((brand) => (
                  <span
                    key={brand.id}
                    className="text-sm text-accent-foreground/80 flex items-center gap-1"
                    data-testid={`text-brand-${brand.id}`}
                  >
                    {brand.name}
                    {brand.exclusive && (
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0"
                      >
                        Exclusive
                      </Badge>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <Button variant="secondary" data-testid="button-visit-shop">
              Visit Our Shop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
