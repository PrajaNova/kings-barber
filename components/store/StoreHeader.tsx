"use client";

import { Search } from "lucide-react";
import { STORE_PAGE_CONTENT } from "##/lib/constants";

interface StoreHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function StoreHeader({
  searchQuery,
  onSearchChange,
}: StoreHeaderProps) {
  const { header } = STORE_PAGE_CONTENT;

  return (
    <div className="border-b border-white/10 bg-black py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            {header.title}
          </h1>
          <p className="mt-3 text-lg text-gray-400">{header.subtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-4 pl-12 pr-6 text-white placeholder-gray-500 transition-all focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
