import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    white: 'white',
    rose: '#E00077',
    black: '#000',
  },

  borders: {
    main: '1px solid white',
    hover: '1px solid #E00077',
  },

  backgrounds: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  },

  fontWeights: {
    thin: '300',
    normal: '400',
    bold: '700',
  },

  fontSizes: {
    s: '12px',
    m: '14px',
    l: '18px',
    xl: '20px',
    xxl: '60px',
  },

  mediaQueries: {
    mobile: '576px',
  },
};

export default mainTheme;
