import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import produce from 'immer';

import emailTemplateDataAtom from '../../../recoil/emailTemplate/atom';
import StyleControlPanelRow from '../DesignedComponents/StyleControlPanelRow';
import StyleControlPanelSelectBox from '../DesignedComponents/StyleControlPanelSelectBox';
import StyleControlPanelColorPicker from '../DesignedComponents/StyleControlPanelColorPicker';
import StyleControlPanelLinkInput from '../DesignedComponents/StyleControlPanelLinkInput';

export default function ButtonContainer({ index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );

  const handleButtonDataChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const buttonStyle = draft.emailContents[index];

        buttonStyle[e.target.name] =
          e.target.value === '' ? '#' : e.target.value;
      }),
    );
  };

  const handleContentStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const buttonStyle = draft.emailContents[index];

        buttonStyle.contentStyle[e.target.name] = e.target.value;
      }),
    );
  };

  const handleBoxStyleChange = e => {
    setEmailContentsData(
      produce(emailContentsData, draft => {
        const buttonStyle = draft.emailContents[index];

        buttonStyle.boxStyle[e.target.name] = e.target.value;
      }),
    );
  };

  return (
    <>
      <StyleBox>
        <StyleControlPanelRow title="링크">
          <StyleControlPanelLinkInput
            value={
              emailContentsData.emailContents[index].link === '#'
                ? ''
                : emailContentsData.emailContents[index].link
            }
            onChange={handleButtonDataChange}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="모양">
          <StyleControlPanelSelectBox
            name="borderRadius"
            value={
              emailContentsData.emailContents[index].contentStyle.borderRadius
            }
            onChange={handleContentStyleChange}
            options={[
              {
                value: '3px',
                expression: '사각형',
              },
              {
                value: '500px',
                expression: '원형',
              },
            ]}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="버튼 색상">
          <StyleControlPanelColorPicker
            name="backgroundColor"
            value={
              emailContentsData.emailContents[index].contentStyle
                .backgroundColor
            }
            onChange={handleContentStyleChange}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="테두리">
          <StyleControlPanelSelectBox
            name="borderWidth"
            value={
              emailContentsData.emailContents[index].contentStyle.borderWidth
            }
            onChange={handleContentStyleChange}
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
        </StyleControlPanelRow>
        <StyleControlPanelRow title="글자 색상">
          <StyleControlPanelColorPicker
            name="color"
            value={emailContentsData.emailContents[index].contentStyle.color}
            onChange={handleContentStyleChange}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="글자 크기">
          <StyleControlPanelSelectBox
            name="fontSize"
            value={emailContentsData.emailContents[index].contentStyle.fontSize}
            onChange={handleContentStyleChange}
            options={[
              {
                value: '12px',
                expression: '12px',
              },
              {
                value: '14px',
                expression: '14px',
              },
              {
                value: '16px',
                expression: '16px',
              },
              {
                value: '18px',
                expression: '18px',
              },
              {
                value: '20px',
                expression: '20px',
              },
              {
                value: '26px',
                expression: '26px',
              },
              {
                value: '32px',
                expression: '32px',
              },
              {
                value: '40px',
                expression: '40px',
              },
              {
                value: '48px',
                expression: '48px',
              },
              {
                value: '60px',
                expression: '60px',
              },
            ]}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="폰트">
          <StyleControlPanelSelectBox
            name="fontFamily"
            value={
              emailContentsData.emailContents[index].contentStyle.fontFamily
            }
            onChange={handleContentStyleChange}
            options={[
              {
                value:
                  'AppleSDGothic, "apple sd gothic neo", "noto sans korean", "noto sans korean regular", "noto sans cjk kr", "noto sans cjk", "nanum gothic", "malgun gothic", "dotum", arial, helvetica, sans-serif',
                expression: '고딕',
              },
              {
                value: '"nanum myoungjo", 바탕, batang, serif',
                expression: '명조',
              },
            ]}
          />
        </StyleControlPanelRow>
        <StyleControlPanelRow title="정렬">
          <StyleControlPanelSelectBox
            name="textAlign"
            value={emailContentsData.emailContents[index].boxStyle.textAlign}
            onChange={handleBoxStyleChange}
            options={[
              {
                value: 'left',
                expression: '왼쪽',
              },
              {
                value: 'center',
                expression: '가운데',
              },
              {
                value: 'right',
                expression: '오른쪽',
              },
            ]}
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
