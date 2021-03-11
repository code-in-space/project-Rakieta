import { FC } from 'react';
import StyledDescription from './Description.styles';

interface DescriptionProps {
  description: string;
  hero?: boolean;
}

const Description: FC<DescriptionProps> = ({ description, hero }) => (
  <StyledDescription hero={hero}>{description}</StyledDescription>
);

export default Description;
