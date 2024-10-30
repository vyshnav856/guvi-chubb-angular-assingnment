/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-green": "#108a7f",
        "light-green": "#f3f9f8"
      },

      fontFamily: {
        sans: ["Red Hat Display", "sans-serif"]
      }
    },
  },
  plugins: [],
}