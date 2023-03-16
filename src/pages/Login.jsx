import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { requestLogin } from '../api/auth';
import logo from '../assets/login-logo.png';
import bottomLogo from '../assets/nav-logo.png';
import InputTextAuth from '../components/DesignedComponents/InputTextAuth';
import YellowButtonAuth from '../components/DesignedComponents/YellowButtonAuth';
import userIdAtom from '../recoil/userId/atom';

export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUserInput({
        email: location.state.userEmail,
        password: location.state.userPassword,
      });
    }
  }, []);

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

  const handleLoginClick = async () => {
    const response = await requestLogin(userInput.email, userInput.password);

    if (response.status === 200) {
      const body = await response.json();

      setUserId(body.userId);
      setUserInput({ email: '', password: '' });

      navigate('/dashboard');
    } else {
      alert('이메일 또는 비밀번호를 다시 확인해주세요.');

      setUserInput({ email: '', password: '' });
    }
  };

  const handlePasswordKeyDown = e => {
    if (e.keyCode !== 13) {
      return;
    }

    handleLoginClick();
  };

  return (
    <LoginContainer>
      <Link to="/">
        <Logo src={logo} alt="login-logo" />
      </Link>
      <Hello>또 오셨군요 반가워요!</Hello>
      <InputTextAuth
        id="email"
        inputValue={userInput.email}
        onChange={handleUserInput}
      >
        이메일 주소
      </InputTextAuth>
      <InputTextAuth
        id="password"
        type="password"
        inputValue={userInput.password}
        onChange={handleUserInput}
        onKeyDown={handlePasswordKeyDown}
      >
        비밀번호
      </InputTextAuth>
      <YellowButtonAuth onClick={handleLoginClick}>로그인</YellowButtonAuth>
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
