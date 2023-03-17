import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BlackButtonMainPage from './DesignedComponents/BlackButtonMainPage';

export default function MainBottomSection() {
  return (
    <Section>
      <Title>지금 바로 시작해보세요</Title>
      <Link to="/sign-up">
        <BlackButtonMainPage>지금 시작하기</BlackButtonMainPage>
      </Link>
    </Section>
  );
}

const Section = styled.section`
  min-width: 436px;
  padding: 84px 0px;
  background-color: #ffdf2b;
  text-align: center;
`;

const Title = styled.h1`
  padding-bottom: 40px;
`;
