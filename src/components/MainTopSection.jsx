import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import mailWoman from '../assets/main-mail-woman.png';

export default function MainTopSection() {
  return (
    <Section>
      <Inner>
        <InnerText>
          <Title>
            쉽고 빠르게 구독자들에게
            <br />
            소식을 전하세요
          </Title>
          <Description>
            설명이 필요없는 직관적인 사용
            <br />
            ez-mail 로 누구나 쉽게 뉴스레터를 발행할 수 있습니다.
          </Description>
          <Link to="/sign-up">
            <StartNow>지금 시작하기</StartNow>
          </Link>
        </InnerText>
        <MailWoman src={mailWoman} alt="mail-woman" />
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 140px 140px 84px 140px;
  background-color: #f5f5f5;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  min-width: 820px;
  height: 370px;
  margin: auto;
`;

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 58px;
`;

const MailWoman = styled.img`
  width: 370px;
  height: 370px;
`;

const StartNow = styled.span`
  padding: 12px 16px;
  border-radius: 5px;
  background-color: #ffdf2b;
  text-align: center;
`;

const Title = styled.h1`
  padding-bottom: 24px;
  line-height: 60px;
`;

const Description = styled.span`
  padding-bottom: 24px;
  line-height: 24px;
`;
