import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
    colors: {
      blue: {
        DEFAULT: "#b8d8d8",
        100: "#1c3333",
        200: "#386767",
        300: "#559a9a",
        400: "#83bbbb",
        500: "#b8d8d8",
        600: "#c5dfdf",
        700: "#d4e7e7",
        800: "#e2efef",
        900: "#f1f7f7",
      },
      beige: {
        DEFAULT: "#eef5db",
        100: "#3b4914",
        200: "#769228",
        300: "#aacd49",
        400: "#cce192",
        500: "#eef5db",
        600: "#f2f7e2",
        700: "#f5f9e9",
        800: "#f8fbf1",
        900: "#fcfdf8",
      },
      magenta: {
        DEFAULT: "#c45ab3",
        100: "#2a0f26",
        200: "#541e4b",
        300: "#7e2d71",
        400: "#a83d96",
        500: "#c45ab3",
        600: "#cf7bc1",
        700: "#db9cd1",
        800: "#e7bde0",
        900: "#f3def0",
      },
      dark: {
        DEFAULT: "#1c2321",
        100: "#050706",
        200: "#0b0e0d",
        300: "#101413",
        400: "#161b1a",
        500: "#1c2321",
        600: "#43544f",
        700: "#6b867e",
        800: "#9bafaa",
        900: "#cdd7d4",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
export default config;
