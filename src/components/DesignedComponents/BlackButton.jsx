import React from 'react';
import styled from 'styled-components';

export default function BlackButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #000000;
  color: #ffdf2b;
  font-size: 0.875rem;
  font-weight: 500;
`;
