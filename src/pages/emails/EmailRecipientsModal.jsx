import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../../components/Modal';

export default function EmailRecipientsModal() {
  const location = useLocation();

  const recipients = location.state.recipients.map(recipient => {
    return (
      <Li key={recipient._id}>
        <EmailData>{recipient.email}</EmailData>
        <NameData>{recipient.name}</NameData>
        <AddressAgreementData>
          {recipient.adAgreement ? '동의' : '거부'}
        </AddressAgreementData>
      </Li>
    );
  });

  return (
    <Modal title="수신자 목록">
      <Nav>
        <EmailHeader>이메일 주소</EmailHeader>
        <NameHeader>이름</NameHeader>
        <AddressAgreementHeader>광고성 정보 수신 동의</AddressAgreementHeader>
      </Nav>
      <Ul>{recipients}</Ul>
    </Modal>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 58px;
  border-bottom: 2px solid #dfe0e4;
  background-color: #f5f5f5;
  text-align: center;
`;

const EmailHeader = styled.span`
  flex-grow: 3;
  font-size: 0.875rem;
  font-weight: 400;
`;

const NameHeader = styled.span`
  flex-grow: 2;
  font-size: 0.875rem;
  font-weight: 400;
`;

const AddressAgreementHeader = styled.span`
  flex-grow: 2;
  font-size: 0.875rem;
  font-weight: 400;
`;

const Ul = styled.ul`
  overflow: auto;
  width: 100%;
  height: 390px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border-bottom: 2px solid #dfe0e4;
  text-align: center;
`;

const EmailData = styled.span`
  word-wrap: break-word;
  width: 170px;
  padding: 4px;
  font-size: 0.875rem;
  font-weight: 400;
`;

const NameData = styled.span`
  flex-basis: 15%;
  font-size: 0.875rem;
  font-weight: 400;
`;

const AddressAgreementData = styled.span`
  position: relative;
  left: 80px;
  font-size: 0.875rem;
  font-weight: 400;
`;
