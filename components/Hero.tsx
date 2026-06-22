"use client";
import { useEffect, useRef } from "react";
import { Search, MapPin, Calendar, Users, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at var(--mouse-x, 30%) var(--mouse-y, 40%),
            oklch(0.88 0.05 155 / 0.5) 0%,
            transparent 70%
          ),
          linear-gradient(160deg,
            oklch(0.96 0.015 155) 0%,
            oklch(0.94 0.020 160) 40%,
            oklch(0.92 0.025 150) 100%
          )
        `,
        "--mouse-x": "30%",
        "--mouse-y": "40%",
      } as React.CSSProperties}
    >
      {/* Decorative water lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              background: `linear-gradient(90deg, transparent 0%, oklch(0.70 0.14 155 / ${0.06 + i * 0.02}) 30%, oklch(0.55 0.18 155 / ${0.10 + i * 0.03}) 50%, oklch(0.70 0.14 155 / ${0.06 + i * 0.02}) 70%, transparent 100%)`,
              transform: `scaleX(${0.4 + i * 0.15})`,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Floating orbs */}
        <div
          className="absolute w-64 h-64 rounded-full"
          style={{
            top: "10%",
            right: "5%",
            background: "radial-gradient(circle, oklch(0.70 0.14 155 / 0.15) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            bottom: "10%",
            left: "-5%",
            background: "radial-gradient(circle, oklch(0.55 0.10 200 / 0.10) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "oklch(0.88 0.05 155)",
              color: "oklch(0.40 0.16 155)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.55 0.18 155)" }} />
            Now live in 40+ destinations
          </div>

          <div className="space-y-4">
            <h1
              className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em]"
              style={{ color: "oklch(0.18 0.02 155)" }}
            >
              The water is
              <br />
              calling your
              <br />
              <span style={{ color: "oklch(0.55 0.18 155)" }}>name.</span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-[48ch]"
              style={{ color: "oklch(0.35 0.02 155)" }}
            >
              Book premium vessels and discover curated on-water experiences.
              From quiet morning sails to sunset celebrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "oklch(0.55 0.18 155)",
                boxShadow: "0 8px 24px oklch(0.55 0.18 155 / 0.30)",
              }}
            >
              Browse vessels
              <ArrowRight size={16} />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-200"
              style={{
                background: "oklch(0.99 0.004 155)",
                color: "oklch(0.35 0.02 155)",
                border: "1px solid oklch(0.88 0.015 155)",
              }}
            >
              <Play size={14} />
              See how it works
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-2">
            {[
              { value: "2,400+", label: "Vessels" },
              { value: "98%", label: "Satisfaction" },
              { value: "40+", label: "Destinations" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: "oklch(0.18 0.02 155)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "oklch(0.50 0.015 155)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — search widget */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "oklch(0.99 0.004 155)",
            border: "1px solid oklch(0.88 0.015 155)",
            boxShadow: "0 20px 60px oklch(0.18 0.02 155 / 0.10), 0 8px 24px oklch(0.55 0.18 155 / 0.08)",
          }}
        >
          {/* Image placeholder with wave pattern */}
          <div
            className="h-52 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, oklch(0.55 0.18 155) 0%, oklch(0.40 0.16 155) 60%, oklch(0.38 0.12 200) 100%)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/90">
                <div className="text-5xl mb-2" style={{ filter: "drop-shadow(0 2px 8px oklch(0 0 0 / 0.3))" }}>
                  ⛵
                </div>
                <div className="text-sm font-medium opacity-80">Find your perfect vessel</div>
              </div>
            </div>
            {/* Wave lines */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  bottom: `${8 + i * 10}px`,
                  background: "oklch(1 0 0 / 0.15)",
                }}
              />
            ))}
          </div>

          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl" style={{ background: "oklch(0.94 0.012 155)" }}>
              {["Vessels", "Events"].map((tab, i) => (
                <button
                  key={tab}
                  className="py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                  style={
                    i === 0
                      ? {
                          background: "oklch(0.99 0.004 155)",
                          color: "oklch(0.18 0.02 155)",
                          boxShadow: "0 1px 4px oklch(0.18 0.02 155 / 0.08)",
                        }
                      : { color: "oklch(0.50 0.015 155)" }
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "oklch(0.97 0.008 155)", border: "1px solid oklch(0.88 0.015 155)" }}
              >
                <MapPin size={16} style={{ color: "oklch(0.55 0.18 155)" }} />
                <div>
                  <div className="text-xs mb-0.5" style={{ color: "oklch(0.50 0.015 155)" }}>Location</div>
                  <input
                    className="text-sm font-medium bg-transparent outline-none w-full"
                    placeholder="Where do you want to sail?"
                    style={{ color: "oklch(0.18 0.02 155)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: "oklch(0.97 0.008 155)", border: "1px solid oklch(0.88 0.015 155)" }}
                >
                  <Calendar size={16} style={{ color: "oklch(0.55 0.18 155)" }} />
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "oklch(0.50 0.015 155)" }}>Date</div>
                    <div className="text-sm font-medium" style={{ color: "oklch(0.35 0.02 155)" }}>Pick a date</div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: "oklch(0.97 0.008 155)", border: "1px solid oklch(0.88 0.015 155)" }}
                >
                  <Users size={16} style={{ color: "oklch(0.55 0.18 155)" }} />
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "oklch(0.50 0.015 155)" }}>Guests</div>
                    <div className="text-sm font-medium" style={{ color: "oklch(0.35 0.02 155)" }}>2 guests</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                background: "oklch(0.55 0.18 155)",
                boxShadow: "0 4px 16px oklch(0.55 0.18 155 / 0.25)",
              }}
            >
              <Search size={16} />
              Search vessels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
