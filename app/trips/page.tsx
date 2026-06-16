import type { Metadata } from "next";
import { getAllTrips, getAllTags } from "@/lib/data";
import TripsClient from "./TripsClient";

export const metadata: Metadata = {
  title: "All Trips",
  description:
    "Browse all documented off-road trips, trail runs, and overlanding adventures — filterable by location, vehicle, terrain type, and more.",
};

export default function TripsPage() {
  const trips = getAllTrips();
  const tags = getAllTags();

  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="bg-slate-900/50 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-earth-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Log Book
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            All Trips
          </h1>
          <p className="text-slate-400 max-w-xl">
            Every documented run — click a tag below to filter by terrain, location, or vehicle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <TripsClient trips={trips} tags={tags} />
      </div>
    </div>
  );
}
