import React, { useState } from 'react';
import styled from 'styled-components';

export default function TextContent() {
  const [inputText, setInputText] = useState('안녕하세요');

  const handleTextareaChange = e => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Div
      value={inputText}
      onChange={handleTextareaChange}
      contentEditable
      style={{
        width: '100%',
        paddingTop: '15px',
        paddingBottom: `15px`,
        paddingLeft: `15px`,
        paddingRight: `15px`,
      }}
    />
  );
}

const Div = styled.div`
  &:hover {
    outline: 2px solid #ffdf2b;
  }

  &:focus {
    outline: 2px solid #ffdf2b;
  }
`;
