import GlobalStyle from '../theme/GlobalStyle';
import Button from '../components/Button/Button';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Button>click!</Button>
      <Button secondary>click!</Button>
      <p>click!</p>
    </ThemeProvider>
  </>
);

export default App;
