import { FC, useState } from 'react';
import Button from '../../../Button/Button';
import { MenuWrapper } from './Menu.styles';
import { NavLink } from 'react-router-dom';

const Menu: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const menuItems = ['home', 'events', 'contact'];

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

  return (
    <MenuWrapper>
      {opened && links}
      <Button icon={opened ? 'cross' : 'burger'} onClick={() => setOpened(!opened)} />
    </MenuWrapper>
  );
};

export default Menu;
