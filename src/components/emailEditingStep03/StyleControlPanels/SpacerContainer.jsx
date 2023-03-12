import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import emailTemplateDataAtom from '../../../recoil/emailTemplate/atom';

export default function SpacerContainer({ index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );

  const handleBoxStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const spacerStyle = draft.emailContents[index];

        spacerStyle.boxStyle[e.target.name] = e.target.value;
      }),
    );
  };

  const handleInputChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const spacerStyle = draft.emailContents[index];

        spacerStyle.boxStyle[e.target.name] = `${e.target.value}px`;
      }),
    );
  };

  return (
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
          onChange={handleBoxStyleChange}
        />
      </StyleRow>
      <StyleRow>
        <StyleRowText>배경 테두리</StyleRowText>
        <SelectBox
          name="borderWidth"
          value={emailContentsData.emailContents[index].boxStyle.borderWidth}
          onChange={handleBoxStyleChange}
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
          onChange={handleBoxStyleChange}
        />
      </StyleRow>
      <StyleRow>
        <StyleRowText>테두리 스타일</StyleRowText>
        <SelectBox
          name="borderStyle"
          value={emailContentsData.emailContents[index].boxStyle.borderStyle}
          onChange={handleBoxStyleChange}
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
          step="10"
          value={emailContentsData.emailContents[index].boxStyle.height.replace(
            'px',
            '',
          )}
          onChange={handleInputChange}
        />
        <p>{emailContentsData.emailContents[index].boxStyle.height}</p>
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
  p {
    width: 50px;
  }
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
