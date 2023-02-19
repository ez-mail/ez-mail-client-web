import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CommonButton from '../../components/CommonButton';

const subscribersData = [
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
    email: 'abcd112342345@test.com',
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
export default function Subscribers() {
  const navigate = useNavigate();

  const handleDeleteSubscriberButtonClick = () => {
    console.log('구독자 삭제');
  };

  const handleNewSubscriberButtonClick = () => {
    console.log('구독자 추가 화면 이동');
    navigate(`/subscribers/addition`);
  };

  const tableHead = (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>이메일주소</td>
      <td>이름</td>
      <td>광고성 정보 수신 동의</td>
    </tr>
  );

  const subscribers = subscribersData.map(item => {
    return (
      <tr key={item._id}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{item.email}</td>
        <td>{item.name}</td>
        <td>{item.adAgreement ? '동의' : '거부'}</td>
      </tr>
    );
  });

  return (
    <section>
      <MainContainer>
        <Title>구독자 설정</Title>
        <ContainerNav>
          <CommonButton onClick={handleDeleteSubscriberButtonClick}>
            삭제하기
          </CommonButton>
          <CommonButton onClick={handleNewSubscriberButtonClick}>
            구독자 추가하기
          </CommonButton>
        </ContainerNav>
        <SubscriberTable>
          <table>
            <thead>{tableHead}</thead>
            <tbody>{subscribers}</tbody>
          </table>
        </SubscriberTable>
      </MainContainer>
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`;

const Title = styled.span`
  padding: 38px 0;
  font-size: 28px;
  font-weight: 500;
`;

const SubscriberTable = styled.div`
  overflow: auto;
  height: 440px;
  table {
    width: 100%;
    thead {
      position: sticky;
      top: 0px;
      background-color: #f5f5f5;
      tr {
        padding: 30px 0;
        &:last-child {
          border-bottom: 2px solid #b5acac;
        }
      }
      td {
        padding: 16px 0;
        text-align: center;
        &:nth-child(1) {
          width: 7%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          padding: 0 400px 0 0;
          width: 60%;
        }
      }
    }
    tbody {
      tr {
        padding: 30px 0;
        border-top: 2px solid #b5acac;
        &:last-child {
          border-bottom: 2px solid #b5acac;
        }
      }
      td {
        padding: 10px 0;
        text-align: center;
        &:nth-child(1) {
          width: 7%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          padding: 0 400px 0 0;
          width: 60%;
        }
      }
    }
  }
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const ContainerNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  border-bottom: 2px solid #b5acac;
  gap: 10px;
`;
