import { FC } from 'react';
import { HomePageBody, HomePageContainer, Subtitle, Title } from './HomePage.styles';

export const HomePage: FC = () => (
  <HomePageContainer>
    <HomePageBody>
      <Title>DON&apos;T MISS ANY SPACE EVENT</Title>
      <Subtitle>Check our uppcoming events and add it to your private calendar!</Subtitle>
    </HomePageBody>
  </HomePageContainer>
);
