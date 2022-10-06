/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'blue-Primary':'#06386D',
          'orange': '#D8A93F'
        },
        screens:{
          'sm': {'max':'640px'},
        }
      },
    },
    plugins: [],
  };
