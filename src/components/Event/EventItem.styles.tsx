import styled from 'styled-components';

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
  font-size: ${({ theme }) => theme.fontSizes.s};
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

const ColoredYear = styled.span`
  color: ${({ theme }) => theme.colors.rose};
`;

export { EventWrapper, DateWrapper, DescriptionWrapper, ColoredYear };
