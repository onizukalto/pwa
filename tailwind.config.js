/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1920px', 
        '4xl': '2560px',
        '5xl': '3000px',
        '6xl': '3300px'
      },
    },
  },
  plugins: [],
}
