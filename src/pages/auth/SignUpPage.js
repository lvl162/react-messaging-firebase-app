import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiTwotoneMail, AiOutlineGithub } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsPeopleCircle } from 'react-icons/bs';
import {
  ButtonsContainer,
  ForgotPasswordLink,
  FormFieldsContainer,
  Heading,
  Image,
  InputContainer,
  InputText,
  LoginForm,
  LoginFormContainer,
  SocialLink,
  SocialLinksContainer,
  LoginSubmitButton,
  Subtitle,
} from './elements';
import {
  auth,
  firestore,
  googleAuthProvider,
  serverTimestamp,
} from '../../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/auth/authSlice';
import Loading from '../../components/Loading';

import styled from 'styled-components';

const PWUl = styled.ul`
  display: flex;
  flex-direction: row;
  /* list-style: ; */
  flex-direction: column;
`;
const PWLi = styled.ul`
  font-size: 0.9rem;
  list-style: decimal;
`;

const SignUp = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    dispatch(signIn(auth.currentUser));
  };
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  if (!loading && user) {
    history.push('/');
  }

  const imgSrc = require('../../images/login.svg').default;
  const handleSignUp = (e) => {
    const photoUrl =
      'https://spng.subpng.com/20190525/xux/kisspng-certified-ethical-hacker-ransomware-hackathon-comp-bs-siber-gvenlik-siber-gvenlik-hizmetleri-5ce9dec4628041.1955382615588307884035.jpg';
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {})
          .catch((error) => {});
        dispatch(signIn({ ...user, name: name, photoURL: photoUrl }));
        user
          .sendEmailVerification()
          .then(function () {
            window.alert(
              'Verification link sent to your email. Kinldy check to verify your account'
            );
          })
          .catch(function (error) {
            // An error happened.
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <LoginFormContainer>
        <LoginForm onSubmit={handleSignUp}>
          <Heading>Start messaging and get new GF now</Heading>
          <FormFieldsContainer>
            <InputContainer>
              <Subtitle>
                <BsPeopleCircle />
              </Subtitle>
              <InputText
                placeholder='name'
                type='name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></InputText>
            </InputContainer>
            <InputContainer>
              <Subtitle>
                <AiTwotoneMail />
              </Subtitle>
              <InputText
                placeholder='email'
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></InputText>
            </InputContainer>
            <InputContainer>
              <Subtitle>
                <RiLockPasswordFill />
              </Subtitle>
              <InputText
                placeholder='password'
                type='password'
                pattern='(?=.*[0-9])(?=.*[a-z])\S{8,}'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></InputText>
            </InputContainer>
            <InputContainer>
              <Subtitle>
                <RiLockPasswordFill />
              </Subtitle>
              <InputText
                placeholder='confirm password'
                type='password'
                pattern='(?=.*[0-9])(?=.*[a-z])\S{8,}'
                value={confirmPw}
                onChange={(e) => {
                  setConfirmPw(e.target.value);
                }}
              ></InputText>
            </InputContainer>
            <ButtonsContainer>
              <LoginSubmitButton
                type='submit'
                disabled={password !== confirmPw}
              >
                Sign up
              </LoginSubmitButton>
            </ButtonsContainer>
            <ForgotPasswordLink to='/login'>
              ? Already have account
            </ForgotPasswordLink>
            {password !== confirmPw && <h4>Password not match</h4>}
            <PWUl>
              <PWLi>minimum 8 chars</PWLi>
              <PWLi>at least 1 number</PWLi>
              <PWLi>at least 1 letter</PWLi>
            </PWUl>
          </FormFieldsContainer>
          <SocialLinksContainer>
            <SocialLink href='/github' onClick={() => console.log('gh')}>
              <AiOutlineGithub />
            </SocialLink>
            <SocialLink href='/fb'>
              <FaFacebook />
            </SocialLink>
            <SocialLink href='/gg' onClick={handleSignInWithGoogle}>
              <FcGoogle />
            </SocialLink>
          </SocialLinksContainer>
          <Image></Image>
        </LoginForm>
        <Image src={imgSrc}></Image>
      </LoginFormContainer>
    </div>
  );
};

export default SignUp;
