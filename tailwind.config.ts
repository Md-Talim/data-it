import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },
    extend: {
      colors: {
        russianViolet: "#24053E", // Dark Purple
        englishViolet: "#44FFA1", // Light Purple
        springGreen: "#44FFA1",
        ghostWhite: "#FCF8FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
