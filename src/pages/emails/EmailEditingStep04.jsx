import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/login-logo.png';

export default function EmailEditingStep04() {
  const navigate = useNavigate();

  const handleGoToMainButtonClick = () => {
    navigate('/dashboard');
  };

  return (
    <section>
      <Container>
        <Logo src={logo} alt="logo" />
        <Description>
          이메일 발송이 시작되었습니다.
          <br />
          발송결과는 이메일 정보 화면에서 확인해주세요.
        </Description>
        <Button onClick={handleGoToMainButtonClick}>메인으로 돌아가기</Button>
      </Container>
    </section>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 402px;
  margin: auto;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 170px;
  margin-bottom: 40px;
`;

const Description = styled.span`
  margin-bottom: 50px;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0px 14px 0px;
  border-radius: 5px;
  background-color: #ffdf2b;
  text-align: center;
  font-weight: 500;
`;
