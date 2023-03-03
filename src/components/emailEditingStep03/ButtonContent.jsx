import DOMPurify from 'dompurify';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import ContentEditable from './ContentEditable';

export default function ButtonContent({
  boxStyle,
  contentStyle,
  content = '버튼 이름',
  link = '#',
}) {
  const [isContentEditable, setIsContentEditable] = useState(false);
  const [contentHTML, setContentHTML] = useState(content);
  const $editorRef = useRef();

  const handleContentChange = e => {
    setContentHTML(DOMPurify.sanitize(e.target.value));
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const handleEditorClick = () => {
    setIsContentEditable(true);
  };

  const handleEditorBlur = () => {
    setIsContentEditable(false);
  };

  return (
    <Box style={boxStyle}>
      <ContentEditable
        contentHTML={contentHTML}
        isContentEditable={isContentEditable}
        innerRef={$editorRef}
        onChange={handleContentChange}
        style={contentStyle}
        onKeyDown={handleKeyDown}
        tagName="a"
        link={link}
        onBlur={handleEditorBlur}
        onClick={handleEditorClick}
      />
    </Box>
  );
}

const Box = styled.div`
  & > a:hover {
    outline: dashed black;
  }

  & > a:focus {
    outline: dashed black;
  }
`;
