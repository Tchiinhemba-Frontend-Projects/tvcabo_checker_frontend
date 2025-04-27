/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }