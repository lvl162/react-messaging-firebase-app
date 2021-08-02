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
import {
  useCollection,
  useCollectionDataOnce,
  useCollectionOnce,
} from 'react-firebase-hooks/firestore';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import Avatar from 'react-avatar';
const NotFound = styled.div`
  align-self: center;
  text-align: center;
  justify-content: center;
  margin: auto;
`;
const ChatHistory = memo(({ me }) => {
  const messagesRef = firestore.collection('chats');

  const historyChatQuery = messagesRef
    .where('members', 'array-contains', me.uid)
    .orderBy('lastUpdated', 'desc');
  const [historyChat, loading, error] = useCollection(historyChatQuery);
  if (loading) return <Loading />;
  if (error) {
    console.log(error)
    return <h1>Error!!!</h1>;}
  if (historyChat) {
    const listHistory = historyChat.docs.length ? (
      historyChat.docs.map((doc) => {
        const chatRoomId = doc.id;
        const h = doc.data();
        console.log(chatRoomId, h);
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
                <Avatar src={photoURL} size='30' />
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
        <h3>Ket ban voi tao!</h3>
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
  }
});
export default ChatHistory;
