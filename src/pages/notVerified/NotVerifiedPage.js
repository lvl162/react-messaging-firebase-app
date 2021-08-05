import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../lib/firebase';

const NotVerifiedContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;
const NotVerifiedWrapper = styled.div`
  /* width: 650px; */
  max-width: 730px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Message = styled.h1`
  height: auto;
  overflow-wrap: break-word;
  font-size: 2.5rem;
`;

const ButtonGroups = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.div`
  outline: none;
  font-size: 1.3rem;
  &:hover {
    transform: translateY(-2px);
  }
  &:hover:active {
    transform: translateY(2px);
  }
  border: 1px solid #dbdbdb;
  border-radius: 1.2rem;
  padding: 10px 20px;
  user-select: none;
  cursor: pointer;
  background: ${({ background }) => background};
`;

const NotVerifiedPage = () => {
  const history = useHistory();
  if (auth && auth.currentUser && auth.currentUser.emailVerified) {
    history.push('/');
  }
  const handleSignOut = async () => {
    console.log('click');
    await auth.signOut();
    history.push('/');
  };
  const handleToHome = async () => {
    await auth.currentUser.reload();
    history.push('/');
  };
  const handleRequest = async () => {
    auth.currentUser
      .sendEmailVerification()
      .then(function () {
        window.alert(
          'Verification link sent to your email. Kinldy check to verify your account'
        );
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <NotVerifiedContainer>
      <NotVerifiedWrapper>
        <Message>Your account is still not being verified.</Message>
        <Message>
          Please check your email or request a new verification.
        </Message>
        <ButtonGroups>
          <Button onClick={handleSignOut} background='red'>
            Sign out
          </Button>
          <Button onClick={handleRequest} background='green'>
            Request verification email
          </Button>
          <Button onClick={handleToHome} background='yellow'>
            Already verified
          </Button>
        </ButtonGroups>
      </NotVerifiedWrapper>
    </NotVerifiedContainer>
  );
};

export default NotVerifiedPage;
