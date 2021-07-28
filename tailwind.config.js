module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Proxima Nova', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        whitesmoke: '#ececec',
        steelblue: '#5176cc',
        snow: '#fbfbfb',
        neutral: {
          50: '#F7F8F9',
          100: '#F9F9FA',
          150: '#F1F2F9',
          200: '#E8E8E8',
          250: '#9297B0',
          300: '#767677',
          350: '#57657A',
          400: '#212324',
          450: '#1B1B1C',
        },
        primary: {
          50: '#E9F6FF',
          100: '#EAF1FF',
          150: '#BDE5FE',
          200: '#55CCF2',
          250: '#30CEFB',
          300: '#23A9FC',
          350: '#0D96EB',
          400: '#048BFE',
          450: '#0083FF',
          500: '#2A74FF',
          550: '#2974FF',
          600: '#006AF2',
          650: '#0054FE',
          700: '#1D14A1',
          750: '#000C6C',
        },
      },
    },
  },
  plugins: [],
};
