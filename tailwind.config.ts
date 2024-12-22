import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-lg": {
          max: "1000px",
        },
        "trans-meal": {
          min: "700px",
          max: "1300px",
        },
        "trans-range": {
          min: "600px",
          max: "1024px",
        },
        "max-sm": {
          max: "600px",
        },
        "min-sm": {
          min: "600px",
        },
        "max-800": {
          max: "800px",
        },
        "min-800": {
          min: "800px",
        },
        "max-450": {
          max: "450px",
        },
        "max-600": {
          max: "600px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
