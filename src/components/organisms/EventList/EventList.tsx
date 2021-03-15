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
  net: string;
  description: string;
  name: string;
  id: number | string;
}

const EventList: FC = () => {
  const [allEvents, setAllEvents] = useState<Event[] | null | undefined>(null);

  const events = useRequest<FetchedData>(`${API_BASE_URL}event/upcoming/`);
  const launches = useRequest<FetchedData>(`${API_BASE_URL}launch/upcoming/`);

  const createEventsList = async () => {
    const allData = events.data?.results;
    await launches.data?.results.map((launch) => {
      // launches from API do not have key "date" but "net" so we create key "date" based on "net" to unify all data
      launch.date = launch['net'];

      // launches also do not have "descrption" so we create key "description" to unify all data
      launch.description = 'Launching Event 🚀';

      // avoiding repetition in data
      allData?.indexOf(launch) === -1 && allData?.push(launch);
    });
    await setAllEvents(allData);
  };

  createEventsList();
  console.log(allEvents);

  return (
    <StyledEventListWrapper>
      {allEvents === null && <Loader type="RevolvingDot" color={theme.colors.rose} height={100} width={100} />}
      {allEvents?.map((event) => (
        <EventItem eventDate={new Date(event.date)} description={event.description} title={event.name} key={event.id} />
      ))}
    </StyledEventListWrapper>
  );
};

export default EventList;
