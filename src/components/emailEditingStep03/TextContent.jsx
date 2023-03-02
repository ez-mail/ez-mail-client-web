import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ContentEditable from './ContentEditable';

export default function TextContent({ boxStyle, contentStyle, content }) {
  const [contentHTML, setContentHTML] = useState(content);
  const [isContentEditable, setIsContentEditable] = useState(true);
  const $editorRef = useRef();

  const handleContentChange = e => {
    setContentHTML(e.target.value);
  };

  return (
    <Box style={boxStyle}>
      <ContentEditable
        contentHTML={contentHTML}
        isContentEditable={isContentEditable}
        innerRef={$editorRef}
        onChange={handleContentChange}
        style={contentStyle}
        tagName="div"
      />
    </Box>
  );
}

const Box = styled.div`
  & > div:focus {
    outline: none;
  }
`;
