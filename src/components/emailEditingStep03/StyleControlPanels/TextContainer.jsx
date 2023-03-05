import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faStrikethrough,
  faUnderline,
  faItalic,
} from '@fortawesome/free-solid-svg-icons';

import emailTemplateDataAtom from '../../../recoil/emailTemplate/atom';

export default function TextContainer({ index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );

  const underline = useRef();
  const lineThrough = useRef();
  const italic = useRef();
  // const [isBoldChecked, setIsBoldChecked] = useState(false);

  const handleContentStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const textStyle = draft.emailContents[index];

        textStyle.contentStyle[e.target.name] = e.target.value;
      }),
    );
  };

  const handleBoxStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const textStyle = draft.emailContents[index];

        textStyle.boxStyle[e.target.name] = e.target.value;
      }),
    );
  };

  // 텍스트 스타일 임시코드
  // const handleLinkStyleChange = e => {
  //   if (e.currentTarget.name === 'bold') {
  //     setIsBoldChecked(!isBoldChecked);
  //     e.currentTarget.className = `${isBoldChecked ? 'active' : ''}`;
  //     const newLinkStyle = {
  //       ...linkStyle,
  //       fontWeight: `${isBoldChecked ? 'bold' : 'normal'}`,
  //     };

  //     setLinkStyle(newLinkStyle);
  //   } else if (e.currentTarget.name === 'underline') {
  //     lineThrough.current.className = '';
  //     e.currentTarget.className = 'active';
  //     const newLinkStyle = {
  //       ...linkStyle,
  //       textDecorationLine: e.currentTarget.value,
  //     };

  //     setLinkStyle(newLinkStyle);
  //   } else {
  //     underline.current.className = '';
  //     e.currentTarget.className = 'active';
  //     const newLinkStyle = {
  //       ...linkStyle,
  //       textDecorationLine: e.currentTarget.value,
  //     };

  //     setLinkStyle(newLinkStyle);
  //   }
  // };

  return (
    <>
      <StyleBox>
        <StyleRow>
          <StyleRowText>글자 크기</StyleRowText>
          <SelectBox
            name="fontSize"
            value={emailContentsData.emailContents[index].contentStyle.fontSize}
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="40px">40px</option>
            <option value="48px">48px</option>
            <option value="60px">60px</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>폰트</StyleRowText>
          <SelectBox
            name="fontFamily"
            value={
              emailContentsData.emailContents[index].contentStyle.fontFamily
            }
            onChange={e => handleContentStyleChange(e)}
          >
            <option value='AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", "dotum", arial, helvetica, sans-serif'>
              고딕
            </option>
            <option value='"nanum myoungjo", 바탕, batang, serif'>명조</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>글자 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="color"
            value={emailContentsData.emailContents[index].contentStyle.color}
            onChange={e => handleContentStyleChange(e)}
          />
        </StyleRow>
      </StyleBox>
      <StyleBox>
        <StyleRow>
          <StyleRowText>스타일</StyleRowText>
          <LinkStyleBox>
            <button
              type="button"
              name="bold"
              // onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faBold} />
            </button>
            <button
              type="button"
              name="underline"
              value="underline"
              ref={underline}
              // onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faUnderline} />
            </button>
            <button
              type="button"
              name="line-through"
              value="line-through"
              ref={lineThrough}
              // onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faStrikethrough} />
            </button>
            <button
              type="button"
              name="italic"
              value="italic"
              ref={italic}
              // onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faItalic} />
            </button>
          </LinkStyleBox>
        </StyleRow>
      </StyleBox>
      <StyleBox>
        <BoxHeading>상자</BoxHeading>
        <StyleRow>
          <StyleRowText>배경 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="backgroundColor"
            value={
              emailContentsData.emailContents[index].boxStyle.backgroundColor
            }
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>배경 테두리</StyleRowText>
          <SelectBox
            name="borderWidth"
            value={emailContentsData.emailContents[index].boxStyle.borderWidth}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="1px">얇게</option>
            <option value="2px">보통</option>
            <option value="3px">굵게</option>
          </SelectBox>
          <ColorPicker
            type="color"
            name="borderColor"
            value={emailContentsData.emailContents[index].boxStyle.borderColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>테두리 스타일</StyleRowText>
          <SelectBox
            name="borderStyle"
            value={emailContentsData.emailContents[index].boxStyle.borderStyle}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="solid">실선</option>
            <option value="dashed">긴 점선</option>
            <option value="dotted">짧은 점선</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>내부 여백 상단</StyleRowText>
          <SelectBox
            name="paddingTop"
            value={emailContentsData.emailContents[index].boxStyle.paddingTop}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="5px">좁게</option>
            <option value="15px">보통</option>
            <option value="25px">넓게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>내부 여백 하단</StyleRowText>
          <SelectBox
            name="paddingBottom"
            value={
              emailContentsData.emailContents[index].boxStyle.paddingBottom
            }
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="5px">좁게</option>
            <option value="15px">보통</option>
            <option value="25px">넓게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>내부 여백 좌측</StyleRowText>
          <SelectBox
            name="paddingLeft"
            value={emailContentsData.emailContents[index].boxStyle.paddingLeft}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="5px">좁게</option>
            <option value="15px">보통</option>
            <option value="25px">넓게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>내부 여백 우측</StyleRowText>
          <SelectBox
            name="paddingRight"
            value={emailContentsData.emailContents[index].boxStyle.paddingRight}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="5px">좁게</option>
            <option value="15px">보통</option>
            <option value="25px">넓게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>정렬</StyleRowText>
          <SelectBox
            name="textAlign"
            value={emailContentsData.emailContents[index].boxStyle.textAlign}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="left">왼쪽</option>
            <option value="center">가운데</option>
            <option value="right">오른쪽</option>
          </SelectBox>
        </StyleRow>
      </StyleBox>
    </>
  );
}

const StyleBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectBox = styled.select`
  width: 80px;
  height: 24px;
  padding: 0 5px;
  margin-left: auto;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const ColorPicker = styled.input`
  width: 24px;
  height: 24px;
  padding: 0;
  margin-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  &::-webkit-color-swatch {
    border-radius: 3px;
  }
`;

const StyleRowText = styled.div`
  font-size: 1rem;
`;

const BoxHeading = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.1rem;
`;

const LinkStyleBox = styled.div`
  display: flex;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  button {
    padding: 5px 8px;
    &:nth-child(1) {
      border-radius: 5px 0 0 5px;
      border-right: 1px solid #bdbdbd;
      background-color: ${props => props.color || '#ffffff'};
      &.active {
        background-color: #ffdf2b;
      }
    }
    &:nth-child(2) {
      border-right: 1px solid #bdbdbd;
      background-color: ${props => props.color || '#ffffff'};
      &.active {
        background-color: #ffdf2b;
      }
    }
    &:nth-child(3) {
      border-right: 1px solid #bdbdbd;
      background-color: ${props => props.color || '#ffffff'};
      &.active {
        background-color: #ffdf2b;
      }
    }
    &:nth-child(4) {
      border-radius: 0 5px 5px 0;
      background-color: ${props => props.color || '#ffffff'};
      &.active {
        background-color: #ffdf2b;
      }
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
`;
