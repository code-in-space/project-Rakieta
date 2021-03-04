import styled from 'styled-components';

interface ButtonProps {
  icon?: string;
  size?: number;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.backgrounds.transparent};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.main};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transition: 0.2s;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.rose};
    border: solid 2px ${({ theme }) => theme.colors.rose};
  }
`;

export default Button;
