import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import imageStyleAtom from '../../../recoil/imageStyle/atom';

export default function ImageContainer() {
  const [imageStyle, setImageStyle] = useRecoilState(imageStyleAtom);

  const handleContentStyleChange = e => {
    const newContentStyle = {
      ...imageStyle,
      contentStyle: {
        [e.target.name]: e.target.value,
      },
    };

    setImageStyle(newContentStyle);
  };

  const handleBoxStyleChange = e => {
    const newBoxStyle = {
      ...imageStyle,
      boxStyle: {
        [e.target.name]: e.target.value,
      },
    };

    setImageStyle(newBoxStyle);
  };

  return (
    <>
      <StyleBox>
        <StyleRow>
          <StyleRowText>크기</StyleRowText>
          <SelectBox
            name="width"
            value={imageStyle.boxStyle.width}
            onChange={e => handleContentStyleChange(e)}
          >
            <option value="">설정안함</option>
            <option value="100px">100px</option>
            <option value="200px">200px</option>
            <option value="300px">300px</option>
            <option value="400px">400px</option>
            <option value="500px">500px</option>
            <option value="600px">600px</option>
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
            value={imageStyle.boxStyle.backgroundColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>배경 테두리</StyleRowText>
          <SelectBox
            name="borderWidth"
            value={imageStyle.boxStyle.borderWidth}
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
            value={imageStyle.boxStyle.borderColor}
            onChange={e => handleBoxStyleChange(e)}
          />
        </StyleRow>
        <StyleRow>
          <StyleRowText>테두리 스타일</StyleRowText>
          <SelectBox
            name="borderStyle"
            value={imageStyle.boxStyle.borderStyle}
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
            value={imageStyle.boxStyle.paddingTop}
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
            value={imageStyle.boxStyle.paddingBottom}
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
            value={imageStyle.boxStyle.paddingLeft}
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
            value={imageStyle.boxStyle.paddingRight}
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
            value={imageStyle.boxStyle.textAlign}
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
