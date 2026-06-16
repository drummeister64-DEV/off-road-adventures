import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllTrips, getTripBySlug } from "@/lib/data";
import PhotoGrid from "@/components/PhotoGrid";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllTrips().map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const trip = getTripBySlug(params.slug);
  if (!trip) return {};
  return {
    title: trip.title,
    description: trip.summary,
    openGraph: {
      images: [{ url: trip.coverImage }],
    },
  };
}

export default function TripDetailPage({ params }: Props) {
  const trip = getTripBySlug(params.slug);
  if (!trip) notFound();

  const difficultyClass = `difficulty-${trip.stats.difficulty.toLowerCase()}`;

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero banner */}
      <div className="relative h-[55vh] min-h-[400px]">
        <Image
          src={trip.coverImage}
          alt={trip.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          {...(trip.coverImageBlur ? { placeholder: "blur" as const, blurDataURL: trip.coverImageBlur } : {})}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/trips"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Trips
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {trip.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
            {trip.title}
          </h1>
          <p className="text-slate-400 flex items-center gap-1.5 text-sm">
            <svg className="w-4 h-4 text-earth-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {trip.location} &mdash;{" "}
            {new Date(trip.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Trip write-up */}
            <section>
              <h2 className="section-heading mb-5">Trip Report</h2>
              <div className="prose-custom space-y-4">
                {trip.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Photo gallery */}
            <section>
              <h2 className="section-heading mb-5">Photos</h2>
              <PhotoGrid photos={trip.photos} />
            </section>

          </div>

          {/* Sidebar — stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Stats card */}
              <div className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                  Trip Stats
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      label: "Miles",
                      value: `${trip.stats.miles} mi`,
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      ),
                    },
                    {
                      label: "Elevation Gain",
                      value: `${trip.stats.elevationGain.toLocaleString()} ft`,
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      ),
                    },
                    {
                      label: "Duration",
                      value: trip.stats.duration,
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Vehicle",
                      value: trip.stats.vehicle,
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      ),
                    },
                  ].map((stat) => (
                    <li key={stat.label} className="flex items-start gap-3">
                      <span className="mt-0.5 text-earth-500 shrink-0">{stat.icon}</span>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-sm text-white font-medium">{stat.value}</p>
                      </div>
                    </li>
                  ))}

                  {/* Difficulty */}
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-earth-500 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Difficulty</p>
                      <span className={`difficulty-badge ${difficultyClass}`}>
                        {trip.stats.difficulty}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trip.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/trips?tag=${encodeURIComponent(tag)}`}
                      className="tag-pill"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back link */}
              <Link
                href="/trips"
                className="flex items-center gap-2 text-sm text-earth-400 hover:text-earth-300 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all trips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
