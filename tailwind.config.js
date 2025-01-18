/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FEE032",
        blue: "#3060B7"
      },
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"]
      }
    },
  },
  plugins: [],
}

