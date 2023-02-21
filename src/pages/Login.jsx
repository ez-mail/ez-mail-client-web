import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { requestLogin } from '../api/auth';

import logo from '../assets/login-logo.png';
import bottomLogo from '../assets/nav-logo.png';
import LoginInput from '../components/LoginInput';
import loginUserAtom from '../recoil/loginUser/atom';

export default function Login() {
  const navigate = useNavigate();
  const setLoginUser = useSetRecoilState(loginUserAtom);
  const [userInput, setUserInput] = useState({ email: '', password: '' });

  const handleUserInput = e => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginClick = async () => {
    const response = await requestLogin(userInput.email, userInput.password);

    if (response.status === 200) {
      setLoginUser(await response.json());
      setUserInput({ email: '', password: '' });

      navigate('/dashboard');
    } else {
      alert('문제 발생(에러 처리 나중에)');

      setUserInput({ email: '', password: '' });
    }
  };

  return (
    <LoginContainer>
      <Link to="/">
        <Logo src={logo} alt="login-logo" />
      </Link>
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
        type="password"
        inputValue={userInput.password}
        onChange={handleUserInput}
      >
        비밀번호
      </LoginInput>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      <Link to="/sign-up">
        <NeedSignUp>계정이 없으신가요?</NeedSignUp>
      </Link>
      <Link to="/">
        <BottomLogo src={bottomLogo} />
      </Link>
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

const NeedSignUp = styled.span`
  display: inline-block;
  padding-top: 20px;
  color: #3e81f6;
  cursor: pointer;
`;

const BottomLogo = styled.img`
  width: 120px;
  height: 34px;
  margin-top: 60px;
  cursor: pointer;
`;
