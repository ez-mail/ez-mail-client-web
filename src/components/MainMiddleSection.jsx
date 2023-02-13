import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/main-arrow.png';
import people from '../assets/main-people.png';

export default function MainMiddleSection() {
  return (
    <Section>
      <Inner>
        <h2>당신이 ez-mail 을 사용한다면?</h2>
        <ContentBox>
          <LeftContent>
            <Arrow src={arrow} alt="arrow" />
            <LeftTitle>그저 끌어다 놓으세요</LeftTitle>
            <LeftDescription>
              클릭만 하실 수 있다면 됩니다.
              <br />
              쉽고 빠르게 콘텐츠를 만드세요.
            </LeftDescription>
          </LeftContent>
          <RightContent>
            <People src={people} alt="people" />
            <RightTitle>나만의 구독자을 모으세요</RightTitle>
            <RightDescription>
              내 뉴스레터를 몇명이나 구독할까요?
              <br />
              쉽게 구독자들을 관리 해보세요.
            </RightDescription>
          </RightContent>
        </ContentBox>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 114px 290px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  height: 380px;
  margin: auto;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 60px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 60px;
`;

const LeftTitle = styled.h3`
  padding-bottom: 25px;
`;

const RightTitle = styled.h3`
  padding-bottom: 25px;
`;

const LeftDescription = styled.p`
  text-align: center;
`;

const RightDescription = styled.p`
  text-align: center;
`;

const Arrow = styled.img`
  width: 244px;
  height: 244px;
`;

const People = styled.img`
  width: 244px;
  height: 244px;
`;
