import styled, { css } from 'styled-components';

interface StyledWrapperProps {
  opened?: boolean;
}

export const MenuWrapper = styled.div<StyledWrapperProps>`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;

  ${({ opened }) =>
    opened &&
    css`
        background-color: rgba(0, 0, 0, 0.8)};
        padding-left: 50px;
        transition: 0.6s
    `};

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
