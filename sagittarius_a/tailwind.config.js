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
    keyframes: {
      wiggle: {
        '0%, 100%': { opacity: .3 },
        '50%': { opacity: 1 },
      }
    },
    animation: {
      wiggle: 'wiggle 2s ease-in-out infinite',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
