import Image from "next/image";
import Link from "next/link";
import type { Trip } from "@/lib/types";

interface TripCardProps {
  trip: Trip;
  priority?: boolean;
}

export default function TripCard({ trip, priority = false }: TripCardProps) {
  const difficultyClass = `difficulty-${trip.stats.difficulty.toLowerCase()}`;

  return (
    <Link
      href={`/trips/${trip.slug}`}
      className="group block rounded-xl overflow-hidden bg-slate-900/60 border border-slate-800/40 hover:border-earth-700/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5"
    >
      {/* Cover image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={trip.coverImage}
          alt={trip.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          {...(trip.coverImageBlur ? { placeholder: "blur" as const, blurDataURL: trip.coverImageBlur } : {})}
          priority={priority}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3">
          <span className={`difficulty-badge ${difficultyClass}`}>
            {trip.stats.difficulty}
          </span>
        </div>

        {/* Stats strip at bottom of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-3 text-xs text-slate-300">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {trip.stats.miles} mi
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {trip.stats.elevationGain.toLocaleString()} ft
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-white text-base leading-snug group-hover:text-earth-300 transition-colors">
            {trip.title}
          </h3>
        </div>

        <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
          <svg className="w-3 h-3 text-earth-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {trip.location}
        </p>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {trip.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {trip.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="mt-3 text-xs text-slate-600">
          {new Date(trip.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}
