import styled from 'styled-components';

const StyledDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
`;

export default StyledDescription;
