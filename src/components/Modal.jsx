import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Modal({ title, children }) {
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    navigate(-1);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <Title>{title}</Title>
        <Content>{children}</Content>
        <CloseButton onClick={handleCloseButtonClick}>닫기</CloseButton>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 650px;
  background-color: white;
`;

const Title = styled.span`
  padding: 40px 0;
  font-size: 1.125rem;
  font-weight: 500;
`;

const Content = styled.div`
  margin-bottom: 30px;
  width: 426px;
  height: 450px;
  border: 1px solid black;
  overflow: auto;
`;

const CloseButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;
