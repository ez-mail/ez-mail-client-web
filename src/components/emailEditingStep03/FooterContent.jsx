import React from 'react';

export default function FooterContent({
  style,
  companyOrUserName,
  contact,
  address,
}) {
  return (
    <div style={style}>
      <div>{companyOrUserName}</div>
      <div>{contact}</div>
      <div>{address}</div>
    </div>
  );
}
