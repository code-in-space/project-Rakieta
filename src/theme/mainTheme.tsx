interface DefaultTheme {
  colors: {
    white: string;
    rose: string;
    black: string;
  };

  borders: {
    main: string;
    hover: string;
  };

  backgrounds: {
    transparent: string;
    white: string;
    black: string;
  };

  fontWeights: {
    thin: string;
    normal: string;
    bold: string;
  };

  fontSizes: {
    s: string;
    m: string;
    l: string;
  };
}

const mainTheme: DefaultTheme = {
  colors: {
    white: 'white',
    rose: '#E00077',
    black: '#000',
  },

  borders: {
    main: '1px solid white',
    hover: '1x solid #E00077',
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
  },
};

export default mainTheme;
