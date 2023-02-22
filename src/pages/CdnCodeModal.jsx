import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/Modal';

export default function CdnCodeModal() {
  const location = useLocation();

  return (
    <Modal title="아래 코드를 복사하여 홈페이지에 붙여넣으세요">
      <CdnContainer>{location.state.userCdnCode}</CdnContainer>
    </Modal>
  );
}

const CdnContainer = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #333333;
  color: white;
`;
