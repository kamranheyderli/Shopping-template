/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cookie: ["Cookie", 'cursive']
      },

      screens: {
        'sm': '480px',
        'md': '1024px',
        'xl': '1280px',
       
      },
    }
    ,
  },
  plugins: [],
}
