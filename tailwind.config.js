/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#010851',
        'secondary': '#9A7AF1',
        'tartiary': '#707070',
        'pink': '#EE9AE5',
        'blue': '#0b74e5'
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
    },
  },
  plugins: [],
}

