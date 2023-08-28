/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          950: "#212426",
          800: "#35363a",
          600: "#505259",
        },
      },
    },
  },
  plugins: [],
}
