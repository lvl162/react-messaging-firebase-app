import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoMdPhotos } from 'react-icons/io';
import { GiFallingStar } from 'react-icons/gi';
import {
  ChatListContainer,
  GroupButtonsOfOptions,
  InboxBodyContainer,
  InboxBodyWrapper,
  InboxContainer,
  InboxHeaderContainer,
  InboxHeaderWrapper,
  InboxWrapper,
  MessageItemWrapper,
  MessagePageContainer,
  MessageSectionWrapper,
  MyMessageItem,
  MyMessageItemFirst,
  MyMessageItemLast,
  MyMessageItemMiddle,
  MyMessageItemsContainer,
  NavBarSection,
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
} from './elements';

// chat list memo
const ChatList = () => {
  return (
    <ChatListContainer>
      <ChatListHeader>
        <ChatListHeaderWrapper>Contacts</ChatListHeaderWrapper>
      </ChatListHeader>
      <ChatListSearchBar>
        <ChatListSearchBarWrapper></ChatListSearchBarWrapper>
      </ChatListSearchBar>
      <ListContactsContainer>
        <ListContactsWrapper>
          <ContactItemContainer>
            <ContactItemWrapper>
              <UserAvt>AVT</UserAvt>
              <UserName>A Loi dz</UserName>
            </ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
          <ContactItemContainer>
            <ContactItemWrapper>Contact 1</ContactItemWrapper>
          </ContactItemContainer>
        </ListContactsWrapper>
      </ListContactsContainer>
    </ChatListContainer>
  );
};

const InboxSection = () => {
  let inputRef = null;
  const handleSubmit = () => {
    console.log('submit called');
    const msg = inputRef.textContent;
    if (msg !== '') {
      console.log(msg + ' sent');
      inputRef.focus();
      inputRef.textContent = '';
    }
  };
  return (
    <InboxContainer>
      <InboxWrapper>
        <InboxHeaderContainer>
          <InboxHeaderWrapper>header</InboxHeaderWrapper>
        </InboxHeaderContainer>
        <InboxBodyContainer>
          <InboxBodyWrapper>
            <YourMessageItemsContainer>
              <YourMessageAvt>AVT</YourMessageAvt>
              <YourMessageItemsWrapper>
                <p>Your name</p>
                <YourMessageItemFirst>
                  TESTTESTSTSETSETSTST
                </YourMessageItemFirst>

                <YourMessageItemMiddle>
                  TESTTESTSTSETSETSTSTadfsafafa
                </YourMessageItemMiddle>

                <YourMessageItemMiddle>
                  TESTTESTSTSETSETSTSTxxx
                </YourMessageItemMiddle>

                <YourMessageItemMiddle>
                  Vitae facere tempora nisi corrupti sapiente fugit impedit
                  assumenda praesentium nulla! Perferendis sed provident, ex
                  quidem officia porro accusamus maxime in inventore.
                </YourMessageItemMiddle>
                <YourMessageItemMiddle>
                  Vitae facere tempora nisi corrupti sapiente fugit impedit
                  assumenda praesentium nulla! Perferendis sed provident, ex
                  quidem officia porro accusamus maxime in inventore.
                </YourMessageItemMiddle>
                <YourMessageItemMiddle>
                  Vitae facere tempora nisi corrupti sapiente fugit impedit
                  assumenda praesentium nulla! Perferendis sed provident, ex
                  quidem officia porro accusamus maxime in inventore.
                </YourMessageItemMiddle>

                <YourMessageItemLast>TESTTESTSTSETSETSTST</YourMessageItemLast>
              </YourMessageItemsWrapper>
            </YourMessageItemsContainer>
            <YourMessageItemsContainer>
              <YourMessageAvt>AVT</YourMessageAvt>
              <YourMessageItemsWrapper>
                <p>Your name</p>
                <YourMessageItemFirst>
                  TESTTESTSTSETSETSTST
                </YourMessageItemFirst>

                <YourMessageItemMiddle>
                  TESTTESTSTSETSETSTSTadfsafafa
                </YourMessageItemMiddle>

                <YourMessageItemMiddle>
                  TESTTESTSTSETSETSTSTxxx
                </YourMessageItemMiddle>

                <YourMessageItemMiddle>
                  Vitae facere tempora nisi corrupti sapiente fugit impedit
                  assumenda praesentium nulla! Perferendis sed provident, ex
                  quidem officia porro accusamus maxime in inventore.
                </YourMessageItemMiddle>
                <YourMessageItemMiddle>
                  Vitae facere tempora nisi corrupti sapiente fugit impedit
                  assumenda praesentium nulla! Perferendis sed provident, ex
                  quidem officia porro accusamus maxime in inventore.
                </YourMessageItemMiddle>
                <YourMessageItemMiddle>
                  Vitae facere tempora nisi corrupti sapiente fugit impedit
                  assumenda praesentium nulla! Perferendis sed provident, ex
                  quidem officia porro accusamus maxime in inventore.
                </YourMessageItemMiddle>

                <YourMessageItemLast>TESTTESTSTSETSETSTST</YourMessageItemLast>
              </YourMessageItemsWrapper>
            </YourMessageItemsContainer>

            <MyMessageItemsContainer>
              <MyMessageItemFirst>TESTTESTSTSETSETSTST</MyMessageItemFirst>
              <MyMessageItemMiddle>TESTTESTSTSETSETSTST</MyMessageItemMiddle>
              <MyMessageItemLast>TESTTESTSTSETSETSTST</MyMessageItemLast>
            </MyMessageItemsContainer>
            <MyMessageItemsContainer>
              <MyMessageItemFirst>TESTTESTSTSETSETSTST</MyMessageItemFirst>
              <MyMessageItemMiddle>TESTTESTSTSETSETSTST</MyMessageItemMiddle>
              <MyMessageItemLast>TESTTESTSTSETSETSTST</MyMessageItemLast>
            </MyMessageItemsContainer>
            <MyMessageItemsContainer>
              <MyMessageItemFirst>TESTTESTSTSETSETSTST</MyMessageItemFirst>
              <MyMessageItemMiddle>TESTTESTSTSETSETSTST</MyMessageItemMiddle>
              <MyMessageItemLast>TESTTESTSTSETSETSTST</MyMessageItemLast>
            </MyMessageItemsContainer>
            <MyMessageItemsContainer>
              <MyMessageItemFirst>TESTTESTSTSETSETSTST</MyMessageItemFirst>
              <MyMessageItemMiddle>TESTTESTSTSETSETSTST</MyMessageItemMiddle>
              <MyMessageItemLast>TESTTESTSTSETSETSTST</MyMessageItemLast>
            </MyMessageItemsContainer>
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
              {/* <Option>4</Option> */}
            </GroupButtonsOfOptions>
            <SendMessageForm
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <SendMessageInput
                contentEditable={true}
                ref={(node) => (inputRef = node)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    console.log('nah ok');
                    handleSubmit();
                  }
                  if (e.key === 'Enter' && e.shiftKey) {
                    console.log('ok');
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

export const MessageSection = () => {
  return (
    <MessageSectionWrapper>
      <ChatList></ChatList>
      <InboxSection></InboxSection>
    </MessageSectionWrapper>
  );
};
