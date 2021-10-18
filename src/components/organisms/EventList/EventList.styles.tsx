import styled from 'styled-components';

const StyledEventListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    justify-content: center;
  }
`;

export default StyledEventListWrapper;
