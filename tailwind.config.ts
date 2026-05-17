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
        porcelain: "#fffaf3",
        cream: "#f3e5d7",
        champagne: "#b68b56",
        mocha: "#9a7568",
        espresso: "#3a2925",
        charcoal: "#fbf4ec",
        fog: "#6f625b",
        sage: "#8f9f8a"
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
