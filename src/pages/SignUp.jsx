import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { requestSignUp } from '../api/auth';
import logo from '../assets/login-logo.png';
import SignUpInput from '../components/LoginInput';
import userIdAtom from '../recoil/userId/atom';

export default function SignUp() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);
  const [userInput, setUserInput] = useState({
    email: '',
    name: '',
    password: '',
  });

  useEffect(() => {
    if (userId) {
      navigate('/dashboard');
    }
  }, []);

  const handleUserInput = e => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpClick = async () => {
    const status = await requestSignUp(
      userInput.email,
      userInput.name,
      userInput.password,
    );

    if (status === 201) {
      alert('환영합니다!');

      navigate('/login', {
        state: {
          userEmail: userInput.email,
          userPassword: userInput.password,
        },
      });
    } else {
      alert('회원가입에 실패했습니다.');
    }
  };

  const handlePasswordKeyDown = e => {
    if (e.keyCode !== 13) {
      return;
    }

    handleSignUpClick();
  };

  return (
    <SignUpContainer>
      <Link to="/">
        <Logo src={logo} alt="login-logo" />
      </Link>
      <Hello>환영해요!</Hello>
      <SignUpInput
        id="email"
        inputValue={userInput.email}
        onChange={handleUserInput}
      >
        이메일 주소
      </SignUpInput>
      <SignUpInput
        id="name"
        inputValue={userInput.name}
        onChange={handleUserInput}
      >
        이름
      </SignUpInput>
      <SignUpInput
        id="password"
        type="password"
        inputValue={userInput.password}
        onChange={handleUserInput}
        onKeyDown={handlePasswordKeyDown}
      >
        비밀번호
      </SignUpInput>
      <LoginButton onClick={handleSignUpClick}>회원가입</LoginButton>
      <Link to="/login">
        <NeedLogin>이미 가입 하셨나요?</NeedLogin>
      </Link>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
  margin: auto;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 60px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Hello = styled.span`
  padding-bottom: 60px;
  font-size: 24px;
  font-weight: 500;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 14px 0px 14px 0px;
  border-radius: 5px;
  background-color: #ffdf2b;
  text-align: center;
  font-weight: 500;
`;

const NeedLogin = styled.span`
  display: inline-block;
  padding-top: 20px;
  color: #3e81f6;
  cursor: pointer;
`;
