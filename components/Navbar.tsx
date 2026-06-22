"use client";
import { useState, useEffect } from "react";
import { Anchor, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Vessels", href: "#vessels" },
  { label: "Events", href: "#events" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.99 0.004 155 / 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 1px 0 oklch(0.88 0.015 155)"
          : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
            style={{ background: "oklch(0.55 0.18 155)" }}
          >
            <Anchor size={16} className="text-white" />
          </div>
          <span
            className="font-semibold text-base tracking-tight"
            style={{ color: "oklch(0.18 0.02 155)" }}
          >
            VesselVibe
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={{ color: "oklch(0.35 0.02 155)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "oklch(0.94 0.012 155)";
                  (e.target as HTMLElement).style.color = "oklch(0.18 0.02 155)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.color = "oklch(0.35 0.02 155)";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150"
            style={{ color: "oklch(0.35 0.02 155)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.18 155)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "oklch(0.35 0.02 155)";
            }}
          >
            Sign in
          </button>
          <button
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "oklch(0.55 0.18 155)",
              boxShadow: "0 4px 14px oklch(0.55 0.18 155 / 0.30)",
            }}
          >
            Book now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "oklch(0.35 0.02 155)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ background: "oklch(0.99 0.004 155 / 0.98)", backdropFilter: "blur(12px)" }}
        >
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ color: "oklch(0.35 0.02 155)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="w-full text-sm font-semibold py-3 rounded-lg text-white"
            style={{ background: "oklch(0.55 0.18 155)" }}
          >
            Book now
          </button>
        </div>
      )}
    </header>
  );
}
