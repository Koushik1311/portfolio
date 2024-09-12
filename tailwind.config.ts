import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        xl: "1.5rem",
      },
      screens: {
        xl: "1000px",
      },
    },
    extend: {
      colors: {
        primary: "#D79921",
        secondary: "#D28280",
      },
    },
  },
  plugins: [],
};
export default config;
