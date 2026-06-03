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
        canvas: "#F6F2EC",
        linen: "#E9DED2",
        noir: "#2B1F1C",
        ash: "#9A8878",
        sand: "#C4A882",
        dusk: "#A89888",
        bordo: "#6B1E24",
        "bordo-dark": "#4A1219",
        "bordo-light": "#8B2E35",
      },
      fontFamily: {
        serif: ["Bodoni Moda", "Georgia", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
