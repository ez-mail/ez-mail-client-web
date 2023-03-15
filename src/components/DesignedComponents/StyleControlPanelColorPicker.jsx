import React from 'react';
import styled from 'styled-components';

export default function StyleControlPanelColorPicker({
  name,
  value,
  onChange,
}) {
  return (
    <ColorPicker type="color" name={name} value={value} onChange={onChange} />
  );
}

const ColorPicker = styled.input`
  width: 24px;
  height: 24px;
  padding: 0;
  margin-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  &::-webkit-color-swatch {
    border-radius: 3px;
  }
`;
