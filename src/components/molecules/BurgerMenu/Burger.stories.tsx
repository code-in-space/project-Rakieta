import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/mainTheme';
import BurgerMenu from '../../molecules/BurgerMenu/BurgerMenu';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Burger Menus',
  component: BurgerMenu,
} as Meta;

export const BurgerMenus: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <Route>
          <BurgerMenu />
        </Route>
      </Router>
    </ThemeProvider>
  </>
);
