import { FC } from 'react';
import StyledTitle from './Title.styles';

interface TitleProps {
  title: string;
  hero?: boolean;
}

const Title: FC<TitleProps> = ({ title, hero }) => <StyledTitle hero={hero}>{title}</StyledTitle>;

export default Title;
