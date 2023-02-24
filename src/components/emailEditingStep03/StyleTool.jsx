import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faStrikethrough,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';

import emailStyleAtom from '../../recoil/emailStyle/atom';
import buttonStyleAtom from '../../recoil/buttonStyle/atom';
import fontStyleAtom from '../../recoil/fontStyle/atom';
import linkStyleAtom from '../../recoil/linkStyle/atom';
import boxStyleAtom from '../../recoil/boxStyle/atom';
import dividerStyleAtom from '../../recoil/dividerStyle/atom';

export default function StyleTool() {
  const [emailStyle, setEmailStyle] = useRecoilState(emailStyleAtom);
  const [dividerStyle, setDividerStyle] = useRecoilState(dividerStyleAtom);
  const [fontStyle, setFontStyle] = useRecoilState(fontStyleAtom);
  const [linkStyle, setLinkStyle] = useRecoilState(linkStyleAtom);
  const [buttonStyle, setButtonStyle] = useRecoilState(buttonStyleAtom);
  const [boxStyle, setBoxStyle] = useRecoilState(boxStyleAtom);
  const [isBoldChecked, setIsBoldChecked] = useState(false);
  const underline = useRef();
  const lineThrough = useRef();

  const handleEmailStyleChange = e => {
    const newEmailStyle = {
      ...emailStyle,
      [e.target.name]: e.target.value,
    };

    setEmailStyle(newEmailStyle);
  };

  const handleDividerStyleChange = e => {
    const newDividerStyle = {
      ...dividerStyle,
      [e.target.name]: e.target.value,
    };

    setDividerStyle(newDividerStyle);
  };

  const handleFontStyleChange = e => {
    const newFontStyle = {
      ...fontStyle,
      [e.target.name]: e.target.value,
    };

    setFontStyle(newFontStyle);
  };

  const handleLinkStyleColorChange = e => {
    const newLinkStyle = {
      ...linkStyle,
      [e.target.name]: e.target.value,
    };

    setLinkStyle(newLinkStyle);
  };

  const handleLinkStyleChange = e => {
    if (e.currentTarget.name === 'bold') {
      setIsBoldChecked(!isBoldChecked);
      e.currentTarget.className = `${isBoldChecked ? 'active' : ''}`;
      const newLinkStyle = {
        ...linkStyle,
        fontWeight: `${isBoldChecked ? 'bold' : 'normal'}`,
      };

      setLinkStyle(newLinkStyle);
    } else if (e.currentTarget.name === 'underline') {
      lineThrough.current.className = '';
      e.currentTarget.className = 'active';
      const newLinkStyle = {
        ...linkStyle,
        textDecorationLine: e.currentTarget.value,
      };

      setLinkStyle(newLinkStyle);
    } else {
      underline.current.className = '';
      e.currentTarget.className = 'active';
      const newLinkStyle = {
        ...linkStyle,
        textDecorationLine: e.currentTarget.value,
      };

      setLinkStyle(newLinkStyle);
    }
  };

  const handleButtonStyleChange = e => {
    const newButtonStyle = {
      ...buttonStyle,
      [e.target.name]: e.target.value,
    };

    setButtonStyle(newButtonStyle);
  };

  const handleBoxStyleChange = e => {
    const newBoxStyle = {
      ...boxStyle,
      [e.target.name]: e.target.value,
    };

    setBoxStyle(newBoxStyle);
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
            value={emailStyle.backgroundColor}
            onChange={e => handleEmailStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>본문 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="bodyColor"
            value={emailStyle.bodyColor}
            onChange={e => handleEmailStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>본문 테두리</StyleRowText>
          <SelectBox
            name="bodyBorderWidth"
            value={emailStyle.bodyBorderWidth}
            onChange={e => handleEmailStyleChange(e)}
          >
            <option value="0px solid ">없음</option>
            <option value="1px">얇게</option>
            <option value="2px">보통</option>
            <option value="3px">굵게</option>
          </SelectBox>
          <ColorPicker
            type="color"
            name="bodyBorderColor"
            value={emailStyle.bodyBorderColor}
            onChange={e => handleEmailStyleChange(e)}
          />
        </StyleRow>
      </StyleBox>
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
      <StyleBox>
        <BoxHeading>기본텍스트</BoxHeading>
        <StyleRow>
          <StyleRowText>폰트</StyleRowText>
          <SelectBox
            name="fontFamily"
            value={fontStyle.fontFamily}
            onChange={e => handleFontStyleChange(e)}
          >
            <option value="나눔고딕">나눔고딕</option>
            <option value="나눔명조">나눔명조</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>크기</StyleRowText>
          <SelectBox
            name="fontSize"
            value={fontStyle.fontSize}
            onChange={e => handleFontStyleChange(e)}
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="26px">26px</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>색상</StyleRowText>
          <ColorPicker
            type="color"
            name="color"
            value={fontStyle.color}
            onChange={e => handleFontStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>정렬</StyleRowText>
          <SelectBox
            name="textAlign"
            value={fontStyle.textAlign}
            onChange={e => handleFontStyleChange(e)}
          >
            <option value="left">왼쪽</option>
            <option value="center">가운데</option>
            <option value="right">오른쪽</option>
            <option value="justify">균등</option>
          </SelectBox>
        </StyleRow>
      </StyleBox>
      <StyleBox>
        <BoxHeading>링크텍스트</BoxHeading>
        <StyleRow>
          <StyleRowText>스타일</StyleRowText>
          <LinkStyleBox>
            <button
              type="button"
              name="bold"
              onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faBold} />
            </button>
            <button
              type="button"
              name="underline"
              value="underline"
              ref={underline}
              onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faUnderline} />
            </button>
            <button
              type="button"
              name="line-through"
              value="line-through"
              ref={lineThrough}
              onClick={e => handleLinkStyleChange(e)}
            >
              <StyledFontAwesomeIcon icon={faStrikethrough} />
            </button>
          </LinkStyleBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>색상</StyleRowText>
          <ColorPicker
            type="color"
            name="color"
            value={linkStyle.color}
            onChange={e => handleLinkStyleColorChange(e)}
          />
        </StyleRow>
      </StyleBox>
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
      <StyleBox>
        <BoxHeading>상자</BoxHeading>
        <StyleRow>
          <StyleRowText>배경 색상</StyleRowText>
          <ColorPicker
            type="color"
            name="backgroundColor"
            value={boxStyle.backgroundColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>배경 테두리</StyleRowText>
          <SelectBox
            name="borderWidth"
            value={boxStyle.borderWidth}
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
            value={boxStyle.borderColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>내부 여백 상단</StyleRowText>
          <SelectBox
            name="paddingTop"
            value={boxStyle.paddingTop}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="5px">좁게</option>
            <option value="15px">보통</option>
            <option value="25px">넓게</option>
          </SelectBox>
        </StyleRow>
        <StyleRow>
          <StyleRowText>좌우 여백</StyleRowText>
          <SelectBox
            name="paddingLeftRight"
            value={boxStyle.paddingLeftRight}
            onChange={e => handleBoxStyleChange(e)}
          >
            <option value="0px">없음</option>
            <option value="5px">좁게</option>
            <option value="15px">보통</option>
            <option value="25px">넓게</option>
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
