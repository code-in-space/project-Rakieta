import { FC } from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Text: FC = () => (
  <ThemeProvider theme={theme}>
    <Button content="click!" />
  </ThemeProvider>
);

export const Menu: FC = () => (
  <ThemeProvider theme={theme}>
    <Button icon="burger" />
  </ThemeProvider>
);

export const Add: FC = () => (
  <ThemeProvider theme={theme}>
    <Button icon="plus" />
  </ThemeProvider>
);

export const ArrowUp: FC = () => (
  <ThemeProvider theme={theme}>
    <Button icon="arr-up" />
  </ThemeProvider>
);

export const ArrowDown: FC = () => (
  <ThemeProvider theme={theme}>
    <Button icon="arr-down" />
  </ThemeProvider>
);
