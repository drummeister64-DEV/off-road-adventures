import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Trail footage, gear reviews, and timelapse sequences from off-road adventures across the Southwest.",
};

export default function VideosPage() {
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
            Media
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Videos
          </h1>
          <p className="text-slate-300">
            Trail footage and trip videos coming soon.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-slate-500 text-lg">Check back soon — videos are on the way.</p>
        </div>
      </div>
    </div>
  );
}
