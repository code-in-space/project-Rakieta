import { FC } from 'react';
import StyledDescription from './Description.styles';

interface DescriptionProps {
    description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => <StyledDescription>{description}</StyledDescription>;

export default Description;
