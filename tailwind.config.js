module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        dark: '#303030',
        orange: '#DE7300',
        light: '#808080',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
