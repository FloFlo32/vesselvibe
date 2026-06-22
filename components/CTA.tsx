"use client";
import { ArrowRight, Shield, Clock, HeadphonesIcon } from "lucide-react";

const perks = [
  { icon: Shield, text: "Verified captains & vessels" },
  { icon: Clock, text: "Instant booking confirmation" },
  { icon: HeadphonesIcon, text: "24/7 on-water support" },
];

export default function CTA() {
  return (
    <section className="py-24" style={{ background: "oklch(0.97 0.008 155)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.55 0.18 155) 0%, oklch(0.40 0.16 155) 50%, oklch(0.38 0.12 200) 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20"
            style={{ background: "oklch(0.70 0.14 155)" }}
          />
          <div
            className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-15"
            style={{ background: "oklch(0.88 0.05 155)" }}
          />

          <div className="relative">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ color: "white" }}
            >
              Ready to set sail?
            </h2>
            <p
              className="text-lg mb-8 max-w-[44ch] mx-auto"
              style={{ color: "oklch(0.88 0.04 155)" }}
            >
              Join thousands of adventurers who've discovered the freedom of the water with VesselVibe.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "oklch(0.70 0.14 155)",
                  color: "oklch(0.18 0.02 155)",
                  boxShadow: "0 8px 24px oklch(0.30 0.12 155 / 0.30)",
                }}
              >
                Find a vessel
                <ArrowRight size={16} />
              </button>
              <button
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: "oklch(1 0 0 / 0.10)",
                  color: "white",
                  border: "1px solid oklch(1 0 0 / 0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Browse events
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={15} style={{ color: "oklch(0.88 0.04 155)" }} />
                  <span className="text-sm" style={{ color: "oklch(0.88 0.04 155)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
