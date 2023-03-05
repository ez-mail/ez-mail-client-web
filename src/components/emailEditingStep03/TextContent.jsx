import DOMPurify from 'dompurify';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import ContentEditable from './ContentEditable';
import emailTemplateDataAtom from '../../recoil/emailTemplate/atom';

export default function TextContent({ boxStyle, contentStyle, index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );
  const [isContentEditable, setIsContentEditable] = useState(false);
  const $editorRef = useRef();

  const handleContentChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const textContent = draft.emailContents[index];

        textContent.content = DOMPurify.sanitize(e.target.value);
      }),
    );
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
        contentHTML={emailContentsData.emailContents[index].content}
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
