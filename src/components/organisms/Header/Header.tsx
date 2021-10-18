import { FC, useState, useEffect } from 'react';
import { HeaderWrapper } from './Header.styles';
import BurgerMenu from '../../molecules/BurgerMenu/BurgerMenu';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

export const Header: FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  const checkPlace = () => (window.pageYOffset > 80 ? setIsScroll(true) : setIsScroll(false));

  useEffect(() => {
    window.addEventListener('scroll', checkPlace, { passive: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <BurgerMenu />
      {isScroll && <Button icon="arr-up" secondary onClick={scrollToTop} />}
    </HeaderWrapper>
  );
};
