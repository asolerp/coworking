module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'coworking': '#617A90',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
