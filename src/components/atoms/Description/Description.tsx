import { FC } from 'react';
import StyledDescription from './Description.styles';

interface DescriptionProps {
  description: string;
  hero?: boolean;
  date?: boolean;
  year?: boolean;
}

const Description: FC<DescriptionProps> = ({ description, ...props }) => (
  <StyledDescription {...props}>{description}</StyledDescription>
);

export default Description;
