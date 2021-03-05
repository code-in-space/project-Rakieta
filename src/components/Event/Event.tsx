import { FC } from 'react';
import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import { EventWrapper, DateWrapper, DescriptionWrapper, ColoredYear } from './Event.styles';

export interface EventProps {
    description: string;
    background?: string;
    title: string;
}

const Event: FC<EventProps> = ({ title, description, background }) => {
    return (
        <EventWrapper background={background}>
            <DateWrapper>
                <div>
                    <ColoredYear>2021</ColoredYear>
                    {' / 02 / 03'}
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
