import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const MessagePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MessageSectionWrapper = styled.main`
  /* margin: auto; */
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  min-height: 0;
  min-width: 700px;
  overflow: auto;
  max-width: 70vw;
`;

// chat list
export const ChatListContainer = styled.nav`
  min-width: 23%;
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 1 0;
  background-color: #fff;
`;

export const ChatListHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  max-height: 10vh;
`;
export const ChatListHeaderWrapper = styled.header`
  text-align: center;
  padding: 10px;
  font-size: 1.5em;
  font-weight: 510;
`;
export const ChatListSearchBar = styled.div`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
  max-height: 10vh;
`;
export const ChatListSearchBarWrapper = styled.input`
  font-size: 1em;
  font-weight: 510;
`;
export const ListContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  max-height: 80vh;
`;

export const ListContactsWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

export const ContactItemContainer = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #dbdbdb;
  &:hover {
    background: gray;
  }
  display: flex;
  align-items: center;
`;
export const ContactItemWrapper = styled(Link)`
  flex: 1;
  padding: 0px 2px;
  user-select: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

export const UserAvt = styled.div`
  align-self: flex-start;
  border-radius: 50%;
  /* border: 1px solid; */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NameAndLastMessage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const UserName = styled.div`
  font-size: 1em;
  font-weight: 500;
`;

export const HistoryLastMessage = styled.span`
  white-space: nowrap;

  font-size: 0.9em;
  font-weight: 400;
`;
// ib part
export const InboxContainer = styled.div`
  flex: 1 0 75%;
  max-width: 75vw;
  width: 75vw;
  background-color: gray;
  display: flex;
  height: 100%;
  min-width: 550px;
  overflow: auto;
  background: #fff;
`;
export const InboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  min-height: 0;
  width: 100%;
  /* overflow-y: hidden; */
`;

// header: avt, name, ...
export const InboxHeaderContainer = styled.header`
  min-width: 100%;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  background-color: white;
  flex: 1 0 50px;
`;
export const InboxHeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InboxHeaderAvt = styled.div`
  margin: 10px;
  font-size: 1.1rem;
  font-weight: 500;
`;
export const InboxHeaderNameAndStatus = styled.div`
  margin-right: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

export const InboxHeaderName = styled.h5`
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;
export const InboxHeaderStatus = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

// inbox body part

export const InboxBodyContainer = styled.div`
  display: flex;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  width: 100%;
  flex: 1 0 0px;
  min-height: 80vh;
  padding-bottom: 7px;
`;
export const InboxBodyWrapper = styled.div`
  flex: 1;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  /* margin: 0 10px; // WARMIMG */
  /* flex-flow: column wrap; */
  align-items: flex-start;
  /* flex-wrap: wrap; */
  flex-direction: column-reverse;
  overflow: auto;
  padding: 0 10px;
`;

export const MessageItemWrapper = styled.div`
  border-radius: 1rem;
  padding: 0.4rem 0.7rem;
  margin: 0.0625rem;
  max-width: 45%;
  overflow-wrap: break-word;
  max-width: 300px;
`;

export const MyMessageItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-self: flex-end;
`;
export const MyMessageItem = styled(MessageItemWrapper)`
  align-self: flex-end;
  background-color: #efefef;
  margin-right: 0.5rem;
`;
export const MyMessageItemFirst = styled(MyMessageItem)`
  border-bottom-right-radius: 0.1em;
`;
export const MyMessageItemLast = styled(MyMessageItem)`
  border-top-right-radius: 0.1em;
`;
export const MyMessageItemMiddle = styled(MyMessageItem)`
  border-bottom-right-radius: 0.1em;
  border-top-right-radius: 0.1em;
`;

export const YourMessageItemsContainer = styled.div`
  display: flex;
  gap: 6px;
  min-width: 200px;
  /* flex-direction: column; */
`;

export const YourMessageAvt = styled.div`
  max-width: 60px;
  align-self: flex-end;
  /* border-radius: 50%;
  border: solid 1px #dbdbdb; */
`;

export const YourMessageItemsWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* flex-flow: column wrap; */
`;
export const YourNameTag = styled.div`
  padding-left: 3.5px;
  font-size: 0.9rem;
  color: gray;
  font-style: bold;
`;

export const YourMessageItem = styled(MessageItemWrapper)`
  align-self: flex-start;
  background-color: cornflowerblue;
  color: #fff;
  background-image: linear-gradient(
    rgba(24, 201, 255, 1),
    rgba(5, 230, 195, 1)
  );
  background-size: 200% 200%;
  background-attachment: local;
`;
export const YourMessageItemFirst = styled(YourMessageItem)`
  border-bottom-left-radius: 0.1em;
`;
export const YourMessageItemLast = styled(YourMessageItem)`
  border-top-left-radius: 0.1em;
`;
export const YourMessageItemMiddle = styled(YourMessageItem)`
  border-bottom-left-radius: 0.1em;
  border-top-left-radius: 0.1em;
`;
// send message part
export const SendMessageContainer = styled.div`
  flex: 2;
  max-height: 30vh;
  min-width: 100%;
  background-color: white;
  display: flex;
  height: auto;
  justify-content: center;
  background: white;
  max-width: 75vw;
  border-right: 1px solid #dbdbdb;
`;
export const SendMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const GroupButtonsOfOptions = styled.div`
  margin: 0 10px;
  display: flex;
  min-width: 20px;
  gap: 10px;
  align-items: space-between;
  justify-content: center;
`;
export const Option = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 0 4px gray;
  }
`;

export const SendMessageForm = styled.form`
  flex: 1;
  display: flex;
`;
export const SendMessageInput = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  &:focus {
    outline: none;
  }
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  overflow-wrap: break-word;
  word-break: break-word;
  height: 40px;
  max-height: 15vh;
  overflow: auto;
  flex: 1;
  font-size: 1.1rem;
  pointer-events: auto;
  line-height: 1.1;
  white-space: pre-wrap;
  direction: ltr;
  &:empty:not(:focus):before {
    font-size: 1rem;
    content: attr(data-ph);
    color: grey;
    font-style: bold;
  }
`;

export const SendMessageSubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SendMessageSubmit = styled.button`
  background-color: pink;
  padding: 5px 15px;
  border-radius: 10%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-style: bold;
  background-size: 100% 100%;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    to right,
    #895cf2 0%,
    #ffabf4 50%,
    #895cf2 100%
  );
  transition: 1s;
  &:hover {
    background-position: right center;
  }
  max-width: 100px;
  max-height: 100px;
`;
