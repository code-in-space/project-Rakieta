import Button from "./Button";
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';

export default {
  title: 'Primary Button',
  component: Button,
};

export const Primary = () => <ThemeProvider theme={theme}><Button>Primary</Button></ThemeProvider>;
