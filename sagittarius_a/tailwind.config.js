module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'custom1': 'Colfax'
    },
    transitionProperty: {
      'transition-visibility': 'transition-visibility'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
