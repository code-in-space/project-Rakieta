import styled, { css } from 'styled-components';

interface ButtonProps {
  secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  width: 200px;
  height: 80px;
  transition: 0.2s;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.blue};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.blue};

      &:hover {
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export default Button;
