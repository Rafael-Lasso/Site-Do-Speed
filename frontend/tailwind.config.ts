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
        speedOrange: "#FB8D12",
      },
      height: {
        "vh1": "height: 10vh",
        "50px": "height: 12rem;",
      },
      width: {
        "/50px": "width: 12rem;",
        "30vw": "width: 30vw",
      },
    },
  },
  plugins: [],
};
export default config;
