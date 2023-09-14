import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  darkMode : 'class',
  theme: {
    fontFamily:{
          brexo : ["brexo"],
          montserrat: ['Montserrat'],
    },
    extend: {
      colors:{
        'aboutbg' : "#d3d3d3"
      }
    },
  },
  plugins: [require("daisyui")],
}


