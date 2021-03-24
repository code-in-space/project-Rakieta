import { FC } from 'react';
import StyledDescription from './Description.styles';

interface DescriptionProps {
  children: string;
  hero?: boolean;
  date?: boolean;
  year?: boolean;
}

const Description: FC<DescriptionProps> = ({ children, ...props }) => (
  <StyledDescription {...props}>{children}</StyledDescription>
);

export default Description;
