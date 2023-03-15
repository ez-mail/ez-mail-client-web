import React from 'react';
import styled from 'styled-components';

export default function StyleControlPanelSelectBox({
  name,
  value,
  onChange,
  options,
}) {
  const selectOptions = options.map(option => {
    return (
      <option key={crypto.randomUUID()} value={option.value}>
        {option.expression}
      </option>
    );
  });

  return (
    <SelectBox name={name} value={value} onChange={onChange}>
      {selectOptions}
    </SelectBox>
  );
}

const SelectBox = styled.select`
  width: 80px;
  height: 24px;
  padding: 0 5px;
  margin-left: auto;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
