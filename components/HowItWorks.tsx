"use client";
import { Search, CalendarCheck, Anchor, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & filter",
    description: "Browse vessels by type, capacity, location, and date. Our filters surface exactly what you need.",
  },
  {
    icon: CalendarCheck,
    title: "Reserve instantly",
    description: "Secure your booking in minutes. Flexible cancellation policies on most listings.",
  },
  {
    icon: Anchor,
    title: "Set sail",
    description: "Meet your captain, board your vessel, and make memories. We handle the logistics.",
  },
  {
    icon: Star,
    title: "Review & return",
    description: "Share your experience and discover your next voyage. Your review helps our community.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24" style={{ background: "oklch(0.40 0.16 155)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold tracking-tight mb-4"
            style={{ color: "oklch(0.97 0.008 155)" }}
          >
            How VesselVibe works
          </h2>
          <p className="text-lg max-w-[44ch] mx-auto" style={{ color: "oklch(0.80 0.08 155)" }}>
            From discovery to departure in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.70 0.14 155 / 0.30), oklch(0.70 0.14 155 / 0.30), transparent)" }}
          />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "oklch(0.55 0.18 155 / 0.20)",
                        border: "1px solid oklch(0.70 0.14 155 / 0.25)",
                      }}
                    >
                      <Icon size={28} style={{ color: "oklch(0.88 0.05 155)" }} />
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: "oklch(0.70 0.14 155)", color: "oklch(0.30 0.12 155)" }}
                      >
                        {i + 1}
                      </div>
                    </div>
                  </div>
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ color: "oklch(0.97 0.008 155)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mx-auto max-w-[24ch]"
                    style={{ color: "oklch(0.75 0.06 155)" }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <button
            className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "oklch(0.70 0.14 155)",
              color: "oklch(0.18 0.02 155)",
              boxShadow: "0 8px 24px oklch(0.30 0.12 155 / 0.30)",
            }}
          >
            Start exploring
          </button>
        </div>
      </div>
    </section>
  );
}
