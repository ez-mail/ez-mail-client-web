import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import spacerStyleAtom from '../../../recoil/spacerStyle/atom';

export default function SpacerContainer() {
  const [spacerStyle, setSpacerStyle] = useRecoilState(spacerStyleAtom);

  const handleBoxStyleChange = e => {
    const newBoxStyle = {
      ...spacerStyle,
      boxStyle: {
        [e.target.name]: e.target.value,
      },
    };

    setSpacerStyle(newBoxStyle);
  };

  return (
    <StyleBox>
      <BoxHeading>상자</BoxHeading>
      <StyleRow>
        <StyleRowText>배경 색상</StyleRowText>
        <ColorPicker
          type="color"
          name="backgroundColor"
          value={spacerStyle.boxStyle.backgroundColor}
          onChange={e => handleBoxStyleChange(e)}
        />
      </StyleRow>
      <StyleRow>
        <StyleRowText>배경 테두리</StyleRowText>
        <SelectBox
          name="borderWidth"
          value={spacerStyle.boxStyle.borderWidth}
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
          value={spacerStyle.boxStyle.borderColor}
          onChange={e => handleBoxStyleChange(e)}
        />
      </StyleRow>
      <StyleRow>
        <StyleRowText>테두리 스타일</StyleRowText>
        <SelectBox
          name="borderStyle"
          value={spacerStyle.boxStyle.borderStyle}
          onChange={e => handleBoxStyleChange(e)}
        >
          <option value="solid">실선</option>
          <option value="dashed">긴 점선</option>
          <option value="dotted">짧은 점선</option>
        </SelectBox>
      </StyleRow>
      <StyleRow>
        <StyleRowText>높이</StyleRowText>
        <input
          name="height"
          type="range"
          min="10"
          max="100"
          value={spacerStyle.boxStyle.height}
          onChange={e => handleBoxStyleChange(e)}
        />
        <p>{spacerStyle.boxStyle.height}px</p>
      </StyleRow>
    </StyleBox>
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
