import DOMPurify from 'dompurify';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import ContentEditable from './ContentEditable';
import emailTemplateDataAtom from '../../recoil/emailTemplate/atom';

export default function ButtonContent({ boxStyle, contentStyle, link, index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );
  const [isContentEditable, setIsContentEditable] = useState(false);
  const $editorRef = useRef();

  const handleContentChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const buttonContent = draft.emailContents[index];

        buttonContent.content = DOMPurify.sanitize(e.target.value);
      }),
    );
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
        contentHTML={emailContentsData.emailContents[index].content}
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
