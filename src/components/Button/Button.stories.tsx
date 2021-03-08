import { FC } from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Text: FC = () => (
  <ThemeProvider theme={theme}>
    <Button content="click!" />
  </ThemeProvider>
);

// export const Menu: FC = () => (
//   <ThemeProvider theme={theme}>
//     <Button content={BurgerIcon} />
//   </ThemeProvider>
// );
