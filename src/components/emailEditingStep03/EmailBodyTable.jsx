import React, { useState } from 'react';

export default function EmailBodyTable({ children }) {
  const [emailBodyStyle, setEmailBodyStyle] = useState({
    backgroundColor: 'orange',
  });
  const [emailTemplateStyle, setEmailTemplateStyle] = useState({
    backgroundColor: 'green',
  });

  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      height="100%"
      width="100%"
      id="bodyTable"
      style={emailBodyStyle}
    >
      <tr>
        <td align="center" valign="top">
          <table
            border="0"
            cellPadding="0"
            cellSpacing="0"
            width="600"
            id="emailContainer"
            style={emailTemplateStyle}
          >
            {children}
          </table>
        </td>
      </tr>
    </table>
  );
}
