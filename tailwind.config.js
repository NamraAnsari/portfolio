// const colors = require("@tailwindcss/postcss7-compat/colors");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      gray: colors.blueGray,
      violet: colors.violet,
    },
    fontFamily: {
      sans: [ 'Poppins', 'Helvetica', 'sans-serif' ]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
