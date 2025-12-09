"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
      {/* Items Per Page */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-400">Show:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-all focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        >
          <option value={12} className="bg-neutral-900">
            12
          </option>
          <option value={24} className="bg-neutral-900">
            24
          </option>
          <option value={48} className="bg-neutral-900">
            48
          </option>
        </select>
        <span className="text-sm text-gray-400">per page</span>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={`page-${page}`}
              type="button"
              onClick={() => onPageChange(page)}
              className={`min-w-[40px] rounded-lg px-4 py-2 font-medium transition-all ${
                currentPage === page
                  ? "bg-amber-500 text-black"
                  : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {page}
            </button>
          ) : (
            // biome-ignore lint/suspicious/noArrayIndexKey: Ellipsis are static UI elements
            <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
              {page}
            </span>
          ),
        )}

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
