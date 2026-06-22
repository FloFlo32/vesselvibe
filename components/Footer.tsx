"use client";
import { Anchor, Globe, Share2, Mail } from "lucide-react";

const links = {
  Company: ["About", "Careers", "Press", "Blog"],
  Product: ["How it works", "Pricing", "Safety", "Reviews"],
  Support: ["Help center", "Contact", "Cancellations", "Insurance"],
  Legal: ["Privacy", "Terms", "Cookie policy", "Licenses"],
};

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.18 0.02 155)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "oklch(0.55 0.18 155)" }}
              >
                <Anchor size={16} className="text-white" />
              </div>
              <span className="font-semibold text-base" style={{ color: "oklch(0.94 0.012 155)" }}>
                VesselVibe
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.55 0.015 155)" }}>
              The premium marketplace for boat bookings and on-water events.
            </p>
            <div className="flex gap-3">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                  style={{
                    background: "oklch(0.28 0.02 155)",
                    color: "oklch(0.65 0.010 155)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.18 155)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.28 0.02 155)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.010 155)";
                  }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "oklch(0.55 0.015 155)" }}>
                {category}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-150"
                      style={{ color: "oklch(0.45 0.012 155)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "oklch(0.80 0.08 155)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "oklch(0.45 0.012 155)";
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid oklch(0.28 0.02 155)" }}
        >
          <p className="text-sm" style={{ color: "oklch(0.40 0.012 155)" }}>
            © 2026 VesselVibe, Inc. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "oklch(0.40 0.012 155)" }}>
            Made with care for those who love the water.
          </p>
        </div>
      </div>
    </footer>
  );
}
