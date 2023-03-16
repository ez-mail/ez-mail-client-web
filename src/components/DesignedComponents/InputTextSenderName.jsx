import React from 'react';
import styled from 'styled-components';

export default function InputTextSenderName({ id, name, value, onChange }) {
  return (
    <Container>
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
  display: inline-block;
`;

const InputText = styled.input`
  position: relative;
  left: -5px;
  width: 380px;
  height: 20px;
  padding: 0 7px;
  border: none;
  border-radius: 5px;
  outline: 1px solid #bdbdbd;
  font-size: 1rem;
  &:focus {
    outline: 1px solid #3e81f6;
    box-shadow: 0 0 5px #3e81f6;
  }
  &:hover {
    outline: 1px solid #3e81f6;
  }
`;
