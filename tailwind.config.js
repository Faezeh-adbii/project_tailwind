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
      },
      colors:{
        
        'graye-violet-20':'#fbf8fd',
        'gray-violet-500':'#616061',
        'violet-500':'#7c19a1',
      },
      fontSize:{
        xss:'10px',
      }
    },
  },
  plugins: [],
}

