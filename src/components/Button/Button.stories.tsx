import { FC } from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';

export default {
  title: 'Buttons',
  component: Button,
} as Meta;

export const Buttons: FC = () => {
  const icons = ['burger', 'cross', 'arr-up', 'arr-down', 'plus'];

  return (
    <ThemeProvider theme={theme}>
      <Button content="click!" />
      {icons.map((item) => (
        <Button icon={item} key={item} />
      ))}
    </ThemeProvider>
  );
};
