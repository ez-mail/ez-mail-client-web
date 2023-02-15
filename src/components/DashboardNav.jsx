import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import navLogo from '../assets/nav-logo.png';

export default function DashboardNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleLogoutClick = () => {
    console.log('로그아웃 실행');
  };
  return (
    <Nav>
      <LeftContainer>
        <NavLogo src={navLogo} onClick={handleLogoClick} />
        <NavItem
          inputColor={location.pathname === '/emails' ? 'black' : null}
          onClick={() => navigate('/emails')}
        >
          이메일
        </NavItem>
        <NavItem
          inputColor={location.pathname === '/subscribers' ? 'black' : null}
          onClick={() => navigate('/subscribers')}
        >
          구독자
        </NavItem>
        <NavItem
          inputColor={location.pathname === '/sender' ? 'black' : null}
          onClick={() => navigate('/sender')}
        >
          발신자
        </NavItem>
      </LeftContainer>
      <Logout onClick={handleLogoutClick}>로그아웃</Logout>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 34px;
  border-bottom: 1px solid #dfe0e4;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.img`
  width: 120px;
  height: 34px;
  margin-right: 10px;
  cursor: pointer;
`;

const NavItem = styled.span`
  margin-left: 20px;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.inputColor || '#dfe0e4'};
  cursor: pointer;

  &:hover {
    color: #ffdf2b;
  }
`;

const Logout = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
`;
