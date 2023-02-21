import React from 'react';
import styled from 'styled-components';
import RecentEmailPercent from '../components/RecentEmailPercent';
import SubscribersTrendGraph from '../components/SubscribersTrendGraph';

export default function DashBoard() {
  return (
    <section>
      <MainContainer>
        <Title>대시보드</Title>
        <SmallTitle>최근 발송한 이메일</SmallTitle>
        <RecentEmailPercent />
        <SmallTitle>구독자</SmallTitle>
        <SubscribersTrendGraph />
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
