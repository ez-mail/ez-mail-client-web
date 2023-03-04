import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import {
  faImage,
  faHandPointer,
  faSquareFull,
  faWindowMinimize,
} from '@fortawesome/free-regular-svg-icons';

export default function BoxTool() {
  const onDragStart = (e, type) => {
    let contentType = null;

    switch (type) {
      case 'image':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'image',
          link: '#',
          imageSrc: '',
          boxStyle: {
            backgroundColor: '#FFFFFF',
            borderWidth: '0px',
            borderColor: '#000000',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            textAlign: 'center',
          },
          contentStyle: {
            maxWidth: '100%',
            width: '',
          },
        };
        break;
      case 'spacer':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'spacer',
          boxStyle: {
            backgroundColor: '#FFFFFF',
            borderWidth: '0px',
            borderColor: '#000000',
            borderStyle: 'solid',
            height: '50px',
          },
        };
        break;
      case 'divider':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'divider',
          boxStyle: {
            backgroundColor: '#FFFFFF',
            borderWidth: '0px',
            borderColor: '#000000',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '0px',
            paddingRight: '0px',
          },
          contentStyle: {
            height: '1px',
            borderTopWidth: '2px',
            borderTopStyle: 'solid',
            borderTopColor: '#000000',
          },
        };
        break;
      case 'button':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'button',
          link: '#',
          content: '버튼 이름',
          boxStyle: {
            backgroundColor: '#FFFFFF',
            borderWidth: '0px',
            borderColor: '#000000',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '0px',
            paddingRight: '0px',
            textAlign: 'center',
          },
          contentStyle: {
            display: 'inline-block',
            paddingTop: '16px',
            paddingBottom: '16px',
            paddingLeft: '18px',
            paddingRight: '18px',
            backgroundColor: '#ffdf2b',
            color: '#000000',
            borderWidth: '0px',
            borderStyle: 'solid',
            borderRadius: '3px',
            fontSize: '16px',
            textDecoration: 'none',
            fontFamily:
              'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", dotum, arial, helvetica, sans-serif',
          },
        };
        break;
      case 'text':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'text',
          content: '여기에 내용을 입력하세요.',
          boxStyle: {
            backgroundColor: '#FFFFFF',
            borderWidth: '0px',
            borderColor: '#000000',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '0px',
            paddingRight: '0px',
            textAlign: 'left',
          },
          contentStyle: {
            fontSize: '16px',
            fontFamily:
              'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", dotum, arial, helvetica, sans-serif',
          },
        };
        break;
      default:
        console.log('해당타입이 없습니다.');
    }
    e.dataTransfer.setData('content', JSON.stringify(contentType));
  };
  return (
    <ToolBoxContainer>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'spacer')}>
        <StyledIcon icon={faSquareFull} />
        <ToolBoxText>공백</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'divider')}>
        <StyledIcon icon={faWindowMinimize} />
        <ToolBoxText>구분선</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'image')}>
        <StyledIcon icon={faImage} />
        <ToolBoxText>이미지</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'text')}>
        <StyledIcon icon={faAlignLeft} />
        <ToolBoxText>텍스트</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'button')}>
        <StyledIcon icon={faHandPointer} />
        <ToolBoxText>버튼</ToolBoxText>
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
