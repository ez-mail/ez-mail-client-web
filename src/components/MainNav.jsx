import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import navLogo from '../assets/nav-logo.png';

export default function MainNav() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Nav>
      <div>
        <Img src={navLogo} alt="nav-logo" onClick={handleLogoClick} />
      </div>
      <div>
        <Link to="/login">
          <Login>로그인</Login>
        </Link>
        <Link to="/sign-up">
          <SignUp>회원가입</SignUp>
        </Link>
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
  cursor: pointer;
`;

const Login = styled.span`
  padding: 10px 14px;
`;

const SignUp = styled.span`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
`;
