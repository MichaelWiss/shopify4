import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0A08",
        "deep-charcoal": "#1F1A1A",
        terracotta: {
          DEFAULT: "#FF6E5B",
          50: "#FFE8E4",
          100: "#FFCEC4",
          200: "#FFB3A3",
          300: "#FF9883",
          400: "#FF7E63",
          500: "#FF6E5B",
          600: "#E85B48",
          700: "#C14A3B",
          800: "#9B3A2F",
          900: "#752A22"
        },
        mustard: "#FFC928",
        sage: {
          light: "#DDE9D5",
          DEFAULT: "#B7CBB2",
          dark: "#768F74"
        },
        teal: "#0FA7A5",
        paper: "#FFEFD5",
        background: "#FFE3BC"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "ui-monospace", "monospace"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "slide-up": {
          from: { transform: "translateY(12px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        "fade-in": "fade-in 0.6s ease-in-out both",
        "slide-up": "slide-up 0.6s ease-in-out both"
      }
    }
  },
  plugins: []
};

export default config;
