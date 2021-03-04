import StyledDescription from './Description.styles';

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => <StyledDescription>{description}</StyledDescription>;

export default Description;
