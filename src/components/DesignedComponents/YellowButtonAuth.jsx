import React from 'react';
import styled from 'styled-components';

export default function YellowButtonAuth({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-weight: 500;
  color: #000000;
  font-size: 1rem;
  text-align: center;
`;
