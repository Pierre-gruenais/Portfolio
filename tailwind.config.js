/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      sky:{
        1:'#75C7F0',
        2:'#A8EEFF',
        3:'#7CE2FE',
        4:'#197CAE',
        5:'#154467',
        6:'#112840',
        7:'#0D141F'
      }

    }},
  },
  plugins: [],
}

