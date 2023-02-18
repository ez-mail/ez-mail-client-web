import React from 'react';
import styled from 'styled-components';

export default function EmailsDashboard() {
  return (
    <section>
      <MainContainer>
        <Title>이메일 정보</Title>
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
  font-size: 1.75rem;
  font-weight: 500;
`;
