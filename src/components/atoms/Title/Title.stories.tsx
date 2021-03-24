import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/mainTheme';
import Title from '../../atoms/Title/Title';

export default {
  title: 'Titles',
  component: Title,
} as Meta;

export const Titles: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Title>{'standard title'}</Title>
      <Title hero>{'title with props hero'}</Title>
    </ThemeProvider>
  </>
);
