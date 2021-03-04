import { Children } from 'react';
import StyledButton from './Button.styles';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

const Button = () => (
  <StyledButton>
    <PlusIcon />
  </StyledButton>
)

export default Button;