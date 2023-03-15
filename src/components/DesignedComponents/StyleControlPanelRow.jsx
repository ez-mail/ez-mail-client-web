import React from 'react';
import styled from 'styled-components';

export default function StyleControlPanelRow({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <RightContents>{children}</RightContents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1rem;
`;

const RightContents = styled.div``;
