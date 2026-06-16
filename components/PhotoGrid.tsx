"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { TripPhoto } from "@/lib/types";

interface PhotoGridProps {
  photos: (TripPhoto & { tripTitle?: string })[];
  masonry?: boolean;
}

export default function PhotoGrid({ photos, masonry = false }: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = photos.map((p) => ({
    src: p.url,
    alt: p.caption,
    width: p.width,
    height: p.height,
  }));

  const open = useCallback((index: number) => setLightboxIndex(index), []);

  if (masonry) {
    return (
      <>
        <div className="masonry-grid">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className="masonry-item cursor-zoom-in group relative overflow-hidden rounded-lg bg-slate-900"
              onClick={() => open(i)}
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                width={photo.width}
                height={photo.height}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <p className="text-white text-xs px-2 pb-2 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={slides}
        />
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className="cursor-zoom-in group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-900"
            onClick={() => open(i)}
          >
            <Image
              src={photo.url}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
              <p className="text-white text-xs px-3 pb-2 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </>
  );
}
