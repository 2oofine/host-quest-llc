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
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Default font
      },
      colors: {
        primary: {
          DEFAULT: "#051F42", // Oxford Blue
          light: "#07C6D0", // Turquoise Blue
        },
        secondary: {
          DEFAULT: "#000000", // Black
          light: "#F1F6F9", // Cultured
          accent: "#24AEDD", // Battery Charged Blue
        },
        charcoalNavy: "#293241", //Charcoal Navy
        aeroBlue: "#E0FBFC", //Aero Blue
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
