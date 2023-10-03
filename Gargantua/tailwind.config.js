/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      "light", "dark", "forest", "black",
      {
        blackHole: {
          "primary": "#F3F3F3",
          "secondary": "#5e8053",
          "accent": "#B4FFEF",
          "neutral": "#252b33",
          "base-100": "#191c20",
          "base-200": "#1c2025",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui"),
  ],
}
