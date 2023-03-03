import DOMPurify from 'dompurify';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import ContentEditable from './ContentEditable';

export default function TextContent({ boxStyle, contentStyle, content }) {
  const [contentHTML, setContentHTML] = useState(content);
  const [isContentEditable, setIsContentEditable] = useState(false);
  const $editorRef = useRef();

  const handleContentChange = e => {
    setContentHTML(DOMPurify.sanitize(e.target.value));
  };

  const handleEditorBlur = () => {
    setIsContentEditable(false);
  };

  const handleEditorClick = () => {
    setIsContentEditable(true);
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
        onBlur={handleEditorBlur}
        onClick={handleEditorClick}
      />
    </Box>
  );
}

const Box = styled.div`
  & > div:hover {
    outline: dashed black;
  }

  & > div:focus {
    outline: dashed black;
  }
`;
