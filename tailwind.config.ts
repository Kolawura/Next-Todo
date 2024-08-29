import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        BlueColor: "hsl(220, 98%, 61%)",
        checkBgFr: "hsl(192, 100%, 67%)",
        checkBgTo: "hsl(280, 87%, 65%)",
        lightBg: "hsl(0, 0%, 98%)",
        darkBg: "hsl(235, 21%, 11%)",
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
