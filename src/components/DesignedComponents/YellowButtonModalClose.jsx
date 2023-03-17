import React from 'react';
import styled from 'styled-components';

export default function YellowButtonModalClose({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  padding: 14px 26px;
  border-radius: 5px;
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
  background-color: #ffdf2b;
  color: #000000;
  font-size: 0.875rem;
  font-weight: 500;
`;
