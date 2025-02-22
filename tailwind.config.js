/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Turn on dark mode!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'fig': ['Figtree', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

