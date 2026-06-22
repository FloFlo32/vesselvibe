import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "oklch(0.97 0.008 155)",
        "bg-alt": "oklch(0.94 0.012 155)",
        surface: "oklch(0.99 0.004 155)",
        brand: {
          DEFAULT: "oklch(0.55 0.18 155)",
          light: "oklch(0.70 0.14 155)",
          dark: "oklch(0.40 0.16 155)",
          muted: "oklch(0.88 0.05 155)",
          surface: "oklch(0.95 0.025 155)",
        },
        accent: {
          DEFAULT: "oklch(0.38 0.12 200)",
          light: "oklch(0.55 0.10 200)",
        },
        ink: {
          DEFAULT: "oklch(0.18 0.02 155)",
          secondary: "oklch(0.35 0.02 155)",
          muted: "oklch(0.50 0.015 155)",
          faint: "oklch(0.65 0.010 155)",
        },
        border: {
          DEFAULT: "oklch(0.88 0.015 155)",
          subtle: "oklch(0.92 0.010 155)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "0.75rem",
        lg: "1.25rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      boxShadow: {
        subtle: "0 1px 3px oklch(0.55 0.18 155 / 0.08), 0 1px 2px oklch(0.55 0.18 155 / 0.06)",
        soft: "0 4px 16px oklch(0.55 0.18 155 / 0.10), 0 2px 6px oklch(0.55 0.18 155 / 0.06)",
        brand: "0 8px 32px oklch(0.55 0.18 155 / 0.20), 0 2px 8px oklch(0.55 0.18 155 / 0.12)",
        elevated: "0 12px 40px oklch(0.18 0.02 155 / 0.12), 0 4px 12px oklch(0.18 0.02 155 / 0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in": "slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
