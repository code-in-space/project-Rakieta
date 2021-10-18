import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
      xl: string;
      xxl: string;
    };

    mediaQueries: {
      mobile: string;
    };
  }
}
