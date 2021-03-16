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
      <Title title="apollo 404" hero />
      <Description description="Okay, Houston, we've had a problem here... that page isn’t exist." hero />
      <Button content="back to previous page" marginTop onClick={backToPreviousPage} />
    </ErrorPageWrapper>
  );
};
