const colors = require("@tailwindcss/postcss7-compat/colors");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
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
    extend: {
      height: {
        "50vh": '50vh',
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
