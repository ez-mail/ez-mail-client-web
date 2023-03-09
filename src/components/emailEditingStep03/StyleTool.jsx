import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import emailTemplateDataAtom from '../../recoil/emailTemplate/atom';

export default function StyleTool() {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );

  const handleEmailBodyStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const { emailBodyStyle } = draft;

        emailBodyStyle[e.target.name] = e.target.value;
      }),
    );
  };

  const handleEmailContainerStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const { emailContainerStyle, emailContents } = draft;

        emailContainerStyle[e.target.name] = e.target.value;

        for (let i = 0; i < emailContents.length; i += 1) {
          emailContents[i].boxStyle[e.target.name] = e.target.value;
        }
      }),
    );
  };

  return (
    <StyleBoxContainer>
      <StyleBox>
        <BoxHeading>이메일</BoxHeading>
        <StyleRow>
          <StyleRowText>배경 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="backgroundColor"
            value={emailContentsData.emailBodyStyle.backgroundColor}
            onChange={handleEmailBodyStyleChange}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>본문 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="backgroundColor"
            value={emailContentsData.emailContainerStyle.backgroundColor}
            onChange={handleEmailContainerStyleChange}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>본문 테두리</StyleRowText>
          <SelectBox
            name="borderWidth"
            value={emailContentsData.emailContainerStyle.borderWidth}
            onChange={handleEmailContainerStyleChange}
          >
            <option value="0px solid ">없음</option>
            <option value="1px">얇게</option>
            <option value="2px">보통</option>
            <option value="3px">굵게</option>
          </SelectBox>
          <ColorPicker
            type="color"
            name="borderColor"
            value={emailContentsData.emailContainerStyle.borderColor}
            onChange={handleEmailContainerStyleChange}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>폰트</StyleRowText>
          <SelectBox
            name="fontFamily"
            value={emailContentsData.emailContainerStyle.fontFamily}
            onChange={handleEmailContainerStyleChange}
          >
            <option value='AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", "dotum", arial, helvetica, sans-serif'>
              고딕
            </option>
            <option value='"nanum myoungjo", 바탕, batang, serif'>명조</option>
          </SelectBox>
        </StyleRow>
      </StyleBox>
    </StyleBoxContainer>
  );
}

const StyleBoxContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 0 15px 50px 20px;
  gap: 10px;
`;

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
