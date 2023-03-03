import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import buttonStyleAtom from '../../../recoil/buttonStyle/atom';

export default function ButtonContainer() {
  const [buttonStyle, setButtonStyle] = useRecoilState(buttonStyleAtom);

  const handleButtonDataChange = e => {
    const newContentStyle = {
      ...buttonStyle,
      [e.target.name]: e.target.value === '' ? '#' : e.target.value,
    };

    setButtonStyle(newContentStyle);
  };

  const handleContentStyleChange = e => {
    const newContentStyle = {
      ...buttonStyle,
      contentStyle: {
        [e.target.name]: e.target.value,
      },
    };

    setButtonStyle(newContentStyle);
  };

  const handleBoxStyleChange = e => {
    const newBoxStyle = {
      ...buttonStyle,
      boxStyle: {
        [e.target.name]: e.target.value,
      },
    };

    setButtonStyle(newBoxStyle);
  };

  return (
    <>
      <StyleBox>
        <StyleRow>
          <StyleRowText>링크</StyleRowText>
          <LinkInput
            name="link"
            value={buttonStyle.link === '#' ? '' : buttonStyle.link}
            onChange={e => handleButtonDataChange(e)}
            placeholder="http://example.com"
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>모양</StyleRowText>
          <SelectBox
            name="borderRadius"
            value={buttonStyle.contentStyle.borderRadius}
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="3px">사각형</option>
            <option value="500px">원형</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>버튼 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="backgroundColor"
            value={buttonStyle.contentStyle.backgroundColor}
            onChange={e => handleContentStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>테두리</StyleRowText>
          <SelectBox
            name="borderWidth"
            value={buttonStyle.contentStyle.borderWidth}
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="1px">얇게</option>
            <option value="2px">보통</option>
            <option value="3px">굵게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>글자 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="color"
            value={buttonStyle.contentStyle.color}
            onChange={e => handleContentStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>글자 크기</StyleRowText>
          <SelectBox
            name="fontSize"
            value={buttonStyle.contentStyle.fontSize}
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="26px">26px</option>
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
            value={buttonStyle.contentStyle.fontFamily}
            onChange={e => handleContentStyleChange(e)}
          >
            <option value='AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", "dotum", arial, helvetica, sans-serif'>
              고딕
            </option>
            <option value='"nanum myoungjo", 바탕, batang, serif'>명조</option>
          </SelectBox>
        </StyleRow>
      </StyleBox>
      <StyleBox>
        <BoxHeading>상자</BoxHeading>
        <StyleRow>
          <StyleRowText>배경 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="backgroundColor"
            value={buttonStyle.boxStyle.backgroundColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>배경 테두리</StyleRowText>
          <SelectBox
            name="borderWidth"
            value={buttonStyle.boxStyle.borderWidth}
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
            value={buttonStyle.boxStyle.borderColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>테두리 스타일</StyleRowText>
          <SelectBox
            name="borderStyle"
            value={buttonStyle.boxStyle.borderStyle}
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
            value={buttonStyle.boxStyle.paddingTop}
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
            value={buttonStyle.boxStyle.paddingBottom}
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
            value={buttonStyle.boxStyle.paddingLeft}
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
            value={buttonStyle.boxStyle.paddingRight}
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
            value={buttonStyle.boxStyle.textAlign}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="left">왼쪽</option>
            <option value="center">가운데</option>
            <option value="right">오른쪽</option>
            <option value="block">채우기</option>
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

const LinkInput = styled.input`
  width: 70%;
`;