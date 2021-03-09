import { useEffect, useState } from 'react';
import useRequest from 'hooks/useRequest';
import EventItem from 'components/Event/EventItem';
import StyledEventListWrapper from './EventList.styles';
import { API_BASE_URL } from 'environment/constants';

interface FetchedData {
  results?: [date?: string, description?: string, title?: string, event?: number];
}

const EventList = () => {
  const [eventsList, setEventsList] = useState();
  const { status, error, data } = useRequest(`${API_BASE_URL}event/upcoming/`);

  console.log(data.results);

  return (
    <StyledEventListWrapper>
      {/* {events.map((event) => (
        <EventItem eventDate={new Date(event.date)} description={event.description} title={event.name} key={event.id} />
      ))} */}
    </StyledEventListWrapper>
  );
};

export default EventList;
