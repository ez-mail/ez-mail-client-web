import React from 'react';
import styled from 'styled-components';

export default function EmailEditingStep01() {
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
      <tr>
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
    <>
      <section>
        <MainContainer>
          <Title>구독자를 선택하세요</Title>
          <SubscriberTable>
            <table>
              <thead>{tableHead}</thead>
              <tbody>{subscribers}</tbody>
            </table>
          </SubscriberTable>
        </MainContainer>
      </section>
      <BottomButtons>
        <BottomButton>이전</BottomButton>
        <BottomButton>다음</BottomButton>
      </BottomButtons>
    </>
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
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 500;
`;

const BottomButtons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
`;

const SubscriberTable = styled.div`
  overflow: auto;
  height: 300px;
  table {
    width: 100%;
    thead {
      position: sticky;
      top: 0;
      background-color: #f5f5f5;
      tr {
        padding: 30px 0;
        border-top: 2px solid #b5acac;
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

const BottomButton = styled.div`
  width: 50%;
  padding: 10px 0;
  font-size: 20px;
  border: 1px solid #dfe0e4;
  background-color: #f5f5f5;
  cursor: pointer;
  &:nth-child(1) {
    color: #bdbdbd;
    cursor: default;
  }
`;
