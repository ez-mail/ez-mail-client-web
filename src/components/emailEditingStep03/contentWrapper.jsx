import React from 'react';
import styled from 'styled-components';

export default function ContentWrapper({
  id,
  children,
  isDraggable,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDragEnd,
  onDrop,
  onFocus,
  onBlur,
}) {
  return (
    <Wrapper
      key={id}
      id={id}
      tabIndex={0}
      draggable={isDraggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  &:hover {
    z-index: 1;
    outline: 2px solid #ffdf2b;
  }

  &:focus {
    z-index: 1;
    outline: 2px solid #ffdf2b;
  }
`;
