import StyledButton from "./Button.styles";
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';

export default {
  title: 'Primary Button',
  component: StyledButton,
};

export const Primary = () => <ThemeProvider theme={theme}><StyledButton>Primary</StyledButton></ThemeProvider>;
