import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostsListContainer = styled.div`
  max-width: 975px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export const PostItemContainer = styled.div`
  border-radius: 8px;

  border: 1px solid #dbdbdb;
  width: 60vw;
  min-width: 600px;
  overflow: auto;
  background: #fff;
  display: ${({ deleted }) => (!deleted ? 'flex' : 'none')};
  flex-direction: column;
  max-height: 400px;
`;

export const NewPostContainer = styled.div`
  display: flex;
  background: #fff;
`;
export const NewPostWrapper = styled.div`
  flex: 1;
  padding: 15px;
  min-width: 600px;
  width: 60vw;
  overflow: auto;
`;

export const PostItemHeaderContainer = styled.header`
  border-bottom: 1px solid #dbdbdb;
  max-height: 60px;
  min-height: 50px;
`;
export const PostItemHeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: space-between;
  padding: 10px 10px;
`;

export const PostItemBodyContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  max-height: 500px;
  overflow: auto;
`;

export const PostItemBodyWrapper = styled.div`
  /* display: flex;
  align-items: space-between; */
  margin: 5px 15px;
  font-size: 0.95rem;
  overflow-wrap: break-word;
  line-height: 1.33rem;
  min-height: ${({ updateMode }) => (updateMode ? '100px' : 'auto')};
  width: 100%;
`;

export const PostItemHeaderProfile = styled.div`
  flex: 1;
  width: 100%;
  max-height: 40px;
  display: flex;
  flex: 1 0 0%;
  gap: 10px;
  align-self: flex-start;
  align-items: center;
  overflow: hidden;
`;
export const PostItemHeaderAvt = styled(Link)`
  /* width: 30px;
  height: 30px;
  vertical-align: middle;
  border-radius: 50%;
  cursor: pointer;
  border: 1px gray solid;
  padding: 2px; */
`;
export const PostHeaderNameAndTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const PostItemHeaderName = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-style: bold;
  font-size: 0.95rem;
  font-weight: 500;
  &:hover {
    font-style: bold;
    font-weight: 600;
  }
`;
export const PostItemHeaderTime = styled.div`
  /* cursor: pointer; */
  font-size: 0.75rem;
  font-weight: 400;
  &:hover {
    font-style: bold;
    font-weight: 600;
  }
`;
export const PostItemHeaderOptions = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  align-self: center;
  justify-content: center;
  text-align: end;
`;

// footer

export const PostItemFooterContainer = styled.footer`
  min-height: 40px;
  max-height: 50px;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;
export const PostItemFooterWrapper = styled.div`
  flex: 1;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
export const FooterButton = styled.button`
  border-radius: 10%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  font-style: bold;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
`;
export const LikeButton = styled(FooterButton)`
  /* flex: 1 0 50%; */
  width: fit-content;
`;
export const CommentButton = styled(FooterButton)`
  /* flex: 1 0 50%; */
  width: fit-content;
`;
export const SaveButton = styled(FooterButton)`
  /* flex: 1 0 50%; */
  padding: 2px 5px;
  background: green;
  width: fit-content;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const PostEndMessage = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const LoadMoreButton = styled.button`
  align-self: flex-start;
  background-color: var(--color-gray);
  border: none;
  color: var(--color-text);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0.5rem 1rem 1.2rem 0;
`;
