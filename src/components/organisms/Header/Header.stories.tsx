import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/mainTheme';
import { Header } from '../../organisms/Header/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Headers',
  component: Header,
} as Meta;

export const Headers: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <Route>
          <Header />
        </Route>
      </Router>
    </ThemeProvider>
  </>
);
