"use client";

import { SERVICES_PAGE_CONTENT } from "##/lib/constants";

interface ServicesSidebarProps {
  selectedCategory: string;
  selectedPriceRange: string | null;
  selectedDuration: string | null;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string | null) => void;
  onDurationChange: (duration: string | null) => void;
  onSortChange: (sort: string) => void;
}

export default function ServicesSidebar({
  selectedCategory,
  selectedPriceRange,
  selectedDuration,
  sortBy,
  onCategoryChange,
  onPriceRangeChange,
  onDurationChange,
  onSortChange,
}: ServicesSidebarProps) {
  const { categories, priceRanges, durationOptions, sortOptions } =
    SERVICES_PAGE_CONTENT;

  return (
    <aside className="space-y-8">
      {/* Sort Options */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        >
          {sortOptions.map((option) => (
            <option
              key={option.id}
              value={option.id}
              className="bg-neutral-900"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-all ${
                selectedCategory === category.id
                  ? "bg-amber-500/20 text-amber-500"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{category.name}</span>
              <span className="text-sm">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Duration</h3>
        <div className="space-y-2">
          {durationOptions.map((duration) => (
            <label
              key={duration.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-all hover:bg-white/5 hover:text-white"
            >
              <input
                type="radio"
                name="duration"
                checked={selectedDuration === duration.id}
                onChange={() => onDurationChange(duration.id)}
                className="h-4 w-4 border-white/20 bg-white/5 text-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
              <span>{duration.label}</span>
            </label>
          ))}
          <button
            type="button"
            onClick={() => onDurationChange(null)}
            className="w-full rounded-lg px-4 py-2 text-left text-sm text-amber-500 hover:bg-white/5"
          >
            Clear Filter
          </button>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-all hover:bg-white/5 hover:text-white"
            >
              <input
                type="radio"
                name="priceRange"
                checked={selectedPriceRange === range.id}
                onChange={() => onPriceRangeChange(range.id)}
                className="h-4 w-4 border-white/20 bg-white/5 text-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
              <span>{range.label}</span>
            </label>
          ))}
          <button
            type="button"
            onClick={() => onPriceRangeChange(null)}
            className="w-full rounded-lg px-4 py-2 text-left text-sm text-amber-500 hover:bg-white/5"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </aside>
  );
}
