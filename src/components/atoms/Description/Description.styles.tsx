import styled, { css } from 'styled-components';

interface StyledDescriptionProps {
  hero?: boolean;
  date?: boolean;
  year?: boolean;
}

const StyledDescription = styled.div<StyledDescriptionProps>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.thin};

  ${({ hero }) =>
    hero &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xl};
      font-weight: ${({ theme }) => theme.fontWeights.normal};
    `};

  ${({ date }) =>
    date &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.s};
      letter-spacing: 1px;
      margin-right: 5px;
    `};

  ${({ year }) =>
    year &&
    css`
      color: ${({ theme }) => theme.colors.rose};
    `};
`;

export default StyledDescription;
