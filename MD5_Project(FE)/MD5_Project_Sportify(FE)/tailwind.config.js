/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'CircularBold': ["Circular Sp Vit Black Web", 'sans-serif'],
        'CircularLight': ["Circular Sp Vit Light Web", 'sans-serif'],
        'CircularMedium': ["Circular Sp Vit Medium Web, 'sans-serif'"],
        'CircularBook': ["Circular Sp Vit Book Web", 'sans-serif'],
        'CircularBlack': ["Circular Sp Vit Bold Web", 'sans-serif'],
      },
      dropShadow: {
        '3xl' : '0 4px 4px rgba(0,0,0,.3)'
      },
      colors: {
        'primaryColor': '#1ed760',
        'tahiti': {
          100: '#e01d26',
          200: '#e45527',
          300: '#c13e30',
          400: '#43102e',
          500: '#860607',
          600: '#eb9eeb',
          700: '#79ab7d',
          800: '#7360d0',
          900: '#695189',
          1000: '#fef08a',
          1100: '#6429ae'
        },
      },
      screens: {
        xl: { max: "1300px" },
        l: { max: "973px" },
        sm: { max: "767px" },
      },
      important: true,
    },
  },
  plugins: [],
}

