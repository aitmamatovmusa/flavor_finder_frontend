/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cambridgeBlue: '#A3C6A9',
        cultured: '#F4F4F4',
        white: '#FFFFFF',
        black: '#101010',
        gray: '#646464',
        green: '#6BDF8B',
      },
    },
  },
  plugins: [],
};