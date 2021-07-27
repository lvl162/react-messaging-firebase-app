import React from 'react';
import ChatBox from '../components/ChatBox';
import ChatNav from '../components/ChatNav';

const MessagePage = () => {
  return (
    <div className='message-container'>
      <ChatNav />
      <ChatBox />
    </div>
  );
};

export default MessagePage;
