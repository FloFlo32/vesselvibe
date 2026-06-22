"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Birthday celebration",
    rating: 5,
    text: "We chartered the Azure Dreamer for my 30th and it exceeded every expectation. The crew was incredible, the vessel was immaculate. VesselVibe made booking completely effortless.",
    location: "Miami, FL",
  },
  {
    name: "Marcus Rivera",
    role: "Corporate retreat",
    rating: 5,
    text: "Used VesselVibe for our Q3 team event. Having 12 people on the water for the afternoon — the team bonding was unlike anything we've done before. Already booked for Q4.",
    location: "San Diego, CA",
  },
  {
    name: "Emma & James",
    role: "Anniversary trip",
    rating: 5,
    text: "Surprised my husband with a sunset sailing charter. The whole process from finding the vessel to boarding took minutes. The captain even had champagne ready. Magical.",
    location: "Newport, RI",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24" style={{ background: "oklch(0.94 0.012 155)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            className="text-4xl font-bold tracking-tight mb-3"
            style={{ color: "oklch(0.18 0.02 155)" }}
          >
            Stories from the water
          </h2>
          <p className="text-lg" style={{ color: "oklch(0.35 0.02 155)" }}>
            Real reviews from real sailors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl"
              style={{
                background: "oklch(0.99 0.004 155)",
                border: "1px solid oklch(0.88 0.015 155)",
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    style={{ color: "oklch(0.70 0.14 60)", fill: "oklch(0.70 0.14 60)" }}
                  />
                ))}
              </div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.28 0.02 155)" }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "oklch(0.88 0.05 155)",
                    color: "oklch(0.40 0.16 155)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "oklch(0.18 0.02 155)" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.50 0.015 155)" }}>
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
