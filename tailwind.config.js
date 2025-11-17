import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'secondary': "#3582b0",
        'muted': "#9D9D9D",
        'water': "#eaeffc",
        "feint": "#F4F4F4",
        primary: {
          DEFAULT: "#ff914c",
          foreground: "#ffffff",
        },
      },
      screens: {
        'sm-screen': { 'max': '650px' },
        'md-screen': { 'max': '900px' },
        'tab-screen': { 'max': '1350px' },
      },
      boxShadow: {
        'light-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'custom-heavy': '0 10px 15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui()],
}
