import styled from 'styled-components';
import { IoMdSend } from 'react-icons/io';

export const ChatBoxContainer = styled.div`
  flex-grow: 1;
  background-color: blueviolet;
  /* margin-left: -20px; */
`;

export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: green;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  flex: 0 1 auto;
  background: yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatArea = styled.div`
  margin-top: 10px;
  background: green;
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const ChatInputContainer = styled.div`
  background: white;
  flex: 0 1 45px;
  display: flex;
  min-height: 40px;
`;

export const ChatInput = styled.input`
  flex-grow: 1;
  font-size: large;
`;

export const AvtAndName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
export const ListIconsOption = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ChatMessageItem = styled.div`
  border-radius: 10px;
  color: white;
  text-align: ${({ me }) => (me ? 'left' : 'right')};
  padding: 0 20px;
  font-size: x-large;
  display: flex;
  flex-direction: ${({ me }) => (me ? 'row' : 'row-reverse')};
  margin-bottom: 5px;
`;

export const ChatText = styled.span`
  border: 1px black solid;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 20px;
  font-size: large;
  padding: 10px;
  background: blue;
`;

export const SendButtonWrapper = styled.button`
  user-select: none;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
`;
export const SendButton = styled(IoMdSend)`
  cursor: pointer;
  font-size: 1.9rem;
`;
