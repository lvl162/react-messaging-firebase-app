import {
  ChatListContainer,
  ChatListHeaderWrapper,
  ChatListHeader,
  ChatListSearchBarWrapper,
  ChatListSearchBar,
  ListContactsContainer,
  ListContactsWrapper,
  ContactItemContainer,
  ContactItemWrapper,
  UserAvt,
  UserName,
  NameAndLastMessage,
  HistoryLastMessage,
} from './elements';
import { memo } from 'react';
import { firestore } from '../../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';
import SuggestUser from '../suggests/SuggestUser';
import { useSelector } from 'react-redux';
const NotFound = styled.div`
  align-self: flex-start;
  text-align: center;
  justify-content: center;
  /* margin: auto; */
`;

const ChatHistory = memo(() => {
  console.log('render chat history');
  const me = useSelector((state) => state.auth.user);
  const messagesRef = firestore.collection('chats');
  const historyChatQuery = messagesRef
    .where('members', 'array-contains', me.uid)
    .orderBy('lastUpdated', 'desc');
  const [historyChat, loading, error] = useCollection(historyChatQuery);
  if (loading) return <Loading />;
  if (error) {
    return <h1>Error!!!</h1>;
  }

  const listHistory = historyChat.docs.length ? (
    historyChat.docs.map((doc) => {
      const h = doc.data();
      const you = h.members[0] === me.uid ? h.members[1] : h.members[0];
      const linkTo = `/message/t/${you}`;
      const { photoURL, displayName } = h.roomInfo[you];
      const prefix =
        h.lastMessage.from === me.uid
          ? 'You: '
          : `${displayName.split(' ')[0]}: `;
      const lastMessage = prefix + h.lastMessage.content;
      const dotMess =
        lastMessage.length > 25
          ? lastMessage.substring(0, 25) + '...'
          : lastMessage;

      return (
        <ContactItemContainer key={you}>
          <ContactItemWrapper to={linkTo}>
            <UserAvt>
              <Avatar src={photoURL} size='35' round='true' />
            </UserAvt>
            <NameAndLastMessage>
              <UserName>{displayName}</UserName>
              <HistoryLastMessage>{dotMess}</HistoryLastMessage>
            </NameAndLastMessage>
          </ContactItemWrapper>
        </ContactItemContainer>
      );
    })
  ) : (
    <NotFound>
      <SuggestUser />
    </NotFound>
  );
  return (
    <ChatListContainer>
      <ChatListHeader>
        <ChatListHeaderWrapper>Contacts</ChatListHeaderWrapper>
      </ChatListHeader>
      <ChatListSearchBar>
        <ChatListSearchBarWrapper></ChatListSearchBarWrapper>
      </ChatListSearchBar>
      <ListContactsContainer>
        {listHistory}
        <ListContactsWrapper></ListContactsWrapper>
      </ListContactsContainer>
    </ChatListContainer>
  );
});
export default ChatHistory;
