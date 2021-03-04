import styled from 'styled-components';

interface ButtonProps {
  icon?: string;
  size?: number;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.backgrounds.transparent};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.main};
  width: 30px;
  height: 30px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.rose};
    border: solid 2px ${({ theme }) => theme.colors.rose};
  }

  svg {
    width: 19px;
    height: 19px;
  }
`;

export default StyledButton;
