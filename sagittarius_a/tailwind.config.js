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
      downArrow: {
        '0%%': { transform: 'scaleX(1)' },
        '100%': { transform: 'scaleX(.7)' },
      },
      downArrowClick: {
        '100%': { transform: 'scaleY(.9)' },
      },
      startup: {
        '0%%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      downArrow: 'downArrow .2s linear forwards',
      startup: 'startup 2s',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
