/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'instagram': '#C13584', // Custom color for Instagram
      },
    }
    
  },
  plugins: [],
}

