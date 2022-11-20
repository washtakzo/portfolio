/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#243140",
        primary_shadow: "#24314066",
        secondary: "#cc5060",
        blanc_creme: "#f4f4f4",
      },
      fontFamily: {
        sans: ["Oxygen", "sans-serif"],
        serif: ["Bodoni Moda", "serif"],
      },
    },
  },
  plugins: [],
};
