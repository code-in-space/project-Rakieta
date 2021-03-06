import styled from 'styled-components';

const StyledTitle = styled.div`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-transform: uppercase;
`;

export default StyledTitle;
