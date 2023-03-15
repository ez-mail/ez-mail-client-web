import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import emailTemplateDataAtom from '../../../recoil/emailTemplate/atom';
import StyleControlPanelRow from '../DesignedComponents/StyleControlPanelRow';
import StyleControlPanelSelectBox from '../DesignedComponents/StyleControlPanelSelectBox';
import StyleControlPanelColorPicker from '../DesignedComponents/StyleControlPanelColorPicker';
import StyleControlPanelInputRange from '../DesignedComponents/StyleControlPanelInputRange';

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
      <StyleControlPanelRow title="배경 색상">
        <StyleControlPanelColorPicker
          name="backgroundColor"
          value={
            emailContentsData.emailContents[index].boxStyle.backgroundColor
          }
          onChange={handleBoxStyleChange}
        />
      </StyleControlPanelRow>
      <StyleControlPanelRow title="배경 테두리">
        <StyleControlPanelSelectBox
          name="borderWidth"
          value={emailContentsData.emailContents[index].boxStyle.borderWidth}
          onChange={handleBoxStyleChange}
          options={[
            {
              value: '0px',
              expression: '없음',
            },
            {
              value: '1px',
              expression: '얇게',
            },
            {
              value: '2px',
              expression: '보통',
            },
            {
              value: '3px',
              expression: '굵게',
            },
          ]}
        />
        <StyleControlPanelColorPicker
          name="borderColor"
          value={emailContentsData.emailContents[index].boxStyle.borderColor}
          onChange={handleBoxStyleChange}
        />
      </StyleControlPanelRow>
      <StyleControlPanelRow title="테두리 스타일">
        <StyleControlPanelSelectBox
          name="borderStyle"
          value={emailContentsData.emailContents[index].boxStyle.borderStyle}
          onChange={handleBoxStyleChange}
          options={[
            {
              value: 'solid',
              expression: '실선',
            },
            {
              value: 'dashed',
              expression: '긴 점선',
            },
            {
              value: 'dotted',
              expression: '짧은 점선',
            },
          ]}
        />
      </StyleControlPanelRow>
      <StyleControlPanelRow title="높이">
        <StyleControlPanelInputRange
          value={emailContentsData.emailContents[index].boxStyle.height.replace(
            'px',
            '',
          )}
          onChange={handleInputChange}
        >
          {emailContentsData.emailContents[index].boxStyle.height}
        </StyleControlPanelInputRange>
      </StyleControlPanelRow>
    </StyleBox>
  );
}

const StyleBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BoxHeading = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.1rem;
`;
