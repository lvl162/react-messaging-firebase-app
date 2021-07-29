import React from 'react';
import ChatBox from '../components/ChatBox';
import ChatNav from '../components/ChatNav';

const MessagePage = () => {
  return (
    <div>
      <div className='message-container'>
        <ChatNav />
        <ChatBox />
      </div>
    </div>
  );
};

export default MessagePage;
