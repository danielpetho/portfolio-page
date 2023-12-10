import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2900px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "blue": "#5500ff",
        "yellow": "#f3ca4e",
        "green": "#49beaa",
        "pink": "#ff9ec5",
        "orange": "#f85408",
        "white": "#f8f8f8",
        "pale-white": "#f2eff2",
        "black": "#0d0d0d",
        "gray": "#e1dcda"
      },
    },
  },
  plugins: [],
}
export default config
