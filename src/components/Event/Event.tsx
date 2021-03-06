import { FC } from 'react';
import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import { EventWrapper, DateWrapper, DescriptionWrapper, ColoredYear } from './Event.styles';

export interface EventProps {
    description: string;
    background?: string;
    title: string;
    eventDate: Date;
}

const Event: FC<EventProps> = ({ title, description, background, eventDate }) => {
    const year = eventDate.getUTCFullYear();
    //getMonth - returns month 0-11 so we need +1 to get right number
    const month = eventDate.getUTCMonth() + 1;
    const day = eventDate.getUTCDate();
    const time = eventDate.toTimeString().slice(0, 8);

    // adding 0 when number of a month or a day is less than 10, ex. 03.04 for march 4th
    const fullDate = ` / ${month < 10 ? `0${month}` : month} / ${day < 10 ? `0${day}` : day}`;

    return (
        <EventWrapper background={background}>
            <DateWrapper>
                <div>
                    <ColoredYear>{year}</ColoredYear>
                    {fullDate}
                </div>
                <div>{`${time} UTC`}</div>
            </DateWrapper>
            <DescriptionWrapper>
                <Title title={title} />
                <Description description={description} />
            </DescriptionWrapper>
            <Button />
        </EventWrapper>
    );
};
export default Event;
