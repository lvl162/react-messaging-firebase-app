import React from 'react';
import { Redirect } from 'react-router-dom';

const MessagePage = ({ match }) => {
  const { he_whos_message_to } = match.params;

  if (!he_whos_message_to) {
    return <Redirect to='/404' />;
  }
  return <h1>Hello {he_whos_message_to}</h1>;
};

export default MessagePage;
