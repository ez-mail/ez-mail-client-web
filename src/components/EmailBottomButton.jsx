import React from 'react';
import styled from 'styled-components';

export default function EmailBottomButton({
  color,
  cursor,
  children,
  onClick,
}) {
  return (
    <Button onClick={onClick} color={color} cursor={cursor}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 50%;
  padding: 10px 0;
  font-size: 20px;
  border: 1px solid #dfe0e4;
  background-color: #f5f5f5;
  color: ${props => props.color || 'black'};
  cursor: ${props => props.cursor || 'pointer'};
`;
