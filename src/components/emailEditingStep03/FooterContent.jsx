import React from 'react';

export default function FooterContent() {
  // useQuery 사용해서 사용자 정보 불러온 뒤 정보에 따라 보여주는 로직 필요

  const boxStyle = {
    paddingTop: '25px',
    paddingBottom: '25px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#757575',
    lineHeight: '24px',
  };

  return (
    <div style={boxStyle}>
      <div>바닐라코딩</div>
      <div>010-7184-5902</div>
      <div>서울시 강남구 태해란로 어쩌구 저쩌구</div>
    </div>
  );
}
