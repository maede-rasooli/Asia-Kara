module.exports = {
  darkMode: 'class',
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
        iransans: ['IRANSansX', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

