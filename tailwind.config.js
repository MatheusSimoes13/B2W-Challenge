/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide_down: {
          '0%': { transform: 'translateY(100%)' },
          '0%': { transform: 'translateY(-100%)' }
        },
        slide_up:{
          '0%': { transform: 'translateY(-100%)' },
          '0%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        'showUl': 'slide_down 1s',
        'closeUl': 'slide_up 0.25s'
      }
    },
  },
  plugins: [],
}
