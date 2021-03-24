import { FC, useState, useEffect } from 'react';
import useRequest, { RequestStatus } from '../../../hooks/useRequest';
import EventItem from '../../molecules/EventItem/EventItem';
import StyledEventListWrapper from './EventList.styles';
import { API_BASE_URL } from '../../../environment/constants';
import Loader from 'react-loader-spinner';
import theme from '../../../theme/mainTheme';
import Button from '../../atoms/Button/Button';

interface EventListProps {
  loadMoreItems?: void;
}

interface FetchedData {
  results: Event[];
}

interface Event {
  date: string;
  net: string;
  description: string;
  name: string;
  id: number | string;
}

const EventList: FC<EventListProps> = () => {
  const [allEvents, setAllEvents] = useState<Event[] | null | undefined>(null);
  const [eventsListLength, setEventsListLength] = useState(8);
  const [showButton, setShowButton] = useState(false);
  const events = useRequest<FetchedData>(`${API_BASE_URL}event/upcoming/`);
  const launches = useRequest<FetchedData>(`${API_BASE_URL}launch/upcoming/`);

  useEffect(() => {
    if (events.status === RequestStatus.FETCHED && launches.status === RequestStatus.FETCHED) {
      const allData = events.data?.results;
      launches.data?.results.map((launch) => {
        // launches from API do not have key "date" but "net" so we create key "date" based on "net" to unify all data
        launch.date = launch['net'];

        // launches also do not have "descrption" so we create key "description" to unify all data
        launch.description = '🚀 LAUNCHING EVENT! 🚀';

        // avoiding repetition in data
        allData?.indexOf(launch) === -1 && allData?.push(launch);

        // conditional rendering "load more" button
        allData!.length > eventsListLength ? setShowButton(true) : setShowButton(false);

        const trimedData = allData?.slice(0, eventsListLength);
        setAllEvents(trimedData);
      });
    }
  }, [events.status, launches.status, eventsListLength]);

  const loadMoreItems = () => {
    setEventsListLength(eventsListLength + 8);
  };

  return (
    <>
      <StyledEventListWrapper>
        {(events.status === RequestStatus.FETCHING || launches.status === RequestStatus.FETCHING) && (
          <Loader type="RevolvingDot" color={theme.colors.rose} height={100} width={100} />
        )}
        {allEvents?.map((event) => (
          <EventItem
            eventDate={new Date(event.date)}
            description={event.description}
            title={event.name}
            key={event.id}
          />
        ))}
      </StyledEventListWrapper>
      {showButton && <Button onClick={loadMoreItems}>{'load more...'}</Button>}
    </>
  );
};

export default EventList;
