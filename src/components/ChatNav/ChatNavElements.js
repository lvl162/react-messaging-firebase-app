import styled from 'styled-components';
// chat nav
// header ---- icon
// search

// list chat container

// chatitems

export const ChatNavContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(0, 0, 0, 0.8);
  width: 360px;
  @media screen and (min-width: 900px) {
  }
`;
export const SearchBar = styled.input`
  padding: 5px 10px;
  display: flex;
  color: #ebedf0;
  border-radius: 10px;
  border: 1px solid black;
  border-left: none;

  font-size: x-large;
  background: gray;
`;
export const HeaderContainer = styled.div`
  display: flex;
  border: 1px solid gray;
  border-left: none;

  border-radius: 2%;
  justify-content: space-between;
`;
export const Logo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const Icon = styled.div``;
export const ChatList = styled.div`
  overflow-y: scroll;
  border-radius: 5px;
  border: 1px solid gray;
  border-left: none;
  display: flex;
  flex-direction: column;
  min-height: 480px;
  /* height: 658px; */
  flex: 1 1 auto;
`;

export const NameAndMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ChatItem = styled.div`
  display: flex;
  &:hover {
    background-color: red;
  }
  padding: 10px;
  color: #fff;
  gap: 20px;
`;
export const ListOptions = styled.div`
  display: flex;
  justify-content: left;
  color: #fff;
`;
