import { FC, useState, useRef, useEffect, ReactEventHandler, SyntheticEvent } from 'react';
import Button from '../../atoms/Button/Button';
import { MenuWrapper } from './BurgerMenu.styles';
import { NavLink } from 'react-router-dom';

const BurgerMenu: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const menuItems = ['home', 'events', 'contact'];
  const ref = useRef<HTMLDivElement>(null);

  const links = menuItems.map((item) => {
    if (item === 'home') {
      return (
        <NavLink key={item} to="/" exact={true}>
          {item}
        </NavLink>
      );
    } else {
      return (
        <NavLink key={item} to={`/${item}`}>
          {item}
        </NavLink>
      );
    }
  });

  // hiding menu after clicking outside menu
  const handleCloseMenu = (e: Event) => {
    if (ref.current?.contains(e.target as Node)) {
      return;
    }
    setOpened(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseMenu);
    return () => {
      document.removeEventListener('mousedown', handleCloseMenu);
    };
  }, []);

  return (
    <MenuWrapper onClick={(e) => e.stopPropagation()} ref={ref}>
      {opened && links}
      <Button icon={opened ? 'cross' : 'burger'} onClick={() => setOpened(!opened)} />
    </MenuWrapper>
  );
};

export default BurgerMenu;
