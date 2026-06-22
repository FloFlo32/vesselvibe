"use client";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    name: "Emerald Sunset Cruise",
    date: "July 12, 2026",
    time: "6:30 PM",
    location: "Santa Monica Pier",
    capacity: 40,
    spotsLeft: 8,
    price: 120,
    duration: "3 hours",
    category: "Social",
  },
  {
    name: "Offshore Yoga & Mindfulness",
    date: "July 18, 2026",
    time: "8:00 AM",
    location: "Newport Beach Harbor",
    capacity: 20,
    spotsLeft: 5,
    price: 85,
    duration: "2.5 hours",
    category: "Wellness",
  },
  {
    name: "Coastal Wine & Dine",
    date: "July 26, 2026",
    time: "7:00 PM",
    location: "San Diego Bay",
    capacity: 30,
    spotsLeft: 12,
    price: 195,
    duration: "4 hours",
    category: "Dining",
  },
  {
    name: "Morning Fishing Charter",
    date: "August 3, 2026",
    time: "5:30 AM",
    location: "Marina del Rey",
    capacity: 15,
    spotsLeft: 3,
    price: 150,
    duration: "5 hours",
    category: "Adventure",
  },
];

const categoryColors: Record<string, string> = {
  Social: "oklch(0.55 0.18 155)",
  Wellness: "oklch(0.60 0.14 200)",
  Dining: "oklch(0.55 0.18 60)",
  Adventure: "oklch(0.50 0.16 30)",
};

const categoryBg: Record<string, string> = {
  Social: "oklch(0.95 0.025 155)",
  Wellness: "oklch(0.94 0.018 200)",
  Dining: "oklch(0.96 0.020 60)",
  Adventure: "oklch(0.95 0.018 30)",
};

export default function EventsSection() {
  return (
    <section id="events" className="py-24" style={{ background: "oklch(0.94 0.012 155)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="text-4xl font-bold tracking-tight mb-3"
              style={{ color: "oklch(0.18 0.02 155)" }}
            >
              On-water events
            </h2>
            <p className="text-lg max-w-[48ch]" style={{ color: "oklch(0.35 0.02 155)" }}>
              Curated experiences for every taste. Join others or reserve privately.
            </p>
          </div>
          <button
            className="hidden md:flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "oklch(0.55 0.18 155)" }}
          >
            All events
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {events.map((event) => (
            <div
              key={event.name}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{
                background: "oklch(0.99 0.004 155)",
                border: "1px solid oklch(0.88 0.015 155)",
                boxShadow: "0 2px 8px oklch(0.18 0.02 155 / 0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px oklch(0.18 0.02 155 / 0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.70 0.14 155 / 0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px oklch(0.18 0.02 155 / 0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.88 0.015 155)";
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: categoryBg[event.category] || "oklch(0.95 0.025 155)",
                        color: categoryColors[event.category] || "oklch(0.55 0.18 155)",
                      }}
                    >
                      {event.category}
                    </span>
                    {event.spotsLeft <= 5 && (
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                        style={{ background: "oklch(0.96 0.015 30)", color: "oklch(0.50 0.16 30)" }}
                      >
                        Only {event.spotsLeft} left
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "oklch(0.18 0.02 155)" }}
                  >
                    {event.name}
                  </h3>
                </div>
                <div className="text-right ml-4 shrink-0">
                  <div className="text-xl font-bold" style={{ color: "oklch(0.18 0.02 155)" }}>
                    ${event.price}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.50 0.015 155)" }}>
                    per person
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { icon: Calendar, text: event.date },
                  { icon: Clock, text: `${event.time} · ${event.duration}` },
                  { icon: MapPin, text: event.location },
                  { icon: Users, text: `${event.spotsLeft} of ${event.capacity} spots` },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={13} style={{ color: "oklch(0.55 0.18 155)", flexShrink: 0 }} />
                    <span className="text-sm truncate" style={{ color: "oklch(0.35 0.02 155)" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Spots bar */}
              <div className="mb-5">
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "oklch(0.88 0.015 155)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((event.capacity - event.spotsLeft) / event.capacity) * 100}%`,
                      background: "oklch(0.55 0.18 155)",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs" style={{ color: "oklch(0.50 0.015 155)" }}>
                    {event.capacity - event.spotsLeft} attending
                  </span>
                  <span className="text-xs" style={{ color: "oklch(0.50 0.015 155)" }}>
                    {event.spotsLeft} spots left
                  </span>
                </div>
              </div>

              <button
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                style={{
                  background: "oklch(0.55 0.18 155)",
                  color: "white",
                  boxShadow: "0 2px 8px oklch(0.55 0.18 155 / 0.20)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.48 0.18 155)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.18 155)";
                }}
              >
                RSVP — ${event.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
