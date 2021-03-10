import { FC } from 'react';
import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import { EventWrapper, DateWrapper, DescriptionWrapper, ColoredYear } from '../Event/EventItem.styles';

export interface EventProps {
  description?: string;
  background?: string;
  title?: string;
  eventDate?: Date;
}

const EventItem: FC<EventProps> = ({ title, description, eventDate }) => {
  const year = eventDate ? eventDate.getUTCFullYear() : null;
  //getMonth - returns month 0-11 so we need +1 to get right number
  const month = eventDate ? eventDate.getUTCMonth() + 1 : null;
  const day = eventDate ? eventDate.getUTCDate() : null;
  const time = eventDate ? eventDate.toTimeString().slice(0, 8) : null;

  // adding 0 when number of a month or a day is less than 10, ex. 03.04 for march 4th
  const fullDate = eventDate ? ` / ${month! < 10 ? `0${month}` : month} / ${day! < 10 ? `0${day}` : day}` : null;

  //limit character length to the "limit" signs for description (if containts more than "limit")
  const limit = 90;
  const cuttedDescription = description
    ? description.length > limit
      ? description!.substring(0, limit)
      : description
    : null;
  //then trimming to the last full word (if cutted)
  const trimmedDescription = cuttedDescription
    ? `${cuttedDescription.substring(0, cuttedDescription.lastIndexOf(' '))}...`
    : description;

  return (
    <EventWrapper>
      {eventDate ? (
        <DateWrapper>
          <div>
            <ColoredYear>{year}</ColoredYear>
            {fullDate}
          </div>
          <div>{`${time} UTC`}</div>
        </DateWrapper>
      ) : (
        <DateWrapper>
          <div>
            {`We don't know the date`}
            <ColoredYear>{` yet...`}</ColoredYear>
          </div>
        </DateWrapper>
      )}
      <DescriptionWrapper>
        <Title title={title || 'No Name Event :('} />
        <Description description={trimmedDescription || 'There are no words to describe this epic event!'} />
      </DescriptionWrapper>
      <Button content="details" />
    </EventWrapper>
  );
};
export default EventItem;
