import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      main: ["League Spartan", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.png')",
      },
      colors: {
        yellow: "#BCA62B",
        white: "#FFFFFF",
        gradientO: "rgba(0, 0, 0, 1)",
        gradient1: "rgba(77, 66, 14, 0.54)",
      },
    },
  },
  plugins: [],
} satisfies Config;
