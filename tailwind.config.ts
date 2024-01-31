import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        main: "#0070D2",
        inverse: "#FFFFFF",
      },
      base: {
        primary: "#232930",
        secondary: "#66727A",
      },
      background: {
        medium: "#EFF1F3",
        strong: "#DFE3E6",
        low: "#FFFFFF",
        weak: "#F9FAFB",
      },
      stroke: { medium: "#DFE3E6", strong: "#CED1D3" },
      alert: {
        positive: {
          main: "#36B984",
        },
        neutral: {
          main: "#F19100",
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
