import React from 'react';
import styled from 'styled-components';

export default function InputText({
  children,
  id,
  inputValue,
  width,
  height,
  labelFontSize,
  inputFontSize,
  paddingBottom,
  onChange,
}) {
  return (
    <Container paddingBottom={paddingBottom}>
      <Label htmlFor={id} labelFontSize={labelFontSize}>
        {children}
      </Label>
      <Input
        id={id}
        name={id}
        value={inputValue}
        width={width}
        height={height}
        inputFontSize={inputFontSize}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.paddingBottom || '20px'};
`;

const Label = styled.label`
  padding-bottom: 8px;
  font-size: ${props => props.labelFontSize || '18px'};
`;

const Input = styled.input`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '30px'};
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: ${props => props.inputFontSize || '14px'};
`;
