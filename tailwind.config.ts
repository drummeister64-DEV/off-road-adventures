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
        earth: {
          50: "#f4f6ef",
          100: "#e4ead4",
          200: "#cad6ab",
          300: "#a8bc78",
          400: "#8aa350",
          500: "#6d8640",
          600: "#546932",
          700: "#425229",
          800: "#364325",
          900: "#2e3921",
          950: "#171e0e",
        },
        trail: {
          50: "#f4f6f0",
          100: "#e5ebdb",
          200: "#ccd8ba",
          300: "#a9be8e",
          400: "#87a165",
          500: "#6b8549",
          600: "#536839",
          700: "#41522e",
          800: "#364328",
          900: "#2e3922",
          950: "#161e0e",
        },
        slate: {
          850: "#1a2234",
          900: "#0f172a",
          950: "#080e1a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
