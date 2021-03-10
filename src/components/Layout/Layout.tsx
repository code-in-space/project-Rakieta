import { FC } from 'react';
import { Header } from './Header/Header';
import { PagesWrapper } from './Layout.styles';

export const Layout: FC = ({ children }) => {
  return (
    <PagesWrapper>
      <Header />
      {children}
    </PagesWrapper>
  );
};
