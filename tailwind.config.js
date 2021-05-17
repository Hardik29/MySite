module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mysite-mediumblue': '#673ab7',
        'mysite-boldblue': '#6648a4',
        'mysite-lightblue': '#e1d8f1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}