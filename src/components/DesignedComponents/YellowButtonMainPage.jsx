import React from 'react';
import styled from 'styled-components';

export default function YellowButtonMainPage({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  padding: 16px 16px;
  border-radius: 5px;
  background-color: #ffdf2b;
  color: #000000;
  font-size: 1rem;
`;
