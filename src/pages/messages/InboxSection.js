import { docToJson } from '../../lib/firebase';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoMdPhotos } from 'react-icons/io';
import { GiFallingStar } from 'react-icons/gi';
import {
  GroupButtonsOfOptions,
  InboxBodyContainer,
  InboxBodyWrapper,
  InboxContainer,
  InboxHeaderContainer,
  InboxHeaderWrapper,
  InboxWrapper,
  MyMessageItem,
  MyMessageItemFirst,
  MyMessageItemLast,
  MyMessageItemMiddle,
  MyMessageItemsContainer,
  Option,
  SendMessageContainer,
  SendMessageForm,
  SendMessageInput,
  SendMessageSubmit,
  SendMessageSubmitWrapper,
  SendMessageWrapper,
  YourMessageAvt,
  YourMessageItem,
  YourMessageItemFirst,
  YourMessageItemLast,
  YourMessageItemMiddle,
  YourMessageItemsContainer,
  YourMessageItemsWrapper,
  InboxHeaderName,
  InboxHeaderAvt,
  InboxHeaderNameAndStatus,
  InboxHeaderStatus,
  YourNameTag,
} from './elements';
import { firestore, serverTimestamp } from '../../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Avatar from '../../components/Avatar';

const transformMessages = (ms) => {
  const messages = ms.slice(0).reverse();

  let temp = [messages[0]];
  let result = [];
  let searching = messages[0].from;
  for (let i = 1; i < messages.length; i++) {
    if (messages[i].from === searching) {
      temp.push(messages[i]);
    } else {
      result.push(temp);
      searching = messages[i].from;
      temp = [messages[i]];
    }
  }
  result.push(temp);

  return result;
};
const renderSequenceChat = (myId, photo, yourName, chats) => {
  const isMe = myId === chats[0].from;
  let content = '';
  if (isMe) {
    // render wa tao

    if (chats.length === 1) {
      content = (
        <MyMessageItem key={nanoid()}>{chats[0].content}</MyMessageItem>
      );
    } else if (chats.length === 2) {
      content = (
        <>
          <MyMessageItemFirst key={nanoid()}>
            {chats[0].content}
          </MyMessageItemFirst>
          <MyMessageItemLast key={nanoid()}>
            {chats[1].content}
          </MyMessageItemLast>
        </>
      );
    } else if (chats.length > 2) {
      content = (
        <>
          <MyMessageItemFirst key={nanoid()}>
            {chats[0].content}
          </MyMessageItemFirst>
          {chats.slice(1, chats.length - 1).map((m) => (
            <MyMessageItemMiddle key={nanoid()}>
              {m.content}
            </MyMessageItemMiddle>
          ))}
          <MyMessageItemLast key={nanoid()}>
            {chats[chats.length - 1].content}
          </MyMessageItemLast>
        </>
      );
    }
    return (
      <MyMessageItemsContainer key={nanoid()}>
        {content}
      </MyMessageItemsContainer>
    );
  } else {
    // render wa may
    if (chats.length === 1) {
      content = (
        <YourMessageItem key={nanoid()}>{chats[0].content}</YourMessageItem>
      );
    } else if (chats.length === 2) {
      content = (
        <>
          <YourMessageItemFirst key={nanoid()}>
            {chats[0].content}
          </YourMessageItemFirst>
          <YourMessageItemLast key={nanoid()}>
            {chats[1].content}
          </YourMessageItemLast>
        </>
      );
    } else if (chats.length > 2) {
      content = (
        <>
          <YourMessageItemFirst key={nanoid()}>
            {chats[0].content}
          </YourMessageItemFirst>
          {chats.slice(1, chats.length - 1).map((m) => (
            <YourMessageItemMiddle key={nanoid()}>
              {m.content}
            </YourMessageItemMiddle>
          ))}
          <YourMessageItemLast key={nanoid()}>
            {chats[chats.length - 1].content}
          </YourMessageItemLast>
        </>
      );
    }
    return (
      <YourMessageItemsContainer key={nanoid()}>
        <YourMessageAvt key={nanoid()}>
          <Avatar src={photo} size='28' />
        </YourMessageAvt>
        <YourMessageItemsWrapper key={nanoid()}>
          <YourNameTag key={nanoid()}>{yourName}</YourNameTag>
          {content}
        </YourMessageItemsWrapper>
      </YourMessageItemsContainer>
    );
  }
};
const genChatRoomName = (me, you) => {
  if (me && you) {
    if (me.localeCompare(you) === 0) {
      return `${me}__${me}`;
    } else if (me.localeCompare(you) > 0) {
      return `${me}__${you}`;
    } else {
      return `${you}__${me}`;
    }
  }
  return null;
};

const SayHi = styled.div`
  user-select: none;
  cursor: pointer;
  margin: auto;
  align-self: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
`;
const InboxSection = ({ me, you, messagesInit }) => {
  // const bottomRef = useRef();
  // const scrollToBottom = () => {
  //   bottomRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // };
  const youObject = {
    email: you.email,
    uid: you.uid,
    photoURL: you.photoURL,
    displayName: you.displayName,
  };

  const { photoURL, displayName } = you;
  const myId = me.uid;
  const yourId = you.uid;
  const chatRoomId = genChatRoomName(me.uid, you.uid);

  const handleSayHi = async () => {
    const message = {
      from: myId,
      content: 'Hello!',
      createdAt: serverTimestamp(),
    };
    const lastMessage = {
      from: myId,
      content: 'Hello!',
    };
    const data = {
      members: [myId, yourId],
      roomInfo: { [myId]: me, [yourId]: youObject },
      createdAt: serverTimestamp(),
      lastMessage: lastMessage,
      lastUpdated: serverTimestamp(),
    };
    firestore
      .doc(`chats/${chatRoomId}`)
      .set(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    firestore
      .collection(`chats/${chatRoomId}/messages`)
      .add(message)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const lastMessageRef = firestore
    .collection(`chats/${chatRoomId}/messages`)
    .orderBy('createdAt', 'desc')
    .limit(1);
  const [lastMessage, loading] = useCollection(lastMessageRef);

  const [messages, setMessages] = useState(messagesInit);
  const last = lastMessage && lastMessage.docs.map((doc) => docToJson(doc))[0];
  useEffect(() => {
    if (!loading) {
      if (last && last.createdAt) {
        if (messages.length > 0) {
          const lastMsgState = messages[messages.length - 1];

          if (last.createdAt !== lastMsgState.createdAt) {
            setMessages(messages.concat(last));
          }
        } else {
          setMessages(messages.concat(last));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [last]);

  let inputRef = null;

  const handleSubmit = () => {
    const msg = inputRef.textContent;
    if (msg.trim() !== '') {
      const message = {
        from: myId,
        content: msg + '',
        createdAt: serverTimestamp(),
      };
      const last = {
        from: myId,
        content: msg + '',
      };
      firestore
        .collection(`chats/${chatRoomId}/messages`)
        .add(message)
        .then((res) => console.log(res.id))
        .catch((err) => console.log(err));
      firestore
        .doc(`chats/${chatRoomId}`)
        .update({
          lastMessage: last,
          lastUpdated: serverTimestamp(),
        })
        .then((res) => console.log('oke'))
        .catch((err) => console.log(err));
      inputRef.focus();
      inputRef.textContent = '';
    }
  };
  return (
    <InboxContainer>
      <InboxWrapper>
        <InboxHeaderContainer>
          <InboxHeaderWrapper>
            <InboxHeaderAvt>
              <Avatar size='35' src={photoURL} padding='1' />
            </InboxHeaderAvt>

            <InboxHeaderNameAndStatus>
              <InboxHeaderName>{displayName}</InboxHeaderName>

              <InboxHeaderStatus>{'online'}</InboxHeaderStatus>
            </InboxHeaderNameAndStatus>
          </InboxHeaderWrapper>
        </InboxHeaderContainer>
        <InboxBodyContainer>
          <InboxBodyWrapper>
            {messages.length > 0 ? (
              transformMessages(messages).map((m) => {
                return renderSequenceChat(
                  myId,
                  you.photoURL,
                  you.displayName,
                  m.reverse()
                );
              })
            ) : (
              <SayHi onClick={handleSayHi}>
                <p>Say hi! 👋</p>
              </SayHi>
            )}
          </InboxBodyWrapper>
        </InboxBodyContainer>
        <SendMessageContainer>
          <SendMessageWrapper>
            <GroupButtonsOfOptions>
              <Option>
                <BsFillPlusCircleFill></BsFillPlusCircleFill>
              </Option>
              <Option>
                <IoMdPhotos></IoMdPhotos>
              </Option>
              <Option>
                <GiFallingStar></GiFallingStar>
              </Option>
            </GroupButtonsOfOptions>
            <SendMessageForm
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <SendMessageInput
                data-ph='Send a message...'
                contentEditable={true}
                ref={(node) => (inputRef = node)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                  if (e.key === 'Enter' && e.shiftKey) {
                  }
                }}
              ></SendMessageInput>
              <SendMessageSubmitWrapper>
                <SendMessageSubmit>send</SendMessageSubmit>
              </SendMessageSubmitWrapper>
            </SendMessageForm>
          </SendMessageWrapper>
        </SendMessageContainer>
      </InboxWrapper>
    </InboxContainer>
  );
};

export default InboxSection;
