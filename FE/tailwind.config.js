/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f287b6",
        "background-light": "#f8f6f7",
        "background-dark": "#211118",
      },
      fontFamily: {
        "lexend": ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
}