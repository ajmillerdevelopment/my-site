module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        highlightBlue: '#6575E0',
        backgroundGrey: '#E5E7DC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
