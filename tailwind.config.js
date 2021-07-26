module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        whitesmoke: '#ececec',
        steelblue: '#5176cc',
        snow: '#fbfbfb',
      },
    },
  },
  plugins: [],
};
