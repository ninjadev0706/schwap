/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      '8xl': '87.5rem',
      '7xl': '80rem',
      '6xl': '72rem',
      '5xl': '64rem',
      '4xl': '56rem',
      '3xl': '48rem',
      '2xl': '42rem',
      'xl': '36rem',
      'lg': '32rem',
      'md': '28rem',
      'sm': '24rem',
      'xs': '20rem'
    },
    extend: {},
  },
  plugins: [],
}
