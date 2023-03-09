import React from 'react';
import styled from 'styled-components';

export default function LoginInput({
  children,
  id,
  inputValue,
  onChange,
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
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 0 10px;
`;
