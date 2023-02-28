import React from 'react';

export default function ButtonContent({
  boxStyle,
  contentStyle,
  content,
  link,
}) {
  return (
    <div style={boxStyle}>
      <a style={contentStyle}>{content}</a>
    </div>
  );
}
