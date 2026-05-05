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
        navy: {
          50:  "#e8edf3",
          100: "#c5d1e0",
          200: "#9fb3cc",
          300: "#7995b8",
          400: "#597fa9",
          500: "#3a699a",
          600: "#2a5589",
          700: "#1c3f6e",
          800: "#132d54",
          900: "#0B1F3A",
          950: "#071528",
        },
        cobalt: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563EB",
          700: "#1E40AF",
          800: "#1e3a8a",
        },
        cyan: {
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891b2",
        },
        brand: {
          navy:    "#0B1F3A",
          cobalt:  "#1E40AF",
          cyan:    "#06B6D4",
          light:   "#F8FAFC",
          dark:    "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":      "fadeUp 0.6s ease-out forwards",
        "fade-in":      "fadeIn 0.4s ease-out forwards",
        "float-slow":   "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0B1F3A 0%, #0f2847 50%, #1c3f6e 100%)",
      },
      boxShadow: {
        card:      "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 10px 25px -3px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
