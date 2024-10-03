import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A64BC",
        secondary: "#228A85",
        teritiary: "#D1EEEB",
      },
      width: {
        heroImg: "clamp(35.625rem, -56.75rem + 230.93750000000003vw, 128rem);",
      },
    },
  },
  plugins: [],
};
export default config;
