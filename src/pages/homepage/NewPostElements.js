import styled from 'styled-components';

export const NewPostContainer = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;
export const NewPostWrapper = styled.div`
  flex: 1;
  min-width: 600px;
  width: 60vw;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const NewPostHeaderContainer = styled.div`
  padding: 15px 10px;
  display: flex;
  max-height: 50px;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
`;
export const HeaderForName = styled.div`
  flex: 1;
`;
export const HeaderForButton = styled.div``;
export const NewPostHeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  max-height: 50px;
`;
export const NewPostHeaderAvt = styled.img`
  padding: 2px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  height: 30px;
  width: 30px;
`;
export const NewPostHeaderNameAndPublic = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const NewPostHeaderName = styled.div`
  font-size: 1rem;
  font-weight: 550;
`;
export const NewPostHeaderPublicOrNot = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
`;
export const NewPostBodyContainer = styled.div`
  display: flex;
  padding: 10px;
`;
export const NewPostBodyWrapper = styled.div`
  flex: 1;
  padding: 5px 10px;
  line-height: 1.33333rem;
  /* height: auto; */
  min-height: 90px;
  /* background: yellow; */
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
  &:focus {
    box-shadow: 0 0 4px #dbdbdb;
    outline: none;
  }
  white-space: pre;
  &:empty:not(:focus):before {
    content: attr(data-ph);
    color: grey;
    font-style: bold;
  }
  /* border: 1px solid #dbdbdb; */
`;

export const NewPostButtons = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FooterButton = styled.div`
  height: 30px;
  cursor: pointer;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px 10px;
  user-select: none;
`;

export const NewPostFooterPost = styled(FooterButton)``;
export const NewPostFooterCancel = styled(FooterButton)``;
