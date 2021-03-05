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
    const year = eventDate.getFullYear();
    const month = eventDate.getMonth() + 1;
    const day = eventDate.getDate();
    console.log(eventDate);

    return (
        <EventWrapper background={background}>
            <DateWrapper>
                <div>
                    <ColoredYear>{year}</ColoredYear>
                    {` / ${month < 10 ? `0${month}` : month} / ${day < 10 ? `0${day}` : day}`}
                </div>
                <div>20:41:06 GMT</div>
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
