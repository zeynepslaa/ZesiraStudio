import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#f6f0e8",
        cream: "#efe4d4",
        champagne: "#d9bd8c",
        mocha: "#8a6d5b",
        espresso: "#241916",
        charcoal: "#151414",
        fog: "#c9c0b8",
        sage: "#9aa58f"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(217, 189, 140, 0.18)",
        editorial: "0 30px 90px rgba(16, 12, 10, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
