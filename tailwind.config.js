/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // important for dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // for Next.js app directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
