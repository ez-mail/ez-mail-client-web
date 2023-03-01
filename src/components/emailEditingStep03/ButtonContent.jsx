import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function ButtonContent({
  boxStyle,
  contentStyle,
  content = '버튼 이름',
  link = '#',
}) {
  const buttonEditor = useRef();
  const [currentContent, setCurrentContent] = useState(content);

  const handleInputChange = e => {
    setCurrentContent(e.target.innerText);
  };

  const handleKeyDown = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    buttonEditor.current.innerText = content;
  }, []);

  return (
    <div style={boxStyle}>
      <Button
        href={link}
        ref={buttonEditor}
        style={contentStyle}
        onInput={handleInputChange}
        onKeyDown={handleKeyDown}
        contentEditable
      />
    </div>
  );
}

const Button = styled.a`
  display: inline-block;
  padding: 16px 18px;

  &:focus {
    outline: none;
  }
`;
