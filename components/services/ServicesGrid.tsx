"use client";

import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  title: string;
  price: number;
  durationLabel: string;
  image: string;
  description: string;
  category: string;
  duration: number;
  featured: boolean;
}

interface ServicesGridProps {
  services: Service[];
  currentPage: number;
  itemsPerPage: number;
}

export default function ServicesGrid({
  services,
  currentPage,
  itemsPerPage,
}: ServicesGridProps) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedServices = services.slice(startIndex, endIndex);

  return (
    <div>
      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, services.length)} of{" "}
          {services.length} services
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Empty State */}
      {displayedServices.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl text-gray-400">No services found</p>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your filters
          </p>
        </div>
      )}
    </div>
  );
}
