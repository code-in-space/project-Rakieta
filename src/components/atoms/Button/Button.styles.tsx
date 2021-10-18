import styled, { css } from 'styled-components';

interface StyledButtonProps {
  marginTop?: boolean;
  secondary?: boolean;
  scroll?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme }) => theme.backgrounds.transparent};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.main};
  min-width: 35px;
  min-height: 20px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin: 5px;

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 20px;
    `};

  &:hover {
    background: ${({ theme }) => theme.colors.rose};
    border: ${({ theme }) => theme.borders.hover};
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 15px;
    height: 15px;
    margin: 5px 0;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.rose};
      border: ${({ theme }) => theme.borders.hover};

      &:hover {
        background-color: ${({ theme }) => theme.backgrounds.transparent};
        border: ${({ theme }) => theme.borders.main};
      }

      &:focus {
        outline: none;
      }
    `};

  ${({ scroll }) =>
    scroll &&
    css`
      position: fixed;
      bottom: 50px;
      right: 100px;
      max-height: 35px;

      &:hover {
        padding-bottom: 20px;
        transition: 0.2;
      }
    `};
`;

export default StyledButton;
