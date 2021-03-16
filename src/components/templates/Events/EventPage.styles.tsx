import styled from 'styled-components';
import bg from '../../../assets/events-bg.png';

const StyledEventPageWrapper = styled.div`
  background: url(${bg});
  /* background-size: cover; */
  background-position: center;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 170px 30px;
`;

export default StyledEventPageWrapper;
