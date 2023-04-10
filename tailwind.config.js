/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['dist/*.html', 'src/**/*.{js}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1200px',
      'xl': '1440px',
    },
    colors: {
      orange: {
        200: 'hsl(25, 100%, 94%)',
        400: 'hsl(26, 100%, 55%)'
      },
      blue: {
        50: 'hsl(223, 64%, 98%)',
        200: 'hsl(220, 14%, 75%)',
        400: 'hsl(219, 9%, 45%)',
        700: 'hsl(220, 13%, 13%)'
      },
      white: 'hsl(0, 0%, 100%)',
      black: {
        200: 'hsl(0, 0%,  25%)',
        400: 'hsl(0, 0%, 0%)'
      }
    },
    extend: {},
  },
  plugins: [],
}

