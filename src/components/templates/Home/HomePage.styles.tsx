import styled from 'styled-components';
import bg from '../../../assets/spacex-bg.png';

export const HomePageContainer = styled.div`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const HomePageBody = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
