import React from 'react';
import styled from 'styled-components';

export default function InputTextAuth({
  children,
  id,
  inputValue,
  onChange,
  onKeyDown,
  type = 'text',
}) {
  return (
    <Container>
      <Label htmlFor={id}>{children}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 38px;
`;

const Label = styled.label`
  padding-bottom: 8px;
`;

const Input = styled.input`
  width: 355px;
  height: 50px;
  outline: 1px solid #bdbdbd;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  &:focus {
    outline: 1px solid #3e81f6;
    box-shadow: 0 0 5px #3e81f6;
  }
  &:hover {
    outline: 1px solid #3e81f6;
  }
`;
