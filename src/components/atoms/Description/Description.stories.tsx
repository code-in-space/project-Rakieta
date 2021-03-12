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
      <Description description="This is standard description" />
      <br />
      <Description description="This is standard description with props hero" hero />
      <br />
      <Description description="This is standard description with props date" date />
      <br />
      <Description description="This is standard description with props year" year />
    </ThemeProvider>
  </>
);
