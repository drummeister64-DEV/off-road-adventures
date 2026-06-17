import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllTrips } from "@/lib/data";
import TripCard from "@/components/TripCard";

export const metadata: Metadata = {
  title: "AZ Overland Adventures — Arizona Overlanding & Trail Runs",
  description:
    "Documenting overlanding trips, trail runs, and backcountry exploration across Arizona and the American Southwest.",
};

export default function HomePage() {
  const trips = getAllTrips();
  const latestTrips = trips.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Ponderosa pine forest at dusk in the Arizona mountains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Multi-stop gradient — readable text + rugged feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
          <div className="max-w-2xl">
            <p className="text-earth-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Arizona Overlanding
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Where the
              <br />
              <span className="text-earth-400">pavement ends</span>,
              <br />
              adventure begins.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Trip reports, trail notes, and photo documentation from backcountry
              routes across Arizona and the Southwest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/trips"
                className="inline-flex items-center gap-2 px-6 py-3 bg-earth-600 hover:bg-earth-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-earth-900/40"
              >
                Browse Trips
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-lg border border-slate-700/50 transition-colors backdrop-blur"
              >
                Photo Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-800/60 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 divide-x divide-slate-800/60 text-center">
            {[
              { value: trips.length.toString() + "+", label: "Trips Documented" },
              { value: "167+", label: "Trail Miles" },
              { value: "3", label: "States Covered" },
            ].map((stat) => (
              <div key={stat.label} className="px-4">
                <p className="text-2xl md:text-3xl font-bold text-earth-400">{stat.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest adventures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-earth-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">
              Latest
            </p>
            <h2 className="section-heading">Recent Adventures</h2>
          </div>
          <Link
            href="/trips"
            className="text-sm text-earth-400 hover:text-earth-300 transition-colors font-medium hidden sm:block"
          >
            All trips →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestTrips.map((trip, i) => (
            <TripCard key={trip.id} trip={trip} priority={i === 0} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/trips"
            className="text-sm text-earth-400 hover:text-earth-300 transition-colors font-medium"
          >
            View all trips →
          </Link>
        </div>
      </section>

      {/* Feature callout — videos */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=75"
            alt="Trail scene"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="section-heading mb-4">Watch It Unfold</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            From rocky trails to star-filled skies, explore every adventure through raw trail footage and breathtaking time-lapse sequences.
          </p>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-earth-600 hover:bg-earth-500 text-white font-semibold rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Browse Videos
          </Link>
        </div>
      </section>
    </>
  );
}
