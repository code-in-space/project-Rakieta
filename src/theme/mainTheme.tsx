interface DefaultTheme {
    colors: {
      white: string;
      blue: string;
    };

    fontWeight: {
      thin: string,
      normal: string,
      bold: string
    };
  }

const mainTheme: DefaultTheme = {
    colors: {
        white: 'white',
        blue: 'blue'
    },
    
    fontWeight: {
      thin: '300',
      normal: '400',
      bold: '700'
    }
}

export default mainTheme;