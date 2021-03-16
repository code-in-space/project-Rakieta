import styled from 'styled-components';
import bg from '../../../assets/404-bg.jpg';

export const ErrorPageWrapper = styled.div`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
