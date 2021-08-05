import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiTwotoneMail, AiOutlineGithub } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
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
  SignUpButton,
} from './elements';
import { auth, googleAuthProvider } from '../../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/auth/authSlice';
import Loading from '../../components/Loading';
// const imgSrc = require('../../images/login.svg').default;
import imgSrc from '../../images/login.svg';

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    dispatch(signIn());
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrong, setWrong] = useState(false);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  if (!loading && user) {
    history.push('/');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(signIn(user));
        console.log(user);
      })
      .catch((error) => {
        setWrong(true);
      });
  };
  return (
    <div>
      <LoginFormContainer>
        <Image src={imgSrc}></Image>
        <LoginForm onSubmit={handleLogin}>
          <Image></Image>
          <Heading>Welcome to ALOIDAIK social media</Heading>
          <FormFieldsContainer>
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></InputText>
            </InputContainer>
            <ButtonsContainer>
              <LoginSubmitButton type='submit'>Sign in</LoginSubmitButton>
              <SignUpButton to='/signup'>Sign up</SignUpButton>
            </ButtonsContainer>
            <ForgotPasswordLink to='/auth/forgot'>
              ? Forgot Password
            </ForgotPasswordLink>
            {wrong && <p>Wrong email or password</p>}
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
        </LoginForm>
      </LoginFormContainer>
    </div>
  );
};

export default Login;
