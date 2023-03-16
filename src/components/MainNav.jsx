import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import navLogo from '../assets/nav-logo.png';
import YellowButtonBig from './DesignedComponents/YellowButtonBig';

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
          <YellowButtonBig>회원가입</YellowButtonBig>
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

const Login = styled.button`
  padding: 10px 14px;
`;
