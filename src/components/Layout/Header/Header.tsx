import { FC } from 'react';
import { HeaderWrapper } from './Header.styles';
import Menu from './Menu/Menu';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
    </HeaderWrapper>
  );
};
