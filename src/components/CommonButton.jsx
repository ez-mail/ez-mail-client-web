import React from 'react';
import styled from 'styled-components';

export default function CommonButton({
  children,
  alignSelf,
  padding,
  margin,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  onClick,
}) {
  return (
    <Button
      alignSelf={alignSelf}
      padding={padding}
      margin={margin}
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
  display: ${props => props.display || 'block'};
  padding: ${props => props.padding || '10px 14px'};
  margin: ${props => props.margin || '0'};
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || '#ffdf2b'};
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '500'};
  align-self: ${props => props.alignSelf || 'auto'};
  cursor: pointer;
`;
