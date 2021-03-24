import { FC } from 'react';
import { ErrorPageWrapper } from './ErrorPage.styles';
import Title from '../../atoms/Title/Title';
import Description from '../../atoms/Description/Description';
import Button from '../../atoms/Button/Button';
import { useHistory } from 'react-router-dom';

export const ErrorPage: FC = () => {
  const history = useHistory();
  const backToPreviousPage = () => {
    history.goBack();
  };

  return (
    <ErrorPageWrapper>
      <Title hero>{'apollo 404'}</Title>
      <Description hero>{"Okay, Houston, we've had a problem here... that page isn’t exist."}</Description>
      <Button marginTop onClick={backToPreviousPage}>
        {'back to previous page'}
      </Button>
    </ErrorPageWrapper>
  );
};
