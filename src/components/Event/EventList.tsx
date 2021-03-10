import { FC } from 'react';
import useRequest, { RequestStatus } from '../../hooks/useRequest';
import EventItem from './EventItem';
import StyledEventListWrapper from './EventList.styles';
import { API_BASE_URL } from '../../environment/constants';

interface FetchedData {
  results: Event[];
}

interface Event {
  date: string;
  description: string;
  name: string;
  id: number;
}

const EventList: FC = () => {
  const { status, data } = useRequest<FetchedData>(`${API_BASE_URL}event/upcoming/`);
  const events = data ? data.results : null;

  return (
    <StyledEventListWrapper>
      {status === RequestStatus.FETCHED &&
        events?.map((event) => (
          <EventItem
            eventDate={new Date(event.date)}
            description={event.description}
            title={event.name}
            key={event.id}
          />
        ))}
    </StyledEventListWrapper>
  );
};

export default EventList;
