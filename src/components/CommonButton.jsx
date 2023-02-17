import React from 'react';
import styled from 'styled-components';

export default function CommonButton({
  children,
  padding,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  onClick,
}) {
  return (
    <Button
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

const Button = styled.button`
  padding: ${props => props.padding || '10px 14px'};
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || '#ffdf2b'};
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '500'};
  cursor: pointer;
`;
