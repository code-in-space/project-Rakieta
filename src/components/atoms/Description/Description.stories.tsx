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
      <Description description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nesciunt consequatur porro ea, officia hic quo laboriosam modi? Quod." />
      <br />
      <Description
        description="(hero) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nesciunt consequatur porro ea, officia hic quo laboriosam modi? Quod."
        hero
      />
      <br />
      <Description
        description="(date) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nesciunt consequatur porro ea, officia hic quo laboriosam modi? Quod."
        date
      />
      <br />
      <Description
        description="(pink) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nesciunt consequatur porro ea, officia hic quo laboriosam modi? Quod."
        year
      />
    </ThemeProvider>
  </>
);
