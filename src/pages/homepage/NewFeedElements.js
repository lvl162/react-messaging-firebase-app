import styled from 'styled-components';
export const NewFeedConainter = styled.div`
  margin: auto;
  margin-top: 54px;
  z-index: 1;
  width: 100%;
  padding-top: 20px;
`;
export const PostsListContainer = styled.div`
  max-width: 975px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export const PostItemContainer = styled.div`
  border: 1px solid #dbdbdb;
  min-width: 50vw;
`;

export const PostItemHeaderContainer = styled.header`
  border-bottom: 1px solid #dbdbdb;
`;
export const PostItemHeaderWrapper = styled.div`
  display: flex;
  align-items: space-between;
  margin: 10px 20px;
`;

export const PostItemBodyContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;

export const PostItemBodyWrapper = styled.div`
  display: flex;
  align-items: space-between;
  margin: 20px;
`;

export const PostItemHeaderProfile = styled.div`
  display: flex;
  flex: 1 0 0%;
  min-width: 45vw;
  gap: 20px;
  align-self: flex-start;
  align-items: center;
`;
export const PostItemHeaderAvt = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: 50%;
  cursor: pointer;
  border: 1px gray solid;
  padding: 3px;
`;
export const PostItemHeaderName = styled.div`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  &:hover {
    font-style: bold;
    font-weight: 600;
  }
`;
export const PostItemHeaderOptions = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  flex: 1 0 0%;
  justify-content: baseline;
`;

// footer

export const PostItemFooterContainer = styled.footer`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;
export const PostItemFooterWrapper = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const LikeButton = styled.button`
  flex: 1 0 50%;
  min-width: 100px;
  background-color: pink;
  padding: 10px 15px;
  border-radius: 10%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  font-style: bold;
  background-size: 200% auto;
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
`;
export const CommentButton = styled.button`
  flex: 1 0 50%;
  min-width: 100px;
  background-color: pink;
  padding: 10px 15px;
  border-radius: 10%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  font-style: bold;
  background-size: 200% auto;
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
`;
