"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-slate-950/95 backdrop-blur border-b border-slate-800/50 shadow-xl"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            <span className="text-earth-400 text-xl">&#9651;</span>
            <span className="font-bold text-white tracking-wide text-sm uppercase">
              AZ Overland{" "}
              <span className="text-earth-400">Adventures</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                  pathname === l.href
                    ? "text-earth-300 bg-earth-950/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-transform origin-left ${
                  open ? "rotate-45 translate-x-0.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform origin-left ${
                  open ? "-rotate-45 translate-x-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-earth-300 bg-earth-950/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
