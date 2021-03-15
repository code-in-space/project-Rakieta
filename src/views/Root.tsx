import { FC } from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactPage } from '../components/templates/Contact/ContactPage';
import { ErrorPage } from '../components/templates/Error/ErrorPage';
import { EventsPage } from '../components/templates/Events/EventsPage';
import { HomePage } from '../components/templates/Home/HomePage';
import { Header } from '../components/organisms/Header/Header';
import { StyledContentWrapper } from './Root.styles';

const Root: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <StyledContentWrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </StyledContentWrapper>
      </Router>
    </ThemeProvider>
  </>
);

export default Root;
