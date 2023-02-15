import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MainBottomSection() {
  return (
    <Section>
      <Title>지금 바로 시작해보세요</Title>
      <Link to="/sign-up">
        <StartNow>지금 시작하기</StartNow>
      </Link>
    </Section>
  );
}

const Section = styled.section`
  padding: 84px 0px;
  background-color: #ffdf2b;
  text-align: center;
`;

const Title = styled.h1`
  padding-bottom: 40px;
`;

const StartNow = styled.span`
  padding: 12px 16px;
  border-radius: 5px;
  background-color: black;
  text-align: center;
  color: #ffdf2b;
`;
