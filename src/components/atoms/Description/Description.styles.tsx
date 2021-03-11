import styled, { css } from 'styled-components';

interface StyledDescriptionProps {
  hero?: boolean;
}

const StyledDescription = styled.div<StyledDescriptionProps>`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.thin};

  ${({ hero }) =>
    hero &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      font-weight: ${({ theme }) => theme.fontWeights.normal};
    `};
`;

export default StyledDescription;
