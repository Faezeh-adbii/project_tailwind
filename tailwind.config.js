/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {

      sm: '570px',
      md: '768px',
      lg: '992px',
      xl: '1200px',

    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        roboto: 'Open Sans ,  sans-serif'
      },
      colors: {

        'graye-violet-20': '#fbf8fd',
        'graye-violet-50': '#bbb9bb',
        'gray-violet-200': '#9f9ca0',
        'gray-violet-500': '#616061',
        'violet-500': '#7c19a1',
        'gray-red-50': '#998080',
        'gray-red-100': '#5f5757',
      },
      fontSize: {
        xss: '10px',
      },
      spacing: {
        6.25: '25px',
        15: '60px',
        42: '170px',
        640: '40rem',

      },
      flex:{
        2:'2 2 0',
      }
    },
  },
  plugins: [],
}

