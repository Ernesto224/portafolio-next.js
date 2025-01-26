import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //background: "var(--background)",
        //foreground: "var(--foreground)",
        "custom-black": "#000000",
        "custom-black-2": "#212121",
        "custom-white": "#f5f5f5",
        "custom-blue": "#3f51b5",
        "custom-gray": {
          "gray-1": "#4b4b4b",
          "gray-2": "#767676",
          "gray-3": "#a0a0a0",
          "gray-4": "#cbcbcb"
        },
        "custom-orange": "#ffd180",
      },
    },
  },
  plugins: [],
} satisfies Config;
