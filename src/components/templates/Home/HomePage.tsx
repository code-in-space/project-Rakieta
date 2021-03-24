import { FC } from 'react';
import { HomePageBody, HomePageContainer } from './HomePage.styles';
import { StyledLink } from '../../atoms/Link/Link.styles';
import Title from '../../atoms/Title/Title';
import Description from '../../atoms/Description/Description';

export const HomePage: FC = () => (
  <HomePageContainer>
    <HomePageBody>
      <Title hero>{"dont't miss any space event"}</Title>
      <StyledLink to="/events">
        <Description hero>{'Check all uppcoming events and add it to your private calendar!'}</Description>
      </StyledLink>
    </HomePageBody>
  </HomePageContainer>
);
