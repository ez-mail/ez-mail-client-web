import React from 'react';
import styled from 'styled-components';

export default function StyleControlPanelInputRange({
  value,
  onChange,
  children,
}) {
  return (
    <>
      <InputRange
        name="height"
        type="range"
        min="10"
        max="100"
        step="10"
        value={value}
        onChange={onChange}
      />
      <Pixel>{children}</Pixel>
    </>
  );
}

const InputRange = styled.input`
  margin-right: 30px;
`;

const Pixel = styled.span`
  display: inline-block;
  width: 50px;
  text-align: right;
`;
