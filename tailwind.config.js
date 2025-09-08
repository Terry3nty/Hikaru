/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        dmSans: ['"DM Sans"', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        lexendDeca: ['"Lexend Deca"', 'sans-serif'],
        monsieur: ['"Monsieur La Doulaise"', 'cursive'],
        nabla: ['Nabla', 'cursive'],
      },
      screens : {
        md : "800px",
      }
    },
  },
  plugins: [],
}