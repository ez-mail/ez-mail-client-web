import React from 'react';
import styled from 'styled-components';

export default function YellowButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
  color: #000000;
  font-size: 0.875rem;
  font-weight: 500;
`;
