"use client";

import { useMemo, useState } from "react";
import Pagination from "##/components/store/Pagination";
import ProductGrid from "##/components/store/ProductGrid";
import StoreHeader from "##/components/store/StoreHeader";
import StoreSidebar from "##/components/store/StoreSidebar";
import { STORE_PAGE_CONTENT } from "##/lib/constants";

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null,
  );
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");

  const { products, priceRanges } = STORE_PAGE_CONTENT;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    // Filter by price range
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(
          (p) => p.price >= range.min && p.price <= range.max,
        );
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedBrands,
    selectedPriceRange,
    sortBy,
    priceRanges,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: string | null) => {
    setSelectedPriceRange(range);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-black">
      <StoreHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <div className="container mx-auto px-6 py-12 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] ">
          {/* Sidebar - Sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <StoreSidebar
                selectedCategory={selectedCategory}
                selectedBrands={selectedBrands}
                selectedPriceRange={selectedPriceRange}
                sortBy={sortBy}
                onCategoryChange={handleCategoryChange}
                onBrandToggle={handleBrandToggle}
                onPriceRangeChange={handlePriceRangeChange}
                onSortChange={handleSortChange}
              />
            </div>
          </div>

          {/* Mobile Sidebar - Collapsible */}
          <div className="lg:hidden">
            <StoreSidebar
              selectedCategory={selectedCategory}
              selectedBrands={selectedBrands}
              selectedPriceRange={selectedPriceRange}
              sortBy={sortBy}
              onCategoryChange={handleCategoryChange}
              onBrandToggle={handleBrandToggle}
              onPriceRangeChange={handlePriceRangeChange}
              onSortChange={handleSortChange}
            />
          </div>

          {/* Main Content */}
          <div>
            <ProductGrid
              products={filteredProducts}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />

            {filteredProducts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
