import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#493628",
          "200": "#AB886D",
        },
        secondary: {
          "100": "#E4E0E1",
          "200": "#D6C0B3",
        },
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sansation: "var(--font-sansation)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
