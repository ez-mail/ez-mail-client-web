import React from 'react';
import styled from 'styled-components';

export default function InputTextStep02({ id, name, label, value, onChange }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputText
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const Label = styled.label`
  padding-bottom: 15px;
  font-size: 20px;
`;

const InputText = styled.input`
  width: 300px;
  height: 30px;
  padding: 0 7px;
  border: none;
  border-radius: 5px;
  outline: 1px solid #bdbdbd;
  font-size: 14px;
  &:focus {
    outline: 1px solid #3e81f6;
    box-shadow: 0 0 5px #3e81f6;
  }
  &:hover {
    outline: 1px solid #3e81f6;
  }
`;
