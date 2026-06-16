"use client";

import { useState, useMemo } from "react";
import TripCard from "@/components/TripCard";
import type { Trip } from "@/lib/types";

interface TripsClientProps {
  trips: Trip[];
  tags: string[];
}

export default function TripsClient({ trips, tags }: TripsClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      selectedTag
        ? trips.filter((t) => t.tags.includes(selectedTag))
        : trips,
    [trips, selectedTag]
  );

  return (
    <>
      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border transition-all ${
            !selectedTag
              ? "bg-earth-700 text-earth-100 border-earth-600"
              : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-300"
          }`}
        >
          All ({trips.length})
        </button>
        {tags.map((tag) => {
          const count = trips.filter((t) => t.tags.includes(tag)).length;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border transition-all ${
                selectedTag === tag
                  ? "bg-earth-700 text-earth-100 border-earth-600"
                  : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-300"
              }`}
            >
              {tag} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      {selectedTag && (
        <p className="text-sm text-slate-500 mb-6">
          Showing {filtered.length} trip{filtered.length !== 1 ? "s" : ""} tagged &ldquo;
          {selectedTag}&rdquo;
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((trip, i) => (
            <TripCard key={trip.id} trip={trip} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-slate-500">No trips found for &ldquo;{selectedTag}&rdquo;</p>
        </div>
      )}
    </>
  );
}
