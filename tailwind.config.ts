import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/gradient.svg')",
        purpleGradient:
          "linear-gradient(90deg, #5943FF -51.15%, #975CFF 73.07%), linear-gradient(0deg, #9B96B6, #9B96B6) ",
      },
      colors: {
        purple: "#120758",
        dark: "#06091F",
        "blue-opacity": "#1d1b34e0",
        periwinkle: "#9F9ABA",
        opacity: "#00000057",
        hovered: "hsl(242deg 33.12% 48.29%)",
        pink: "#EF0783",
      },
      fontFamily: {
        robot: ["var(--font-robot)"],
        arabic: ["var(--font-arabic)"],
        rajdhani: ["var(--font-rajdhani)"],
      },
      container: {
        center: true,
        screens: {
          sm: "580px",
          md: "710px",
          lg: "980px",
          xl: "1200px",
          "2xl": "1522px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
