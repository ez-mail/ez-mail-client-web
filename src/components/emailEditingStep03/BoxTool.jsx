import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faVideo,
  faXmarksLines,
} from '@fortawesome/free-solid-svg-icons';
import {
  faImage,
  faHandPointer,
  faSquareFull,
  faWindowMinimize,
} from '@fortawesome/free-regular-svg-icons';

export default function BoxTool() {
  return (
    <ToolBoxContainer>
      <ToolBox>
        <StyledIcon icon={faAlignLeft} />
        <ToolBoxText>텍스트</ToolBoxText>
      </ToolBox>
      <ToolBox>
        <StyledIcon icon={faImage} />
        <ToolBoxText>이미지</ToolBoxText>
      </ToolBox>
      <ToolBox>
        <StyledIcon icon={faHandPointer} />
        <ToolBoxText>버튼</ToolBoxText>
      </ToolBox>
      <ToolBox>
        <StyledIcon icon={faVideo} />
        <ToolBoxText>비디오</ToolBoxText>
      </ToolBox>
      <ToolBox>
        <StyledIcon icon={faSquareFull} />
        <ToolBoxText>공백</ToolBoxText>
      </ToolBox>
      <ToolBox>
        <StyledIcon icon={faXmarksLines} />
        <ToolBoxText>푸터</ToolBoxText>
      </ToolBox>
      <ToolBox>
        <StyledIcon icon={faWindowMinimize} />
        <ToolBoxText>구분선</ToolBoxText>
      </ToolBox>
    </ToolBoxContainer>
  );
}

const ToolBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 12px;
  width: 100%;
  padding: 6px;
`;

const ToolBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 88px;
  width: 88px;
  border: 1px solid #dfe0e4;
  border-radius: 5px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.05);
  cursor: grab;
`;

const ToolBoxText = styled.span`
  margin-top: 10px;
  font-size: 0.75rem;
  font-weight: 400;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #757575;
`;
