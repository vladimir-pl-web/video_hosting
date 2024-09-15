import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CD313A",
        red: "#CD3A42",
        "light+gray": "rgba(198, 198,198,.58)",
        gray: "#A4A4A4",
      },

      fontFamily: {
        noto: ['var(--font-noto)'],
       roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
