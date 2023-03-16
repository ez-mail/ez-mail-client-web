import React from 'react';
import styled from 'styled-components';

export default function StyleControlPanelLinkInput({ value, onChange }) {
  return (
    <LinkInput
      name="link"
      value={value}
      onChange={onChange}
      placeholder="http://example.com"
    />
  );
}

const LinkInput = styled.input`
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  outline: 1px solid #bdbdbd;
  font-size: 0.875rem;
  &:focus {
    outline: 1px solid #3e81f6;
    box-shadow: 0 0 5px #3e81f6;
  }
  &:hover {
    outline: 1px solid #3e81f6;
  }
`;
