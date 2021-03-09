import { FC } from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import EventList from '../components/Event/EventList';

const App: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <EventList />
    </ThemeProvider>
  </>
);

export default App;
