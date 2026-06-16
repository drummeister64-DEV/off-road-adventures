import tripsData from "@/data/trips.json";
import videosData from "@/data/videos.json";
import type { Trip, Video } from "./types";

// Cast JSON imports — swap these functions bodies for DB queries later
export function getAllTrips(): Trip[] {
  return tripsData as Trip[];
}

export function getTripBySlug(slug: string): Trip | undefined {
  return (tripsData as Trip[]).find((t) => t.slug === slug);
}

export function getAllTags(): string[] {
  const tags = (tripsData as Trip[]).flatMap((t) => t.tags);
  return Array.from(new Set(tags)).sort();
}

export function getAllPhotos() {
  return (tripsData as Trip[]).flatMap((trip) =>
    trip.photos.map((photo) => ({ ...photo, tripSlug: trip.slug, tripTitle: trip.title }))
  );
}

export function getAllVideos(): Video[] {
  return videosData as Video[];
}
