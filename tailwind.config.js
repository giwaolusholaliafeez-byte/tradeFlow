/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00D4FF',
          purple: '#8B5CF6',
          gold: '#F59E0B',
          dark: '#0A0A0F',
          darker: '#050507',
          card: '#111114',
          border: '#1A1A1F',
        }
      }
    },
  },
  plugins: [],
}
