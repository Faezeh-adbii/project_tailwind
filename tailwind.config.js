/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{

      sm:'570px',
      md:'768px',
      lg:'992px',
      xl:'1200px',

    },
    container:{
      center:true
    },
    extend: {
      fontFamily:{
        roboto:'Open Sans ,  sans-serif'
      }
    },
  },
  plugins: [],
}

