"use client";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  { name: "Miami Beach", count: 142, region: "Florida" },
  { name: "Marina del Rey", count: 89, region: "California" },
  { name: "Newport Harbor", count: 67, region: "Rhode Island" },
  { name: "San Diego Bay", count: 103, region: "California" },
  { name: "Chesapeake Bay", count: 58, region: "Maryland" },
  { name: "Key West", count: 74, region: "Florida" },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-24" style={{ background: "oklch(0.97 0.008 155)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl font-bold tracking-tight mb-4"
              style={{ color: "oklch(0.18 0.02 155)" }}
            >
              Set sail from
              <br />your nearest shore
            </h2>
            <p className="text-lg mb-8 max-w-[48ch]" style={{ color: "oklch(0.35 0.02 155)" }}>
              With vessels in 40+ coastal destinations across the US, your next adventure is closer than you think.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {destinations.map((dest) => (
                <button
                  key={dest.name}
                  className="group flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: "oklch(0.99 0.004 155)",
                    border: "1px solid oklch(0.88 0.015 155)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.70 0.14 155 / 0.6)";
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.96 0.018 155)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.88 0.015 155)";
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.99 0.004 155)";
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.95 0.025 155)" }}
                  >
                    <MapPin size={14} style={{ color: "oklch(0.55 0.18 155)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate" style={{ color: "oklch(0.18 0.02 155)" }}>
                      {dest.name}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.50 0.015 155)" }}>
                      {dest.count} vessels · {dest.region}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              className="flex items-center gap-2 mt-6 text-sm font-medium"
              style={{ color: "oklch(0.55 0.18 155)" }}
            >
              View all 40+ destinations
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Map visual */}
          <div
            className="relative rounded-3xl overflow-hidden h-[480px]"
            style={{
              background: "linear-gradient(145deg, oklch(0.55 0.18 155 / 0.08) 0%, oklch(0.38 0.12 200 / 0.12) 100%)",
              border: "1px solid oklch(0.88 0.015 155)",
            }}
          >
            {/* Stylized US coastline dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Ocean background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse at 50% 60%, oklch(0.38 0.12 200 / 0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Grid lines */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px"
                    style={{
                      top: `${15 + i * 14}%`,
                      background: "oklch(0.55 0.18 155 / 0.06)",
                    }}
                  />
                ))}

                {/* Location pins */}
                {[
                  { x: "75%", y: "55%", label: "Miami" },
                  { x: "25%", y: "30%", label: "Newport" },
                  { x: "20%", y: "45%", label: "Chesapeake" },
                  { x: "15%", y: "50%", label: "San Diego", right: true },
                  { x: "18%", y: "35%", label: "Marina del Rey", right: true },
                  { x: "72%", y: "72%", label: "Key West" },
                ].map((pin, i) => (
                  <div
                    key={pin.label}
                    className="absolute flex flex-col items-center"
                    style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
                  >
                    <div
                      className="w-3 h-3 rounded-full shadow-lg"
                      style={{
                        background: "oklch(0.55 0.18 155)",
                        boxShadow: `0 0 0 3px oklch(0.55 0.18 155 / 0.20), 0 0 0 6px oklch(0.55 0.18 155 / 0.08)`,
                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                    <div
                      className="mt-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold whitespace-nowrap"
                      style={{
                        background: "oklch(0.99 0.004 155)",
                        color: "oklch(0.35 0.02 155)",
                        boxShadow: "0 1px 4px oklch(0.18 0.02 155 / 0.10)",
                      }}
                    >
                      {pin.label}
                    </div>
                  </div>
                ))}

                {/* Central label */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <div
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: "oklch(0.55 0.18 155 / 0.10)",
                      color: "oklch(0.40 0.16 155)",
                      border: "1px solid oklch(0.70 0.14 155 / 0.30)",
                    }}
                  >
                    40+ US coastal destinations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
