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

export const NavBarSection = styled.nav`
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  flex-shrink: 0;
`;
export const MessageSectionWrapper = styled.main`
  /* margin: auto; */
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  min-height: 0;
  max-width: 70vw;
  /* overflow: hidden; */
`;

// chat list
export const ChatListContainer = styled.nav`
  min-width: 25%;
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChatListHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  max-height: 10vh;
`;
export const ChatListHeaderWrapper = styled.header`
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
  height: 100px;
  border-bottom: 1px solid black;
  &:hover {
    background: gray;
  }
`;
export const ContactItemWrapper = styled(Link)`
  padding: 20px;
  user-select: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
`;

export const UserAvt = styled.div`
  align-self: flex-start;
  border-radius: 50%;
  /* border: 1px solid; */
  width: 50px;
  height: 50px;
`;
export const UserName = styled.div`
  font-size: 1em;
  font-weight: 300;
`;
// ib part
export const InboxContainer = styled.div`
  flex: 1 0 75%;
  max-width: 75vw;
  background-color: gray;
  display: flex;
  height: 100%;
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
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  flex: 1 0 50px;
`;
export const InboxHeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

// inbox body part

export const InboxBodyContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  flex: 1 0 0px;
  height: 80vh;
`;
export const InboxBodyWrapper = styled.div`
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
  max-width: 100%;
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
`;

export const YourMessageAvt = styled.div`
  max-width: 60px;
  align-self: flex-end;
  border-radius: 50%;
  border: solid 1px #dbdbdb;
`;

export const YourMessageItemsWrapper = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
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
  width: 100%;
  background-color: white;
  display: flex;
  height: auto;
  justify-content: center;
  background: white;
  max-width: 75vw;
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
