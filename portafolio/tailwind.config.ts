import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ['var(--font-code)', 'monospace'],
      },
      colors: {
        //background: "var(--background)",
        //foreground: "var(--foreground)",
        "cus-black":{
          "0": "#000000",
          "1": "#212121",
          "2": "#424242",
        } ,
        "cus-white":{
          "0": "#ffffff",
          "1": "#f5f5f5",
        },
        "cus-violet": {
          "0": "#9c27b0",
        },
        "cus-blue": {
          "0": "#3f51b5",
          "1": "#303d8a",
        },
        "cus-gray": {
          "0": "#4b4b4b",
          "1": "#767676",
          "2": "#a0a0a0",
          "3": "#cbcbcb"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
