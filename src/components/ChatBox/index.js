import React, { useState, useRef, useEffect } from 'react';
import Avatar from 'react-avatar';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore, serverTimestamp } from '../../lib/firebase';
import {
  ChatArea,
  ChatBoxContainer,
  ChatBoxWrapper,
  HeaderContainer,
  ListIconsOption,
  AvtAndName,
  ChatMessageItem,
  ChatText,
  ChatInput,
  SendButton,
  SendButtonWrapper,
  ChatInputContainer,
} from './ChatBoxElements';

const ChatMessageItemWrapper = (props) => {
  const { me, message } = props;
  return (
    <ChatMessageItem me={me}>
      <span>
        {me && (
          <Avatar
            color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
            name='Wim Mostmans'
            size={40}
            round='50%'
          />
        )}
      </span>
      <ChatText>{message}</ChatText>
    </ChatMessageItem>
  );
};

const ChatAreaWrapper = () => {
  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };
  const ref = firestore.collection('messages');
  const query = ref.orderBy('createdAt');
  const [querySnapshot] = useCollection(query);

  const messages = querySnapshot?.docs.map((doc) => doc.data());
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      <ChatArea>
        {messages &&
          messages.map((m) => (
            <ChatMessageItemWrapper me={m.me} message={m.message} />
          ))}
        <div ref={bottomRef} className='list-bottom'></div>
      </ChatArea>
    </>
  );
};

const ChatInputWrapper = (props) => {
  const [input, setInput] = useState('');
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input !== '') {
      await firestore.collection('messages').add({
        name: 'Tokyo',
        message: input,
        createdAt: serverTimestamp(),
      });

      setInput('');
    }

    // Tip: give all fields a default value here
  };

  return (
    <ChatInputContainer>
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Send a message'
      ></ChatInput>
      <SendButtonWrapper type='submit' onClick={handleSendMessage}>
        <SendButton></SendButton>
        <span>Send</span>
      </SendButtonWrapper>
    </ChatInputContainer>
  );
};

const ChatBox = () => {
  return (
    <ChatBoxContainer>
      <ChatBoxWrapper>
        <HeaderContainer>
          <AvtAndName>
            <h1>AVT</h1>
            <h2>Name</h2>
          </AvtAndName>
          <ListIconsOption>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
          </ListIconsOption>
        </HeaderContainer>
        <ChatAreaWrapper />
        <ChatInputWrapper />
      </ChatBoxWrapper>
    </ChatBoxContainer>
  );
};

export default ChatBox;
