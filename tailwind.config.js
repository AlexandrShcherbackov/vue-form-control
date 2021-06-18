module.exports = {
  theme: {
    fontFamily: {
      sans: ['Proxima Nova', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
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
        success: {
          50: '#04C091',
          100: '#27AE60',
          150: '#219653',
        },
        warning: {
          50: '#F2C94C',
          100: '#F2994A',
        },
        danger: {
          50: '#FFEDED',
          100: '#FF8383',
          150: '#EB5757',
          200: '#FF4646',
        },
        violet: {
          50: '#9887ED',
          100: '#8C56B4',
          150: '#8C10FE',
          200: '#7E247C',
          250: '#682F5A',
        },
      },
      gradientColorStops: {
        'black-01': 'rgba(0, 0, 0, .1)',
      },
      fontSize: {
        11: '2.75rem',
        '10px': '10px',
        '13px': '13px',
        '15px': '15px',
      },
      lineHeight: {
        14: '3.5rem',
      },
      spacing: {
        13: '3.25rem',
        '2px': '2px',
        '10px': '10px',
        '14px': '14px',
        '18px': '18px',
        '22px': '22px',
        '58px': '58px',
        '62px': '62px',
        '145px': '145px',
      },
      inset: {
        1: '0.25rem',
        4: '1rem',
      },
      borderRadius: {
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '20px': '20px',
      },
      height: {
        '56px': '56px',
        '58px': '58px',
        '84px': '84px',
      },
      minHeight: {
        8: '2rem',
        10: '2.5rem',
        17: '4.5rem',
        '82px': '82px',
        '274px': '274px',
      },
      maxHeight: {
        '10px': '10px',
        '192px': '192px',
        '200px': '200px',
        '220px': '220px',
        '540px': '540px',
      },
      width: {
        '100px': '100px',
        '148px': '148px',
        '248px': '248px',
        '300px': '300px',
        '366px': '366px',
        '400px': '400px',
        '440px': '440px',
        '540px': '540px',
        '874px': '874px',
      },
      minWidth: {
        '200px': '200px',
        '300px': '300px',
        '352px': '352px',
      },
      maxWidth: {
        '10px': '10px',
        '162px': '162px',
        '284px': '284px',
        '300px': '300px',
        '357px': '357px',
        '366px': '366px',
        '444px': '444px',
      },
      zIndex: {
        '-1': '-1',
        100: 100,
      },
      boxShadow: {
        'primary-650': '0px 0px 18px rgba(0, 84, 254, 0.57)',
        '12px': '0px 0px 12px rgba(41, 116, 255, 0.15)',
        '20px': '0px 4px 20px rgba(0, 0, 0, 0.15)',
      },
      opacity: {
        30: '.3',
      },
      cursor: {
        grab: 'grab',
        text: 'text',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderWidth: ['important'],
      padding: ['important'],
      margin: ['important'],
      width: ['important'],
      maxWidth: ['group-hover'],
      height: ['important'],
      backgroundColor: ['disabled', 'important', 'group-hover', 'focus-within', 'odd'],
      textColor: ['hover', 'disabled', 'focus-within', 'important'],
      borderColor: ['disabled', 'important'],
      space: ['important'],
      opacity: ['important', 'group-hover'],
      pointerEvents: ['important', 'group-hover'],
      textDecoration: ['hover'],
    },
  },
  plugins: [
    function addImportantVariant({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          // eslint-disable-next-line no-param-reassign
          rule.selector = `.${rule.selector.slice(1)}\\!`;
          rule.walkDecls((decl) => {
            // eslint-disable-next-line no-param-reassign
            decl.important = true;
          });
        });
      });
    },
  ],
  purge: {
    enabled: true,
    options: {
      /**
       * @see {@link https://purgecss.com/safelisting.html#patterns}
       */
      safelist: {
        standard: [/.*\\!$/],
      },
    },
    content: [
      'public/**/*.html',
      'src/**/*.vue',
    ],
  },
};
