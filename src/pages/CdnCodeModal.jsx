import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/Modal';

export default function CdnCodeModal() {
  const location = useLocation();

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(location.state.userCdnCode);

    alert('코드가 복사됐습니다 🙂');
  };

  return (
    <Modal title="아래 코드를 클릭하여 복사하세요">
      <CdnContainer onClick={handleCopyClick}>
        {location.state.userCdnCode}
      </CdnContainer>
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
  cursor: pointer;
`;
