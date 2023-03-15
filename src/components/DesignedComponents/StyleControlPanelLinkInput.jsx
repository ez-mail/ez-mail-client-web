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
const LinkInput = styled.input``;
