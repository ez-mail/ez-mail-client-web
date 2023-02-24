import React from 'react';
import styled from 'styled-components';

export default function SpaceContent() {
  return (
    <Space
      style={{
        width: '100%',
        height: `20px`,
      }}
    />
  );
}
const Space = styled.div`
  &:hover {
    outline: 2px solid #ffdf2b;
  }

  &:focus {
    outline: 2px solid #ffdf2b;
  }
`;
