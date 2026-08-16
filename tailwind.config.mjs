import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,mjs,cjs}",
    "./node_modules/@heroui/**/dist/**/*.{js,mjs,cjs}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring|from|to|via|shadow|outline)-(primary|secondary|default|danger|warning|success|focus|content1|content2|content3|content4|background|foreground)(-\d+)?(\/\d+)?$/,
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "soft-black": "#262626",
        gray: "#575757",
        maroon: "#7a3b3b",
        "pale-rose": "#f8f5f5",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#f8f5f5",
            foreground: "#262626",
            focus: "#7a3b3b",
            content1: { DEFAULT: "#f8f5f5", foreground: "#262626" },
            content2: { DEFAULT: "#f0eae9", foreground: "#262626" },
            content3: { DEFAULT: "#e6dbd9", foreground: "#262626" },
            content4: { DEFAULT: "#d4c4c2", foreground: "#262626" },
            default: {
              50: "#f8f5f5",
              100: "#f0eae9",
              200: "#e6dbd9",
              300: "#c9b8b6",
              400: "#8a7c7a",
              500: "#575757",
              600: "#4a4a4a",
              700: "#3a3a3a",
              800: "#2f2f2f",
              900: "#262626",
              DEFAULT: "#575757",
              foreground: "#f8f5f5",
            },
            primary: {
              50: "#faeeee",
              100: "#efd3d3",
              200: "#e0adad",
              300: "#c78383",
              400: "#a45c5c",
              500: "#7a3b3b",
              600: "#682f2f",
              700: "#552626",
              800: "#421e1e",
              900: "#331717",
              DEFAULT: "#7a3b3b",
              foreground: "#f8f5f5",
            },
            secondary: { DEFAULT: "#575757", foreground: "#f8f5f5" },
            danger: { DEFAULT: "#7a3b3b", foreground: "#f8f5f5" },
          },
          layout: {
            radius: { small: "4px", medium: "8px", large: "12px" },
          },
        },
      },
    }),
  ],
};

export default config;
