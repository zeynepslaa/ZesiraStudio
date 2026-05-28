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
        canvas: "#F7F2EC",
        linen: "#EDE4D8",
        noir: "#241E18",
        ash: "#9A8878",
        sand: "#C4A882",
        dusk: "#A89888",
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
