import type { Metadata } from "next";
import Image from "next/image";
import { getAllPhotos, getAllTrips } from "@/lib/data";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery from all off-road trips — deserts, canyons, mountain forests, and everything in between.",
};

export default function GalleryPage() {
  const photos = getAllPhotos();
  const trips = getAllTrips();

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Arizona overlanding trail"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-20">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Photos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Gallery
          </h1>
          <p className="text-slate-300">
            {photos.length} photos across {trips.length} trips.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PhotoGrid photos={photos} masonry />
        </div>
      </div>
    </div>
  );
}
