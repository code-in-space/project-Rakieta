import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

interface EventProps {
  date: Date;
  title: string;
  description: string;
  background?: string;
}

interface EventWrapperProps {
  background?: string;
}

const EventWrapper = styled.div<EventWrapperProps>`
  background-color: ${({ theme, background }) => (background ? background : theme.backgrounds.transparent)};
  color: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.white};
  padding: 20px;
  max-width: 290px;
  height: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  letter-spacing: 1px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 50%;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-transform: uppercase;
`;

const ColoredYear = styled.span`
  color: ${({ theme }) => theme.colors.rose};
`;

const Event = ({ title, date, description, background }: EventProps) => {
  const year = date.getFullYear();
  const month = date.toLocaleDateString().split('/')[1];
  const day = date.toLocaleDateString().split('/')[0];
  const time = date.toLocaleTimeString();

  return (
    <EventWrapper background={background}>
      <DateWrapper>
        <div>
          <ColoredYear>{year}</ColoredYear>/{month}/{day}
        </div>
        <div>{time}</div>
      </DateWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <div>{description}</div>
      </DescriptionWrapper>
      <Button size={30}>+</Button>
    </EventWrapper>
  );
};
export default Event;
