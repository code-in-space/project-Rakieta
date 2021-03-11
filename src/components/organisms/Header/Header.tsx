import { FC } from 'react';
import { HeaderWrapper } from './Header.styles';
import BurgerMenu from '../../molecules/BurgerMenu/BurgerMenu';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <BurgerMenu />
    </HeaderWrapper>
  );
};
