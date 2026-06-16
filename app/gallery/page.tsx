import type { Metadata } from "next";
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
    <div className="pt-16 min-h-screen">
      <div className="bg-slate-900/50 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-earth-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Photos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Gallery
          </h1>
          <p className="text-slate-400">
            {photos.length} photos across {trips.length} trips.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PhotoGrid photos={photos} masonry />
      </div>
    </div>
  );
}
