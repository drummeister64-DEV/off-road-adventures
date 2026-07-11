import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="min-h-screen">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Arizona overlanding trail"
            fill
            className="object-cover object-[center_30%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-20">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Log Book
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            All Trips
          </h1>
          <p className="text-slate-300 max-w-xl">
            Every documented run — click a tag below to filter by terrain, location, or vehicle.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <TripsClient trips={trips} tags={tags} />
        </div>
      </div>
    </div>
  );
}
