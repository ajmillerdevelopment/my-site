module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['ultra','ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'body': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
    },
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
