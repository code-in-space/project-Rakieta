import { FC } from 'react';
import { HomePageBody, HomePageContainer } from './HomePage.styles';
import Title from '../../atoms/Title/Title';
import Description from '../../atoms/Description/Description';

export const HomePage: FC = () => (
  <HomePageContainer>
    <HomePageBody>
      <Title title="dont't miss any space event" hero />
      <Description description="Check all uppcoming events and add it to your private calendar!" hero />
    </HomePageBody>
  </HomePageContainer>
);
