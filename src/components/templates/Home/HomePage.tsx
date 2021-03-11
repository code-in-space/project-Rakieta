import { FC } from 'react';
import { HomePageBody, HomePageContainer } from './HomePage.styles';
import { StyledLink } from '../../atoms/Link/Link.styles';
import Title from '../../atoms/Title/Title';
import Description from '../../atoms/Description/Description';

export const HomePage: FC = () => (
  <HomePageContainer>
    <HomePageBody>
      <Title title="dont't miss any space event" hero />
      <StyledLink to="/events">
        <Description description="Check all uppcoming events and add it to your private calendar!" hero />
      </StyledLink>
    </HomePageBody>
  </HomePageContainer>
);
