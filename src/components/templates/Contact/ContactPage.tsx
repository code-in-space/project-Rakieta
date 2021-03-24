import { FC } from 'react';
import { ContactPageWrapper } from './ContactPage.styles';
import Title from '../../atoms/Title/Title';

export const ContactPage: FC = () => (
  <ContactPageWrapper>
    <Title hero>{'Contact Page'}</Title>
  </ContactPageWrapper>
);
