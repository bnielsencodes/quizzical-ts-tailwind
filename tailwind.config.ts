import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        100: "#1c1c1c",
        200: "#f5f7fb",
      },
      purple: {
        100: "#293264",
        200: "#4d5b9e",
        300: "#d6dbf5",
        400: "#d8def0",
      },
      blue: "#dbebf9",
      yellow: "#fffacc",
      correct: "#94d7a2",
      incorrect: "#f8bcbc",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      karla: ["var(--font-karla)"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
