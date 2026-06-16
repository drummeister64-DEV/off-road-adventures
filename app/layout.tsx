import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AZ Overland Adventures",
    template: "%s | AZ Overland Adventures",
  },
  description:
    "Documenting overlanding trips, trail runs, and backcountry exploration across the American Southwest.",
  keywords: ["overlanding", "off-road", "Arizona", "Jeep", "4x4", "camping", "adventure"],
  openGraph: {
    siteName: "AZ Overland Adventures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
