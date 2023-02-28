import React from 'react';
import styled from 'styled-components';

export default function ContentWrapper({ id, children }) {
  return <Wrapper key={id}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;

  &:hover {
    z-index: 1;
    outline: 2px solid #ffdf2b;
  }

  &:focus {
    outline: 2px solid #ffdf2b;
  }
`;
