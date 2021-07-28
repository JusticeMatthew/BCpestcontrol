module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        dark: '#303030',
        logo: '#f6921e',
        light: '#f1f1f1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
