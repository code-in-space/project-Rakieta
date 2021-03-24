import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/mainTheme';
import { StyledLink } from '../../atoms/Link/Link.styles';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Description from '../Description/Description';

export default {
  title: 'Links',
  component: StyledLink,
} as Meta;

export const Links: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <Route>
          <StyledLink to="#">
            <Description hero>{'Sample link without styles'}</Description>
          </StyledLink>
        </Route>
      </Router>
    </ThemeProvider>
  </>
);
