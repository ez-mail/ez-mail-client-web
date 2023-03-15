import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import emailTemplateDataAtom from '../../../recoil/emailTemplate/atom';
import StyleControlPanelRow from '../DesignedComponents/StyleControlPanelRow';
import StyleControlPanelSelectBox from '../DesignedComponents/StyleControlPanelSelectBox';
import StyleControlPanelColorPicker from '../DesignedComponents/StyleControlPanelColorPicker';

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
        <StyleControlPanelRow title="두께">
          <StyleControlPanelSelectBox
            name="borderTopWidth"
            value={
              emailContentsData.emailContents[index].contentStyle.borderTopWidth
            }
            onChange={handleContentStyleChange}
            options={[
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
        </StyleControlPanelRow>
        <StyleControlPanelRow title="스타일">
          <StyleControlPanelSelectBox
            name="borderTopStyle"
            value={
              emailContentsData.emailContents[index].contentStyle.borderTopStyle
            }
            onChange={handleContentStyleChange}
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
        <StyleControlPanelRow title="색상">
          <StyleControlPanelColorPicker
            name="borderTopColor"
            value={
              emailContentsData.emailContents[index].contentStyle.borderTopColor
            }
            onChange={handleContentStyleChange}
          />
        </StyleControlPanelRow>
      </StyleBox>
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
        <StyleControlPanelRow title="내부 여백 상단">
          <StyleControlPanelSelectBox
            name="paddingTop"
            value={emailContentsData.emailContents[index].boxStyle.paddingTop}
            onChange={handleBoxStyleChange}
            options={[
              {
                value: '0px',
                expression: '없음',
              },
              {
                value: '5px',
                expression: '좁게',
              },
              {
                value: '15px',
                expression: '보통',
              },
              {
                value: '25px',
                expression: '넓게',
              },
            ]}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="내부 여백 하단">
          <StyleControlPanelSelectBox
            name="paddingBottom"
            value={
              emailContentsData.emailContents[index].boxStyle.paddingBottom
            }
            onChange={handleBoxStyleChange}
            options={[
              {
                value: '0px',
                expression: '없음',
              },
              {
                value: '5px',
                expression: '좁게',
              },
              {
                value: '15px',
                expression: '보통',
              },
              {
                value: '25px',
                expression: '넓게',
              },
            ]}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="내부 여백 좌측">
          <StyleControlPanelSelectBox
            name="paddingLeft"
            value={emailContentsData.emailContents[index].boxStyle.paddingLeft}
            onChange={handleBoxStyleChange}
            options={[
              {
                value: '0px',
                expression: '없음',
              },
              {
                value: '5px',
                expression: '좁게',
              },
              {
                value: '15px',
                expression: '보통',
              },
              {
                value: '25px',
                expression: '넓게',
              },
            ]}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="내부 여백 우측">
          <StyleControlPanelSelectBox
            name="paddingRight"
            value={emailContentsData.emailContents[index].boxStyle.paddingRight}
            onChange={handleBoxStyleChange}
            options={[
              {
                value: '0px',
                expression: '없음',
              },
              {
                value: '5px',
                expression: '좁게',
              },
              {
                value: '15px',
                expression: '보통',
              },
              {
                value: '25px',
                expression: '넓게',
              },
            ]}
          />
        </StyleControlPanelRow>
      </StyleBox>
    </>
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
