import { FC } from 'react';
import StyledTitle from './Title.styles';

interface TitleProps {
  children: string;
  hero?: boolean;
}

const Title: FC<TitleProps> = ({ children, hero }) => <StyledTitle hero={hero}>{children}</StyledTitle>;

export default Title;
