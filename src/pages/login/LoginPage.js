import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../features/auth/authSlice';
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
} from './elements';

const Login = () => {
  // const status = useSelector((state) => state.auth.status);
  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();
  // const handleSignIn = () => {
  //   dispatch(signIn());
  // };
  const handleSignIn = () => {
    console.log('login goi nek');
  };
  return (
    // history.push('/message')
    <div>
      <LoginFormContainer>
        <Image src={require('../../images/login.svg').default}></Image>
        <LoginForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
          }}
        >
          <Image></Image>
          <Heading>Start messaging and get new GF now</Heading>
          <FormFieldsContainer>
            <InputContainer>
              <Subtitle>
                <AiTwotoneMail />
              </Subtitle>
              <InputText placeholder='email' type='email'></InputText>
            </InputContainer>
            <InputContainer>
              <Subtitle>
                <RiLockPasswordFill />
              </Subtitle>
              <InputText placeholder='password' type='password'></InputText>
            </InputContainer>
            <ButtonsContainer>
              <LoginSubmitButton type='submit'>Login</LoginSubmitButton>
              <ForgotPasswordLink href='/'>
                ? Forgot Password
              </ForgotPasswordLink>
            </ButtonsContainer>
          </FormFieldsContainer>
          <SocialLinksContainer>
            <SocialLink href='/github' onClick={() => console.log('gh')}>
              <AiOutlineGithub />
            </SocialLink>
            <SocialLink href='/fb'>
              <FaFacebook />
            </SocialLink>
            <SocialLink href='/gg' onClick={handleSignIn}>
              <FcGoogle />
            </SocialLink>
          </SocialLinksContainer>
        </LoginForm>
      </LoginFormContainer>
    </div>
  );
};

export default Login;
