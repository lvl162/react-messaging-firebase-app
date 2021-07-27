import React from 'react';
import Avatar from 'react-avatar';

import {
  ChatItem,
  ChatList,
  ChatNavContainer,
  HeaderContainer,
  Logo,
  SearchBar,
  ListOptions,
  NameAndMessage,
} from './ChatNavElements';
const ChatNav = () => {
  return (
    <ChatNavContainer>
      <HeaderContainer>
        <Logo>CHAT</Logo>
        <ListOptions>
          <Logo>1</Logo>
          <Logo>2</Logo>
          <Logo>3</Logo>
        </ListOptions>
      </HeaderContainer>
      <SearchBar placeholder='placeholder text'></SearchBar>
      <ChatList>
        <ChatItem>
          <Avatar
            color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
            name='Wim Mostmans'
            size={50}
            round='50%'
          />
          <NameAndMessage>
            <h1>My name</h1>
            <p>qua ngu ngoc ne</p>
          </NameAndMessage>
        </ChatItem>
      </ChatList>
    </ChatNavContainer>
  );
};

export default ChatNav;
