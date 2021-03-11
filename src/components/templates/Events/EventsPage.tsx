import { FC } from 'react';
import EventList from '../../organisms/EventList/EventList';
import StyledEventPageWrapper from './EventPage.styles';

export const EventsPage: FC = () => (
  <StyledEventPageWrapper>
    <EventList />
  </StyledEventPageWrapper>
);
