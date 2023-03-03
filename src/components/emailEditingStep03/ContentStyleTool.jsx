import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilState } from 'recoil';

import emailStyleAtom from '../../recoil/emailStyle/atom';
import buttonStyleAtom from '../../recoil/buttonStyle/atom';
import fontStyleAtom from '../../recoil/fontStyle/atom';
import linkStyleAtom from '../../recoil/linkStyle/atom';
import boxStyleAtom from '../../recoil/boxStyle/atom';
import dividerStyleAtom from '../../recoil/dividerStyle/atom';

export default function ContentStyleTool({ type }) {
  const [dividerStyle, setDividerStyle] = useRecoilState(dividerStyleAtom);
  const [buttonStyle, setButtonStyle] = useRecoilState(buttonStyleAtom);

  const handleDividerStyleChange = e => {
    const newDividerStyle = {
      ...dividerStyle,
      [e.target.name]: e.target.value,
    };

    setDividerStyle(newDividerStyle);
  };

  const handleButtonStyleChange = e => {
    const newButtonStyle = {
      ...buttonStyle,
      [e.target.name]: e.target.value,
    };

    setButtonStyle(newButtonStyle);
  };

  return (
    <LeftToolContainer>
      <StyleBoxContainer>
        {type === 'divider' && (
          <StyleBox>
            <BoxHeading>구분선</BoxHeading>
            <StyleRow>
              <StyleRowText>두께</StyleRowText>
              <SelectBox
                name="width"
                value={dividerStyle.width}
                onChange={e => handleDividerStyleChange(e)}
              >
                <option value="0px">없음</option>
                <option value="1px">얇게</option>
                <option value="2px">보통</option>
                <option value="3px">굵게</option>
              </SelectBox>
            </StyleRow>
            <StyleRow>
              <StyleRowText>스타일</StyleRowText>
              <SelectBox
                name="style"
                value={dividerStyle.style}
                onChange={e => handleDividerStyleChange(e)}
              >
                <option value="solid">solid</option>
                <option value="dashed">dashed</option>
                <option value="dotted">dotted</option>
              </SelectBox>
            </StyleRow>
            <StyleRow>
              <StyleRowText>색상</StyleRowText>
              <ColorPicker
                type="color"
                name="dividerColor"
                value={dividerStyle.color}
                onChange={e => handleDividerStyleChange(e)}
              />
            </StyleRow>
          </StyleBox>
        )}
        {type === 'button' && (
          <StyleBox>
            <BoxHeading>버튼</BoxHeading>
            <StyleRow>
              <StyleRowText>모양</StyleRowText>
              <SelectBox
                name="borderRadius"
                value={buttonStyle.borderRadius}
                onChange={e => handleButtonStyleChange(e)}
              >
                <option value="0px">각진</option>
                <option value="500px">둥글게</option>
              </SelectBox>
            </StyleRow>
            <StyleRow>
              <StyleRowText>색상</StyleRowText>
              <ColorPicker
                type="color"
                name="color"
                value={buttonStyle.color}
                onChange={e => handleButtonStyleChange(e)}
              />
            </StyleRow>
            <StyleRow>
              <StyleRowText>테두리</StyleRowText>
              <SelectBox
                name="borderWidth"
                value={buttonStyle.borderWidth}
                onChange={e => handleButtonStyleChange(e)}
              >
                <option value="0px">없음</option>
                <option value="1px">얇게</option>
                <option value="2px">보통</option>
                <option value="3px">굵게</option>
              </SelectBox>
              <ColorPicker
                type="color"
                name="borderColor"
                value={buttonStyle.borderColor}
                onChange={e => handleButtonStyleChange(e)}
              />
            </StyleRow>
            <StyleRow>
              <StyleRowText>정렬</StyleRowText>
              <SelectBox
                name="align"
                value={buttonStyle.align}
                onChange={e => handleButtonStyleChange(e)}
              >
                <option value="left">왼쪽</option>
                <option value="center">가운데</option>
                <option value="right">오른쪽</option>
                <option value="block">채우기</option>
              </SelectBox>
            </StyleRow>
          </StyleBox>
        )}
      </StyleBoxContainer>
    </LeftToolContainer>
  );
}

const LeftToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  min-width: 320px;
  background-color: white;
`;

const StyleBoxContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 0 15px 50px 20px;
  gap: 10px;
  border: 1px solid red;
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
