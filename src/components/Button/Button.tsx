import { FC, SVGProps, ReactElement } from 'react';
import StyledButton from './Button.styles';

interface ButtonProps {
  content?: string;
}

const Button: FC<ButtonProps> = ({ content }) => <StyledButton>{content}</StyledButton>;

export default Button;
