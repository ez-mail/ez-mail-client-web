import React, { useState } from 'react';
import styled from 'styled-components';
import BoxTool from './BoxTool';
import StyleTool from './StyleTool';

export default function LeftNav() {
  const [isBoxMode, setIsBoxMode] = useState(true);

  const handleBoxClick = () => {
    setIsBoxMode(true);
  };

  const handleStyleClick = () => {
    setIsBoxMode(false);
  };

  return (
    <LeftToolContainer>
      <ModeContainer>
        <Mode isBlack={isBoxMode} onClick={handleBoxClick}>
          상자
        </Mode>
        <Mode isBlack={!isBoxMode} onClick={handleStyleClick}>
          스타일
        </Mode>
      </ModeContainer>
      {isBoxMode ? <BoxTool /> : <StyleTool />}
    </LeftToolContainer>
  );
}

const LeftToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  min-width: 320px;
  height: 100vh;
  background-color: white;
  box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.05);
`;

const ModeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;

const Mode = styled.div`
  width: 50px;
  margin: 15px;
  border-bottom: 1px solid ${props => (props.isBlack ? 'black' : '#bdbdbd')};
  padding-bottom: 2px;
  text-align: center;
  font-size: 0.875rem;
  color: ${props => (props.isBlack ? 'black' : '#bdbdbd')};
  cursor: pointer;
`;
