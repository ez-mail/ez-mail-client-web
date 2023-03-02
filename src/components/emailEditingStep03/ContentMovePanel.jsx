import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsUpDownLeftRight,
  faClone,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

export default function ContentMovePanel({ onDraggable, onDelete, onCopy }) {
  return (
    <ControlBox draggable={false}>
      <StyledIcon icon={faArrowsUpDownLeftRight} onMouseDown={onDraggable} />
      <StyledIcon icon={faClone} onClick={onCopy} />
      <StyledIcon icon={faTrashCan} onClick={onDelete} />
    </ControlBox>
  );
}

const ControlBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: -60px;
  width: 50px;
  padding: 5px 10px;
  background-color: #ffffff;
  gap: 8px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
  &:hover {
    background-color: #f5f5f5;
  }
  &:nth-child(1) {
    cursor: grab;
  }
  &:nth-child(2) {
    cursor: pointer;
  }
  &:nth-child(3) {
    cursor: pointer;
    color: #f44336;
  }
`;
