import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-forest": "#064e3b",
        "warm-sand": "#fffbeb",
        "muted-gold": "#d97706",
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        navy: {
          50: "#f0f2f5",
          100: "#e1e5eb",
          200: "#c3ccd7",
          300: "#a5b3c3",
          400: "#69819b",
          500: "#2d4f73",
          600: "#294768",
          700: "#223b56",
          800: "#1b2f45",
          900: "#162738",
          950: "#0f1a25",
        },
        forest: {
          50: "#f2f7f2",
          100: "#e6efe6",
          200: "#ccdccc",
          300: "#b3c9b3",
          400: "#80a380",
          500: "#4d7d4d",
          600: "#457145",
          700: "#3a5e3a",
          800: "#2e4b2e",
          900: "#263d26",
          950: "#192919",
        },
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

