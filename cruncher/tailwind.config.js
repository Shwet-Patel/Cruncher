/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'poppins': [],
      },
      
      colors:{
      'dimblue':'#bcdce0',
      'darkcream':'#f1ead9',
      'lightcream':'#fef6e4',
      'lessdimblue':'#8bd3dd',
      'lightpink':'#f582ae',
      'morelightpink':'#f3d2c1',
      'darkblue':'#172c66'
    },},
  },
  plugins: [],
}