"use client";

import { useMemo, useState } from "react";
import ServicesGrid from "##/components/services/ServicesGrid";
import ServicesHeader from "##/components/services/ServicesHeader";
import ServicesSidebar from "##/components/services/ServicesSidebar";
import Pagination from "##/components/store/Pagination";
import { SERVICES_PAGE_CONTENT } from "##/lib/constants";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null,
  );
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");

  const { services, priceRanges } = SERVICES_PAGE_CONTENT;

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = [...services];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query),
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((s) => s.category === selectedCategory);
    }

    // Filter by duration
    if (selectedDuration) {
      const durationNum = Number.parseInt(selectedDuration, 10);
      if (durationNum === 90) {
        filtered = filtered.filter((s) => s.duration >= 90);
      } else {
        filtered = filtered.filter((s) => s.duration === durationNum);
      }
    }

    // Filter by price range
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(
          (s) => s.price >= range.min && s.price <= range.max,
        );
      }
    }

    // Sort services
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "duration-short":
        filtered.sort((a, b) => a.duration - b.duration);
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [
    services,
    searchQuery,
    selectedCategory,
    selectedDuration,
    selectedPriceRange,
    sortBy,
    priceRanges,
  ]);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: string | null) => {
    setSelectedPriceRange(range);
    setCurrentPage(1);
  };

  const handleDurationChange = (duration: string | null) => {
    setSelectedDuration(duration);
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
      <ServicesHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <div className="container mx-auto px-6 py-12 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar - Sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <ServicesSidebar
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedDuration={selectedDuration}
                sortBy={sortBy}
                onCategoryChange={handleCategoryChange}
                onPriceRangeChange={handlePriceRangeChange}
                onDurationChange={handleDurationChange}
                onSortChange={handleSortChange}
              />
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div className="lg:hidden">
            <ServicesSidebar
              selectedCategory={selectedCategory}
              selectedPriceRange={selectedPriceRange}
              selectedDuration={selectedDuration}
              sortBy={sortBy}
              onCategoryChange={handleCategoryChange}
              onPriceRangeChange={handlePriceRangeChange}
              onDurationChange={handleDurationChange}
              onSortChange={handleSortChange}
            />
          </div>

          {/* Main Content */}
          <div>
            <ServicesGrid
              services={filteredServices}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />

            {filteredServices.length > 0 && (
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
