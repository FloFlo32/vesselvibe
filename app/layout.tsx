import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VesselVibe — Boat Bookings & On-Water Events",
  description: "Discover, book, and experience the water. Browse premium vessels and exclusive on-water events with VesselVibe.",
  keywords: ["boat booking", "boat rental", "water events", "yacht charter", "sailing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
