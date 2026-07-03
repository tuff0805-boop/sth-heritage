import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1208',
        gold: '#B8860B',
        'gold-light': '#D4A843',
        cream: '#F7F3EC',
        parchment: '#EDE6D6',
        'sth-red': '#8B1A1A',
        'sth-grey': '#6B6355',
        background: '#FDFAF5',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
