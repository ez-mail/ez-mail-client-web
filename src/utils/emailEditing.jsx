import React from 'react';
import ButtonContent from '../components/emailEditingStep03/ButtonContent';
import DividerContent from '../components/emailEditingStep03/DividerContent';
import ImageContent from '../components/emailEditingStep03/ImageContent';
import SpacerContent from '../components/emailEditingStep03/SpacerContent';

export function dataToComponent(data) {
  switch (data.type) {
    case 'spacer':
      return <SpacerContent boxStyle={data.boxStyle} />;
    case 'divider':
      return (
        <DividerContent
          boxStyle={data.boxStyle}
          contentStyle={data.contentStyle}
        />
      );
    case 'image':
      return (
        <ImageContent
          boxStyle={data.boxStyle}
          contentStyle={data.contentStyle}
          link={data.link}
          imageSrc={data.imageSrc}
        />
      );
    case 'button':
      return (
        <ButtonContent
          boxStyle={data.boxStyle}
          contentStyle={data.contentStyle}
          link={data.link}
          content={data.content}
        />
      );
    default:
      console.log('해당 타입이 없습니다.');
  }
}

export function dataToEmailTemplate(data) {
  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      height="100%"
      width="100%"
      id="bodyTable"
    >
      <tr>
        <td align="center" valign="top">
          <table
            border="0"
            cellPadding="0"
            cellSpacing="0"
            width="600"
            id="emailContainer"
          >
            <tr>
              <td align="center" valign="top">
                <table
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  width="100%"
                  id="emailHeader"
                >
                  <tr>
                    <td align="center" valign="top">
                      This is where my header content goes.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top">
                <table
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  width="100%"
                  id="emailBody"
                >
                  <tr>
                    <td align="center" valign="top">
                      This is where my body content goes.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top">
                <table
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  width="100%"
                  id="emailFooter"
                >
                  <tr>
                    <td align="center" valign="top">
                      This is where my footer content goes.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
