import styled from 'styled-components';
import bg from '../../../assets/events-bg.png';

const StyledEventPageWrapper = styled.div`
  background: url(${bg});
  background-position: center;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: min(170px);
  padding-bottom: 100px;
`;

export default StyledEventPageWrapper;
