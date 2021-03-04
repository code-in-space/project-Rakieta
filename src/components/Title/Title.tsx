import StyledTitle from './Title.styles';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => <StyledTitle>{title}</StyledTitle>;

export default Title;
