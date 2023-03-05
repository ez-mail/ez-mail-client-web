import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import emailTemplateDataAtom from '../../../recoil/emailTemplate/atom';

export default function DividerContainer({ index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );

  const handleContentStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const dividerStyle = draft.emailContents[index];

        dividerStyle.contentStyle[e.target.name] = e.target.value;
      }),
    );
  };

  const handleBoxStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const dividerStyle = draft.emailContents[index];

        dividerStyle.boxStyle[e.target.name] = e.target.value;
      }),
    );
  };

  return (
    <>
      <StyleBox>
        <StyleRow>
          <StyleRowText>두께</StyleRowText>
          <SelectBox
            name="borderTopWidth"
            value={
              emailContentsData.emailContents[index].contentStyle.borderTopWidth
            }
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="1px">얇게</option>
            <option value="2px">보통</option>
            <option value="3px">굵게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>스타일</StyleRowText>
          <SelectBox
            name="borderTopStyle"
            value={
              emailContentsData.emailContents[index].contentStyle.borderTopStyle
            }
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="solid">실선</option>
            <option value="dashed">긴 점선</option>
            <option value="dotted">짧은 점선</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>색상</StyleRowText>
          <ColorPicker
            type="color"
            name="borderTopColor"
            value={
              emailContentsData.emailContents[index].contentStyle.borderTopColor
            }
            onChange={e => handleContentStyleChange(e)}
          />
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
