import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../../theme/GlobalStyle';
import Description from './Description';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/mainTheme';

export default {
  title: 'Descriptions',
  component: Description,
} as Meta;

export const Descriptions: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Description>{'This is standard description'}</Description>
      <br />
      <Description hero>{'This is standard description with props hero'}</Description>
      <br />
      <Description date>{'This is standard description with props date'}</Description>
      <br />
      <Description year>{'This is standard description with props year'}</Description>
    </ThemeProvider>
  </>
);
