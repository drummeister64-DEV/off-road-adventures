import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Trail footage, gear reviews, and timelapse sequences from off-road adventures across the Southwest.",
};

export default function VideosPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-slate-900/50 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-earth-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Media
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Videos
          </h1>
          <p className="text-slate-400">
            Trail footage and trip videos coming soon.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-slate-600 text-lg">Check back soon — videos are on the way.</p>
      </div>
    </div>
  );
}
