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
  const onDragStart = (e, type) => {
    let contentType = null;

    switch (type) {
      case 'image':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'image',
          link: 'https://beta.reactjs.org/',
          imageSrc:
            'https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          boxStyle: {
            backgroundColor: 'yellow',
            borderWidth: '0px',
            borderColor: 'black',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '5px',
            paddingRight: '5px',
            textAlign: 'center',
          },
          contentStyle: {
            width: '400px',
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
            backgroundColor: 'green',
            borderWidth: '1px',
            borderColor: 'black',
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
            backgroundColor: 'yellow',
            borderWidth: '0px',
            borderColor: 'black',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
          },
          contentStyle: {
            height: '1px',
            borderTopWidth: '3px',
            borderTopColor: 'black',
            borderTopStyle: 'solid',
          },
        };
        break;
      case 'button':
        contentType = {
          id: crypto.randomUUID(),
          isActive: false,
          isDraggable: false,
          type: 'button',
          link: 'https://beta.reactjs.org/',
          content: '길지 버튼',
          boxStyle: {
            backgroundColor: 'orange',
            borderWidth: '1px',
            borderColor: 'black',
            borderStyle: 'solid',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            textAlign: 'center',
          },
          contentStyle: {
            backgroundColor: '#ffdf2b',
            borderWidth: '0px',
            borderColor: 'black',
            borderStyle: 'solid',
            borderRadius: '3px',
            color: 'white',
            fontSize: '16px',
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
          content: '뿡빵뿡빵',
          boxStyle: {
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '0px',
            paddingRight: '0px',
            textAlign: 'center',
          },
          contentStyle: {
            fontSize: '24px',
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
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'text')}>
        <StyledIcon icon={faAlignLeft} />
        <ToolBoxText>텍스트</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'image')}>
        <StyledIcon icon={faImage} />
        <ToolBoxText>이미지</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'button')}>
        <StyledIcon icon={faHandPointer} />
        <ToolBoxText>버튼</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'video')}>
        <StyledIcon icon={faVideo} />
        <ToolBoxText>비디오</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'spacer')}>
        <StyledIcon icon={faSquareFull} />
        <ToolBoxText>공백</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'footer')}>
        <StyledIcon icon={faXmarksLines} />
        <ToolBoxText>푸터</ToolBoxText>
      </ToolBox>
      <ToolBox draggable="true" onDragStart={e => onDragStart(e, 'divider')}>
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
