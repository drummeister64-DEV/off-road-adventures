export interface TripPhoto {
  id: string;
  url: string;
  caption: string;
  width: number;
  height: number;
}

export interface TripStats {
  miles: number;
  elevationGain: number;
  difficulty: "Easy" | "Moderate" | "Hard" | "Expert";
  duration: string;
  vehicle: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  coverImage: string;
  coverImageBlur: string;
  tags: string[];
  stats: TripStats;
  body: string;
  photos: TripPhoto[];
  videoEmbed: string;
  videoTitle: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
  date: string;
  tags: string[];
  tripSlug: string | null;
}
