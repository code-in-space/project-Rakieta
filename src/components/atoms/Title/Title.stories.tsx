import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/mainTheme';
import Title from '../../atoms/Title/Title';

export default {
  title: 'Title',
  component: Title,
} as Meta;

export const SingleTitleItem: FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Title title="Lorem ipsum dolor sit amet consectetur" />
    </ThemeProvider>
  </>
);

// export const SingleTitleItemNoData: FC<TitleProps> = () => (
//   <>
//     <GlobalStyle />
//     <ThemeProvider theme={theme}>
//       <TitleItem />
//     </ThemeProvider>
//   </>
// );

// export const MultipleTitlesList: FC<TitleProps> = () => (
//   <>
//     <GlobalStyle />
//     <ThemeProvider theme={theme}>
//       <TitleList />
//     </ThemeProvider>
//   </>
// );
