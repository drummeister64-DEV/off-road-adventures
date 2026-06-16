import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-earth-400 text-lg">&#9651;</span>
              <span className="font-bold text-white text-sm uppercase tracking-wide">
                AZ Overland Adventures
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Documenting overlanding trips, trail runs, and backcountry
              exploration across the American Southwest.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/trips", label: "All Trips" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/videos", label: "Videos" },
                { href: "/about", label: "About & Gear" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-earth-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Info
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              All routes documented are public lands. Always check current
              conditions, carry recovery gear, and leave no trace.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800/40 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} AZ Overland Adventures. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
