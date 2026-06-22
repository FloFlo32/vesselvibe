"use client";
import { Star, Users, Anchor, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

const vessels = [
  {
    name: "Serenity Sails",
    type: "Sailing Yacht",
    capacity: 8,
    rating: 4.97,
    reviews: 124,
    price: 480,
    location: "Marina del Rey, CA",
    tags: ["Sunset cruises", "Day sailing"],
    highlight: "Featured",
    color: "oklch(0.55 0.18 155)",
  },
  {
    name: "Azure Dreamer",
    type: "Motor Yacht",
    capacity: 12,
    rating: 4.92,
    reviews: 89,
    price: 820,
    location: "Miami Beach, FL",
    tags: ["Corporate events", "Parties"],
    highlight: null,
    color: "oklch(0.40 0.16 155)",
  },
  {
    name: "Pacific Wanderer",
    type: "Catamaran",
    capacity: 16,
    rating: 4.88,
    reviews: 211,
    price: 650,
    location: "San Diego, CA",
    tags: ["Snorkeling", "Family trips"],
    highlight: "Top rated",
    color: "oklch(0.38 0.12 200)",
  },
];

export default function VesselsSection() {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (i: number) => {
    setLiked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <section id="vessels" className="py-24" style={{ background: "oklch(0.97 0.008 155)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="text-4xl font-bold tracking-tight mb-3"
              style={{ color: "oklch(0.18 0.02 155)" }}
            >
              Featured vessels
            </h2>
            <p className="text-lg max-w-[52ch]" style={{ color: "oklch(0.35 0.02 155)" }}>
              Handpicked by our curation team. Every vessel verified, every captain vetted.
            </p>
          </div>
          <button
            className="hidden md:flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "oklch(0.55 0.18 155)" }}
          >
            View all vessels
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vessels.map((vessel, i) => (
            <div
              key={vessel.name}
              className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.99 0.004 155)",
                border: "1px solid oklch(0.88 0.015 155)",
                boxShadow: "0 2px 8px oklch(0.18 0.02 155 / 0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px oklch(0.18 0.02 155 / 0.10), 0 4px 12px oklch(0.55 0.18 155 / 0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px oklch(0.18 0.02 155 / 0.04)";
              }}
            >
              {/* Vessel illustration */}
              <div
                className="relative h-48 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${vessel.color} 0%, oklch(0.38 0.12 200) 100%)` }}
              >
                {vessel.highlight && (
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
                    style={{ background: "oklch(0 0 0 / 0.25)", backdropFilter: "blur(4px)" }}
                  >
                    {vessel.highlight}
                  </div>
                )}
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                  style={{ background: "oklch(0 0 0 / 0.20)", backdropFilter: "blur(4px)" }}
                  onClick={() => toggleLike(i)}
                >
                  <Heart
                    size={14}
                    className="transition-all duration-150"
                    style={{
                      color: liked.includes(i) ? "#ff4d6d" : "white",
                      fill: liked.includes(i) ? "#ff4d6d" : "none",
                    }}
                  />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl opacity-80" style={{ filter: "drop-shadow(0 4px 12px oklch(0 0 0 / 0.3))" }}>
                    {["⛵", "🚤", "⛵"][i]}
                  </div>
                </div>
                {/* Ripple bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-12"
                  style={{
                    background: "linear-gradient(180deg, transparent, oklch(0 0 0 / 0.15))",
                  }}
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="font-semibold text-base mb-0.5"
                      style={{ color: "oklch(0.18 0.02 155)" }}
                    >
                      {vessel.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Anchor size={12} style={{ color: "oklch(0.55 0.18 155)" }} />
                      <span className="text-xs" style={{ color: "oklch(0.50 0.015 155)" }}>
                        {vessel.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold" style={{ color: "oklch(0.18 0.02 155)" }}>
                      ${vessel.price}
                      <span className="text-xs font-normal" style={{ color: "oklch(0.50 0.015 155)" }}>/day</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4 text-sm" style={{ color: "oklch(0.50 0.015 155)" }}>
                  <div className="flex items-center gap-1">
                    <Star size={13} style={{ color: "oklch(0.70 0.14 60)", fill: "oklch(0.70 0.14 60)" }} />
                    <span className="font-medium" style={{ color: "oklch(0.18 0.02 155)" }}>{vessel.rating}</span>
                    <span>({vessel.reviews})</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Users size={13} />
                    <span>Up to {vessel.capacity}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {vessel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: "oklch(0.95 0.025 155)",
                        color: "oklch(0.40 0.16 155)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                  style={{
                    background: "oklch(0.95 0.025 155)",
                    color: "oklch(0.40 0.16 155)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.18 155)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.95 0.025 155)";
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.40 0.16 155)";
                  }}
                >
                  View & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
