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
        "vh60": "60vh",
        "50px": "height: 12rem;",
      },
      width: {
        "50vw": "80vw",
      },
    },
  },
  plugins: [],
};
export default config;
