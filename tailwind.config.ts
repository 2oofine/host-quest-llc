import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Custom shadow
        "custom-dark": "0px 6px 14px rgba(0, 0, 0, 0.3)", // Darker shadow when selected
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Default font
      },
      colors: {
        primary: {
          dark: "#080808", // black
          light: "#07C6D0", // Turquoise Blue
        },
        secondary: {
          light: "#F1F6F9", // Cultured
          accent: "#24AEDD", // Battery Charged Blue
        },
        silver: "#C0C0C0", // Silver
        charcoalNavy: "#293241", // Charcoal Navy
        aeroBlue: "#E0FBFC", // Aero Blue
        paleSkyBlue: "#98C1D9", // Pale Sky Blue
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
