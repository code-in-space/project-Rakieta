import styled from 'styled-components';
import bg from '../../../assets/events-bg.png';

const StyledEventPageWrapper = styled.div`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
`;

export default StyledEventPageWrapper;
