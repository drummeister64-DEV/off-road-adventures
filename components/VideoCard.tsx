import Image from "next/image";
import Link from "next/link";
import type { Video } from "@/lib/types";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-slate-900/60 border border-slate-800/40 hover:border-earth-700/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
      {/* Thumbnail with play overlay */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-earth-600/90 group-hover:bg-earth-500 flex items-center justify-center transition-colors shadow-lg">
            <svg
              className="w-6 h-6 text-white translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-earth-300 transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {video.description}
        </p>

        {/* Tags + link */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {video.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          {video.tripSlug && (
            <Link
              href={`/trips/${video.tripSlug}`}
              className="text-xs text-earth-400 hover:text-earth-300 shrink-0 transition-colors"
            >
              View trip →
            </Link>
          )}
        </div>

        <p className="mt-2 text-xs text-slate-600">
          {new Date(video.date).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
