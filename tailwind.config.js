/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    
    colors:{
      indigo:{
        light:'#b3bcf5',
        DEFAULT:'#5c6ac4',
        dark:'#202e78',
      }
    },
    extend: {
      screens:{
        '2xl':'1600px',
        
      },
      colors:{
        'regal-blue':'#243c5a',
      }

    },
  },
  plugins: [],
}
