import React from 'react';
import styled from 'styled-components';

export default function BlackButtonMainPage({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  padding: 16px 16px;
  border-radius: 5px;
  background-color: #000000;
  color: #ffdf2b;
  font-size: 1rem;
`;
