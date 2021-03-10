import styled from 'styled-components';

export const MenuWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.l};
    text-decoration: none;
    margin-right: 45px;

    &.active {
      color: ${({ theme }) => theme.colors.rose};
    }
  }
`;
