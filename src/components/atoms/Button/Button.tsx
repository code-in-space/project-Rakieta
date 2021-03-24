import React, { FC } from 'react';
import StyledButton from './Button.styles';
import { ReactComponent as BurgerIcon } from '../../../assets/icons/burger.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { ReactComponent as ArrowUpIcon } from '../../../assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross.svg';

type ButtonIcon = 'burger' | 'plus' | 'arr-up' | 'arr-down' | string;

export interface ButtonProps {
  children?: string;
  icon?: ButtonIcon;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  marginTop?: boolean;
}

const Button: FC<ButtonProps> = ({ children, icon, onClick, marginTop }) => (
  <StyledButton marginTop={marginTop} onClick={onClick}>
    {children ||
      (() => {
        switch (icon) {
          case 'burger':
            return <BurgerIcon />;
          case 'plus':
            return <PlusIcon />;
          case 'arr-up':
            return <ArrowUpIcon />;
          case 'arr-down':
            return <ArrowDownIcon />;
          case 'cross':
            return <CrossIcon />;
        }
      })()}
  </StyledButton>
);

export default Button;
