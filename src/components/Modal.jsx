import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Modal({ title, children, border }) {
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    navigate(-1);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <Title>{title}</Title>
        <Content border={border}>{children}</Content>
        <CloseButton onClick={handleCloseButtonClick}>닫기</CloseButton>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 426px;
  height: 450px;
  margin-bottom: 30px;
  border: ${props => props.border || '1px solid black'};
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
