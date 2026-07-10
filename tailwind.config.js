/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c9a96e',
        'gold-dark': '#b8942d',
        'gold-light': '#d4ba85',
        cream: '#f5f0e8',
        dark: '#1a1a1a',
        'dark-light': '#2d2d2d',
        luxury: '#8b7355',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        arabic: ['Noto Kufi Arabic', 'Tajawal', 'sans-serif'],
        arabicSerif: ['Amiri', 'Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
}
