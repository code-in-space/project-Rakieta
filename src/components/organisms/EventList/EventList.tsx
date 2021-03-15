import { FC, useEffect, useState } from 'react';
import useRequest, { RequestStatus } from '../../../hooks/useRequest';
import EventItem from '../../molecules/EventItem/EventItem';
import StyledEventListWrapper from './EventList.styles';
import { API_BASE_URL } from '../../../environment/constants';
import Loader from 'react-loader-spinner';
import theme from '../../../theme/mainTheme';

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
  const [events, setEvents] = useState<Event[] | null>(null);
  const { status, data } = useRequest<FetchedData>(`${API_BASE_URL}event/upcoming/`);

  useEffect(() => {
    const isEvent: Event[] | null = data ? data.results : null;
    setEvents(isEvent);
  }, [events]);

  return (
    <StyledEventListWrapper>
      {status === RequestStatus.FETCHING && (
        <Loader type="RevolvingDot" color={theme.colors.rose} height={100} width={100} />
      )}
      {status === RequestStatus.FETCHED && events
        ? events.map((event) => (
            <EventItem
              eventDate={new Date(event.date)}
              description={event.description}
              title={event.name}
              key={event.id}
            />
          ))
        : null}
    </StyledEventListWrapper>
  );
};

export default EventList;
