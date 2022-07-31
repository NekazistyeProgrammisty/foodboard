import axios from 'axios';
import * as React from 'react';
import { PIZZA_API_URL } from '../api/url';

export const AuthPage: React.FC = () => {
  const [serverMessage, setServerMessage] = React.useState<string>('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(PIZZA_API_URL)
      .then(({ data }) => setServerMessage(JSON.stringify(data)));
  }, []);

  return (
    <>
      Сегодня будут кассеты мотать😶‍🌫️
      {serverMessage}
      {serverMessage}
      {serverMessage}
      {serverMessage}
      {serverMessage}
      {serverMessage}
      {serverMessage}
    </>
  );
};
