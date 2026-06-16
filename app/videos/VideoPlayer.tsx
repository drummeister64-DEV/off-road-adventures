"use client";

import type { Video } from "@/lib/types";

interface VideoPlayerProps {
  video: Video;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800/40">
      <div className="relative aspect-video">
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
        <p className="text-slate-400 text-sm">{video.description}</p>
      </div>
    </div>
  );
}
