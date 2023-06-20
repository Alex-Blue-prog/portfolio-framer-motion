const  { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#b63e96",
        primaryDark: "#58e6d9",
        custom: {
          //sky
          DEFAULT: '#0ea5e9',
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // default
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49"
        }
      },
      keyframes:{
        scale: {
          "0%, 100%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.3)"}
        }
      },
      animation: {
        'scale': 'scale 2s ease-in infinite',
        'spin-slow': 'spin 18s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        circularDark:  'repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 100px)'
      }
    },
    screens: {
      "2xl": {max: "1535px"},
      xl: {max: "1279px"},
      lg: {max: "1023px"},
      md: {max: "767px"},
      sm: {max: "639px"},
      xs: {max: "479px"},
    }
  },
  plugins: [],
}
