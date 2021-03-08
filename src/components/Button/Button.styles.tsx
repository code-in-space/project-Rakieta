import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.backgrounds.transparent};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.main};
  min-width: 30px;
  min-height: 30px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

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
