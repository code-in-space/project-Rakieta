import { FC } from 'react';
import StyledTitle from './Title.styles';

interface TitleProps {
    title: string;
}

const Title: FC<TitleProps> = ({ title }) => <StyledTitle>{title}</StyledTitle>;

export default Title;
