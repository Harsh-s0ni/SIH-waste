/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "mint-green": "#00ffab",
        "deep-mint-green": "#14C38E",
      },
    },
  },
  plugins: [],
};
