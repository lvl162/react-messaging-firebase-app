import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const gradientBackground = keyframes` {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

export const rotateIcon = keyframes`
  0% {
    transform: rotate(-120deg);
  }

  50% {
    transform: rotate(120deg);
  }

  100%{
    transform: rotate(-120deg);
  }
`;
export const LoginFormContainer = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientBackground} 10s ease infinite !important;
  font-family: 'Style Script', cursive;
  overflow-y: hidden;
  min-height: 300px;
  min-width: 400px;
  height: 100vh;
  width: 100%;
  /* background-color: pink; */
  display: flex;
  flex-grow: 1;
  align-items: center; // flex-direction axis
  justify-content: center; // counter flex-direction axis
  font-family: 'Karla', sans-serif;
  @media screen and (min-width: 700px) {
    padding: auto 30px;
  }
`;

export const LoginForm = styled.form`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  min-height: 400px;
  background-color: #ffffff;
  justify-content: space-evenly;
  gap: 15px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  min-width: 170px;
  max-width: 555px;
  height: 100%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Subtitle = styled.div`
  font-size: 2rem;
  color: gray;
  &:hover {
    animation: ${rotateIcon} 2s ease-in-out infinite;
  }
`;
export const InputContainer = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  *::nth-child(1) {
    flex: 1 1 30%;
  }
  *::nth-child(2) {
    flex: 1 1 70%;
  }
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
export const LoginSubmitButton = styled.button`
  text-decoration: none;
  color: inherit;
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
export const SignUpButton = styled(Link)`
  text-decoration: none;
  color: inherit;
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
export const ForgotPasswordLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 250;
  &:hover {
    font-style: italic;
    font-weight: 500;
    color: red;
  }
  text-align: center;
`;
export const Heading = styled.h4`
  user-select: none;
  margin: 10px auto;
  color: transparent;
  text-align: center;
  /* font-family: 'Style Script', cursive; */
  border-bottom: 4px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  padding-bottom: 8px;
  margin-top: auto;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
  animation: ${gradientBackground} 2s linear infinite;
`;
export const FormFieldsContainer = styled.div`
  margin: 20px auto;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const SocialLinksContainer = styled.ul`
  flex-grow: 1;
  min-height: 40px;
  display: flex;
  align-items: space-around;
  justify-content: center;
  gap: 30px;
  list-style: none;
`;
export const SocialLink = styled.li`
  &:hover {
    transition: 100ms ease-in-out;
    font-size: 3rem;
  }
  cursor: pointer;
  font-size: 1.9rem;
  text-decoration: none;
  color: none;
`;

export const InputText = styled.input`
  padding: 8px 4px;
  font-size: 1.2rem;
`;
