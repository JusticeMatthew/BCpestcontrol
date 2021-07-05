module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: 'media',
   theme: {
     extend: {
       colors:{
         darkGray: '#303030',
         orange: '#DE7300'
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }