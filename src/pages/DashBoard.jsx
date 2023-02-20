import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import loginUserAtom from '../recoil/loginUser/atom';

import {
  getOpenMailPercentage,
  getRefinedTrendData,
  getSuccessPercentage,
} from '../utils/dashboard';

// 임시 데이터
const emailData = {
  _id: '12315',
  editingStep: 4,
  emailTitle: '테스트 제목',
  emailContent: '<h1>테스트 이메일 입니다<h1>',
  sender: '홍길동',
  emailPreviewText: '테스트 이메일 미리보기',
  recipients: [
    {
      email: 'asdf@asdf.com',
      name: '길홍동',
      adAgreement: true,
      isEmailOpen: false,
    },
    {
      email: 'zxcv@asdf.com',
      name: '홍길',
      adAgreement: true,
      isEmailOpen: true,
    },
    {
      email: 'qwer@asdf.com',
      name: '동길',
      adAgreement: true,
      isEmailOpen: true,
    },
  ],
  totalSendCount: 3,
  successSendCount: 3,
  startSendDate: new Date(`2023/02/13`),
  endSendDate: new Date('2023/02/14'),
};
const trendData = [1, 4, 2, 33, 60, 0, 1];

export default function DashBoard() {
  const loginUser = useRecoilValue(loginUserAtom);

  console.log(loginUser);

  const subscriberTrendList = getRefinedTrendData(trendData).map(item => {
    return (
      <Li
        key={item[2] + item[1]}
        count={item[0]}
        height={item[1]}
        date={item[2]}
      />
    );
  });

  return (
    <section>
      <MainContainer>
        <Title>대시보드</Title>
        <SmallTitle>최근 발송한 이메일</SmallTitle>
        <PercentInfoBox>
          <LeftPercentBox>
            <PercentTitleText>발송성공</PercentTitleText>
            <PercentNumberText>
              {getSuccessPercentage(emailData)}
            </PercentNumberText>
          </LeftPercentBox>
          <RightPercentBox>
            <PercentTitleText>오픈</PercentTitleText>
            <PercentNumberText inputColor="#ffdf2b">
              {getOpenMailPercentage(emailData)}
            </PercentNumberText>
          </RightPercentBox>
        </PercentInfoBox>
        <SmallTitle>구독자</SmallTitle>
        <Ul>{subscriberTrendList}</Ul>
      </MainContainer>
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 760px;
  margin: auto;
`;

const Title = styled.span`
  padding: 38px 0;
  font-size: 28px;
  font-weight: 500;
`;

const SmallTitle = styled.span`
  padding-top: 20px;
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: 500;
`;

const PercentInfoBox = styled.div`
  display: flex;
  width: 450px;
  height: 150px;
  margin-bottom: 30px;
`;

const LeftPercentBox = styled.div`
  width: 50%;
  border: 1px solid #b5acac;
`;

const PercentTitleText = styled.div`
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
`;

const PercentNumberText = styled.div`
  padding-top: 4px;
  color: ${props => props.inputColor || 'black'};
  font-size: 50px;
  text-align: center;
`;

const RightPercentBox = styled.div`
  width: 50%;
  border: 1px solid #b5acac;
  border-width: 1px 1px 1px 0px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  height: 260px;
  margin-bottom: 100px;
  border: 1px solid #b5acac;
`;

const Li = styled.li`
  width: 30px;
  height: ${props => props.height}%;
  background-color: #ffdf2b;

  &:before {
    position: relative;
    top: -30px;
    display: block;
    text-align: center;
    font-weight: 400;
    content: '${props => props.count}';
  }

  &:after {
    position: relative;
    display: block;
    top: 100%;
    left: -14px;
    width: 100px;
    font-weight: 400;
    content: '${props => props.date}';
  }
`;
