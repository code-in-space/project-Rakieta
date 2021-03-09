import { useState } from 'react';
import EventItem from 'components/Event/EventItem';
import StyledEventListWrapper from './EventList.styles';

const EventList = () => {
  const [event, setEvent] = useState('');

  return (
    <StyledEventListWrapper>
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
      <EventItem
        eventDate={new Date('2021-03-01T12:05:00Z')}
        description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
        title="New Arrive BUILD TEST"
      />
    </StyledEventListWrapper>
  );
};

export default EventList;
