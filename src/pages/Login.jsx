import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../assets/login-logo.png';
import navLogo from '../assets/nav-logo.png';
import LoginInput from '../components/LoginInput';

export default function Login() {
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const handleUserInput = e => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginClick = () => {
    // 로그인 api 요청
  };

  return (
    <LoginContainer>
      <Logo src={logo} alt="login-logo" />
      <Hello>또 오셨군요 반가워요!</Hello>
      <LoginInput
        id="email"
        inputValue={userInput.email}
        onChange={handleUserInput}
      >
        이메일 주소
      </LoginInput>
      <LoginInput
        id="password"
        inputValue={userInput.password}
        onChange={handleUserInput}
      >
        비밀번호
      </LoginInput>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      <NeedSignUp href="/sign-up">계정이 없으신가요?</NeedSignUp>
      <NavLogo src={navLogo} />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
  margin: auto;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 100px;
  margin-bottom: 40px;
`;

const Hello = styled.span`
  padding-bottom: 80px;
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

const NeedSignUp = styled.a`
  padding-top: 20px;
  color: #3e81f6;
`;

const NavLogo = styled.img`
  width: 120px;
  height: 34px;
  margin-top: 130px;
`;
