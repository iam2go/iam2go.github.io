/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", "[data-mode='dark']"],
  theme: {
    extend: {
      colors: {
        black: {
          950: "#212426",
          800: "#35363a",
          600: "#505259",
        },
        background: {
          default: "rgba(var(--color-background) , <alpha-value>)",
          sub: "rgba(var(--color-sub-background) , <alpha-value>)",
          primary: "rgba(var(--color-primary-background) , <alpha-value>)",
        },
        text: {
          default: "rgba(var(--color-text) , <alpha-value>)",
        },
        accent: {
          default: "rgba(var(--color-accent) , <alpha-value>)",
          soft: "rgba(var(--color-accent-soft) , <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}
