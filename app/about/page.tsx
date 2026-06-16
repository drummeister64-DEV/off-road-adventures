import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind AZ Overland Adventures — who we are, why we wheel, and what's in the rig.",
};

const gear = [
  {
    category: "Navigation & Comms",
    items: [
      { name: "onX Offroad (iPhone)", note: "Primary trail navigation" },
      { name: "CB Radios", note: "All rigs carry the older CB radios" },
    ],
  },
  {
    category: "Camp",
    items: [
      { name: "Wildfinder Rooftop Tent", note: "" },
      { name: "WildNest Rooftop Tent", note: "" },
      { name: "Yakima Rooftop Tent", note: "" },
      { name: "Yakima Awning", note: "" },
      { name: "JetBoil Cook System", note: "" },
      { name: "Blackstone Cook System", note: "" },
      { name: "Propane FirePits", note: "" },
      { name: "Dometic Fridge/Freezer", note: "12V DC + 120V AC" },
      { name: "F40 Fridge/Freezer", note: "12V DC + 120V AC" },
      { name: "Freespirit Overland Trailer", note: "Power added (Inverter, Solar" },
      { name: "Military Overland Trailer", note: "Power added (Inverter, Solar" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1600&q=80"
          alt="Off-road camp at sunset"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <p className="text-earth-500 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            The Story
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            About This Site
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main copy */}
          <div className="lg:col-span-2 space-y-6 text-slate-300 leading-relaxed">
            <p>
              AZ Overland Adventures started as a personal way to document our travels across
              Arizona&apos;s backcountry. What began as a trip log has grown into a collection
              of trails, campsites, and stories from some of the most diverse off-road terrain
              in the country.
            </p>
            <p>
              From the cactus-filled landscapes of the Sonoran Desert to the cool pine forests
              of the Mogollon Rim, Arizona offers endless opportunities for exploration. These
              places deserve more than a simple pin on a map. They deserve to be experienced,
              documented, and shared with fellow adventurers.
            </p>
            <p>
              Our trail rigs include a 2023 Jeep Wrangler Rubicon EcoDiesel, a 2021 Jeep
              Gladiator EcoDiesel, and a 2009 Toyota Tacoma 4x4. Each has carried us to remote
              campsites, scenic overlooks, and unforgettable Arizona destinations.
            </p>
            <p>
              If you see us on the trail, don&apos;t be a stranger. Give us a wave, stop and
              say hello, and share your own favorite places to explore.
            </p>
          </div>

        </div>

        {/* Gear list */}
        <div className="mt-16">
          <h2 className="section-heading mb-8">Gear Locker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gear.map((section) => (
              <div
                key={section.category}
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-earth-500 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2">
                      <span className="text-earth-700 mt-1 shrink-0">&#9654;</span>
                      <div>
                        <p className="text-sm text-slate-200">{item.name}</p>
                        {item.note && (
                          <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
