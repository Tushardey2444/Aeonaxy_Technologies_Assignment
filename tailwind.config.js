/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '480px',

      'md': '1071px',

      'lg': '1280px',

      'xl': '1400px',

      '2xl': '1550px',
    }
  },
  plugins: [],
}