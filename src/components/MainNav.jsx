import React from 'react';
import styled from 'styled-components';

import navLogo from '../assets/nav-logo.png';

export default function MainNav() {
  return (
    <Nav>
      <div>
        <a href="/">
          <Img src={navLogo} alt="nav-logo" />
        </a>
      </div>
      <div>
        <Login href="/login">로그인</Login>
        <SignUp href="/sign-up">회원가입</SignUp>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 34px;
  width: 100%;
  background-color: #ffffff;
`;

const Img = styled.img`
  width: 120px;
  height: 34px;
`;

const Login = styled.a`
  padding: 10px 14px;
`;

const SignUp = styled.a`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
`;
