import styled from 'styled-components';
import bg from '../../assets/spacex-bg.png';

export const HomePageContainer = styled.div`
  padding: 50px 0;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomePageBody = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  letter-spacing: 5px;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-top: 20px;
`;
