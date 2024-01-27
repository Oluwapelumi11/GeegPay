/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter':['Inter','sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

