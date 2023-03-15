import React from 'react';
import styled from 'styled-components';

import DividerContainer from './StyleControlPanels/DividerControlPanel';
import ButtonContainer from './StyleControlPanels/ButtonControlPanel';
import SpacerContainer from './StyleControlPanels/SpacerControlPanel';
import TextContainer from './StyleControlPanels/TextControlPanel';
import ImageContainer from './StyleControlPanels/ImageControlPanel';

export default function ContentStyleTool({ type, setFocusedType, index }) {
  let typeText = '';

  switch (type) {
    case 'divider':
      typeText = '구분선';
      break;
    case 'spacer':
      typeText = '공백';
      break;
    case 'text':
      typeText = '텍스트';
      break;
    case 'button':
      typeText = '버튼';
      break;
    case 'image':
      typeText = '이미지';
      break;
    default:
      return '';
  }

  return (
    <LeftToolContainer>
      <StyleBoxContainer>
        <ContentHeader>
          <BoxHeading>{typeText}</BoxHeading>
          <CloseButton type="button" onClick={() => setFocusedType(null)}>
            닫기
          </CloseButton>
        </ContentHeader>
        <Divider />
        {type === 'divider' && <DividerContainer index={index} />}
        {type === 'button' && <ButtonContainer index={index} />}
        {type === 'spacer' && <SpacerContainer index={index} />}
        {type === 'text' && <TextContainer index={index} />}
        {type === 'image' && <ImageContainer index={index} />}
      </StyleBoxContainer>
    </LeftToolContainer>
  );
}

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 10px 0px;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #dfe0e4;
  font-size: 0.875rem;
  align-self: flex-end;
`;

const LeftToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  min-width: 320px;
  background-color: white;
`;

const StyleBoxContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 0 15px 50px 20px;
  gap: 10px;
`;

const BoxHeading = styled.h3`
  font-size: 1.3rem;
`;

const Divider = styled.div`
  height: 1px;
  margin-bottom: 10px;
  border-top: 1px solid #bdbdbd;
`;
