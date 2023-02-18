import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';

const recipientsData = [
  {
    _id: '12315',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: true,
  },
  {
    _id: '123151',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: true,
  },
  {
    _id: '123152',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: false,
  },
  {
    _id: '123153',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: false,
  },
  {
    _id: '123154',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: false,
  },
  {
    _id: '123155',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: false,
  },
  {
    _id: '123156',
    email: 'abcd112asdf342345@teasdfst.com',
    name: '김개똥',
    adAgreement: false,
  },
  {
    _id: '123157',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: true,
  },
  {
    _id: '123158',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: false,
  },
  {
    _id: '123159',
    email: 'abcd@test.com',
    name: '김개똥',
    adAgreement: false,
  },
];

export default function EmailRecipientsModal() {
  const recipients = recipientsData.map(recipient => {
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
  background-color: #f5f5f5;
  border-bottom: 2px solid #dfe0e4;
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
  width: 100%;
  height: 390px;
  overflow: auto;
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
  width: 170px;
  word-wrap: break-word;
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
