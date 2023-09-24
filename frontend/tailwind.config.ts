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
        vh15: "15vh;",
        vh60: "60vh",
        vh85: "85vh",
      },
      width: {
        "50vw": "80vw",
      },
    },
  },
  plugins: [],
};
export default config;
