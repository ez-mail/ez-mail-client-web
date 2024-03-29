import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import YellowButtonModalClose from './DesignedComponents/YellowButtonModalClose';

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
        <YellowButtonModalClose onClick={handleCloseButtonClick}>
          닫기
        </YellowButtonModalClose>
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
  border: 1px solid black;
`;
