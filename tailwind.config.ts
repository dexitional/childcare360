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
      colors: {
        "primary":"#2f597b",
        "secondary":"#afd4ef",
        "primarybg":"#FAF6F2"
      },
      fontFamily: {
        shadowlight: ["var(--font-shadows)"],
        opensans: ["var(--font-opensans)"],
        roboto: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
        kalam: ["var(--font-kalam)"],
        vibes: ["var(--font-vibes)"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
export default config;
