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
            backgroundColor: '#FFFFFF', // 기본값: 흰색
            borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
            borderColor: '#000000', // 기본값: 검정색
            borderStyle: 'solid', // solid, dotted, dashed
            paddingTop: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
            paddingBottom: '15px', // paddingTop 과 동일
            paddingLeft: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
            paddingRight: '15px', // paddingLeft 와 동일
            textAlign: 'center', // 버튼정렬 기본값: center(가운데), 왼쪽: left, 오른쪽: right
            zIndex: 1,
          },
          contentStyle: {
            maxWidth: '100%', // 사용자 조절값 X
            width: '', // 처음엔 설정 안되어있어서 이미지 본연의 크기로 나오고 100, 200 ~ 600 으로 100px 단위로 설정 가능
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
            backgroundColor: '#FFFFFF', // 기본값: 흰색
            borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
            borderColor: '#000000', // 기본값: 검정색
            borderStyle: 'solid', // solid, dotted, dashed
            height: '50px', // 10px ~ 100px
            zIndex: 1,
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
            backgroundColor: '#FFFFFF', // 기본값: 흰색
            borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
            borderColor: '#000000', // 기본값: 검정색
            borderStyle: 'solid', // solid, dotted, dashed
            paddingTop: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
            paddingBottom: '15px', // paddingTop 과 동일
            paddingLeft: '0px', // 기본값: 0px(없음), 좁게: 5px, 보통: 15px, 넓게: 25px,
            paddingRight: '0px', // paddingLeft 와 동일
            zIndex: 1,
          },
          contentStyle: {
            height: '1px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            borderTopWidth: '2px', // 기본값: 2px(보통), 얇게: 1px, 굵게: 3px
            borderTopStyle: 'solid', // 기본값: solid(직선), 짧은 점선: dotted, 긴 점선: dashed
            borderTopColor: '#000000', // 기본값: 검정색
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
            backgroundColor: '#FFFFFF', // 기본값: 흰색
            borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
            borderColor: '#000000', // 기본값: 검정색
            borderStyle: 'solid', // solid, dotted, dashed
            paddingTop: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
            paddingBottom: '15px', // paddingTop 과 동일
            paddingLeft: '0px', // 기본값: 0px(없음), 좁게: 5px, 보통: 15px, 넓게: 25px,
            paddingRight: '0px', // paddingLeft 와 동일
            textAlign: 'center', // 버튼정렬 기본값: center(가운데), 왼쪽: left, 오른쪽: right
            zIndex: 1,
          },
          contentStyle: {
            display: 'inline-block', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            paddingTop: '16px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            paddingBottom: '16px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            paddingLeft: '18px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            paddingRight: '18px', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            backgroundColor: '#ffdf2b', // 버튼색상 기본값: 시그니처 노랑
            color: '#000000', // 글자색상 기본값: 검정
            borderWidth: '0px', // 버튼 테두리 기본값: 0px(없음), 얇게: 1px, 보통: 2px, 굵게: 3px
            borderStyle: 'solid', // 사용자 조절값 X, 스타일 유지를 위한 고정값
            borderRadius: '3px', // 버튼 모양 기본값 사각형, 원형: 500px
            fontSize: '16px', // 글자 크기 기본값 16px, 12, 14, 18, 20, 26, 32, 40, 48, 60
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
            backgroundColor: '#FFFFFF', // 기본값: 흰색
            borderWidth: '0px', // 기본값: 0px, 얇게: 1px, 보통: 2px, 두껍게: 3px
            borderColor: '#000000', // 기본값: 검정색
            borderStyle: 'solid', // solid, dotted, dashed
            paddingTop: '15px', // 기본값: 15px(보통), 없음: 0px, 좁게: 5px, 넓게: 25px,
            paddingBottom: '15px', // paddingTop 과 동일
            paddingLeft: '0px', // 기본값: 0px(없음), 좁게: 5px, 보통: 15px, 넓게: 25px,
            paddingRight: '0px', // paddingLeft 와 동일
            textAlign: 'left', // 텍스트 정렬 기본값: left(가운데), 가운데: center, 오른쪽: right
            zIndex: 1,
          },
          contentStyle: {
            fontSize: '24px', // 기본값: 24px, 12, 14, 16, 18, 20, 32, 40, 48, 60
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
