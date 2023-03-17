import React from 'react';
import styled from 'styled-components';

import DividerControlPanel from './StyleControlPanels/DividerControlPanel';
import ButtonControlPanel from './StyleControlPanels/ButtonControlPanel';
import SpacerControlPanel from './StyleControlPanels/SpacerControlPanel';
import TextControlPanel from './StyleControlPanels/TextControlPanel';
import ImageControlPanel from './StyleControlPanels/ImageControlPanel';
import GrayButton from '../DesignedComponents/GrayButton';

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
          <GrayButton type="button" onClick={() => setFocusedType(null)}>
            닫기
          </GrayButton>
        </ContentHeader>
        <Divider />
        {type === 'divider' && <DividerControlPanel index={index} />}
        {type === 'button' && <ButtonControlPanel index={index} />}
        {type === 'spacer' && <SpacerControlPanel index={index} />}
        {type === 'text' && <TextControlPanel index={index} />}
        {type === 'image' && <ImageControlPanel index={index} />}
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
  font-size: 1.25rem;
`;

const Divider = styled.div`
  height: 1px;
  margin-bottom: 10px;
  border-top: 1px solid #bdbdbd;
`;
