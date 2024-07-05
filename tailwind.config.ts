import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#011627",
        secondary: "#FDFFFC",
      },
      textColor: {
        primary: "#FDFFFC",
      },
      screens: {
        xs: "320px",
        sm: "400px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
