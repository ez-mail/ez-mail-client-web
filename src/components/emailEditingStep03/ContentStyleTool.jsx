import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DividerContainer from './StyleControlPanels/DividerContainer';
import ButtonContainer from './StyleControlPanels/ButtonContainer';
import SpacerContainer from './StyleControlPanels/SpacerContainer';
import TextContainer from './StyleControlPanels/TextContainer';
import ImageContainer from './StyleControlPanels/ImageContainer';

export default function ContentStyleTool({ type, setFocusedType }) {
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
        {type === 'divider' && <DividerContainer />}
        {type === 'button' && <ButtonContainer />}
        {type === 'spacer' && <SpacerContainer />}
        {type === 'text' && <TextContainer />}
        {type === 'image' && <ImageContainer />}
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
  background-color: #bdbdbd;
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
  font-size: 1.1rem;
`;

const Divider = styled.div`
  height: 1px;
  margin-bottom: 10px;
  border-top: 1px solid #bdbdbd;
`;
