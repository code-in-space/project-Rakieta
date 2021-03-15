import styled from 'styled-components';
import StyledDescription from '../../atoms/Description/Description.styles';

export const EventWrapper = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.white};
  padding: 20px;
  width: 290px;
  height: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-left: -1px;
  margin-top: -1px;
`;

export const FullDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateWrapper = styled.div`
  display: flex;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 50%;
`;

export const ColoredYear = styled(StyledDescription)`
  color: ${({ theme }) => theme.colors.rose};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
