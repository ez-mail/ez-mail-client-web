import React from 'react';

export default function DividerContent({ boxStyle, contentStyle }) {
  return (
    <div style={boxStyle}>
      <div style={contentStyle} />
    </div>
  );
}
