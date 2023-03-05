import React, { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

import ButtonContent from '../components/emailEditingStep03/ButtonContent';
import DividerContent from '../components/emailEditingStep03/DividerContent';
import ImageContent from '../components/emailEditingStep03/ImageContent';
import SpacerContent from '../components/emailEditingStep03/SpacerContent';
import TextContent from '../components/emailEditingStep03/TextContent';

export function dataToComponent(data, index) {
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
          index={index}
        />
      );
    case 'text':
      return (
        <TextContent
          boxStyle={data.boxStyle}
          contentStyle={data.contentStyle}
          index={index}
        />
      );
    default:
      console.log('해당 타입이 없습니다.');
  }
}

function dataToEmailComponent(data) {
  switch (data.type) {
    case 'spacer':
      return (
        <tr>
          <td align="center" valign="top">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={data.boxStyle}
            />
          </td>
        </tr>
      );
    case 'divider':
      return (
        <tr>
          <td align="center" valign="top">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={data.boxStyle}
            >
              <tr>
                <td align="center" valign="top" style={data.contentStyle} />
              </tr>
            </table>
          </td>
        </tr>
      );
    case 'image':
      return (
        <tr>
          <td align="center" valign="top">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={data.boxStyle}
            >
              <tr>
                <td valign="top">
                  <a href={data.link}>
                    <img
                      alt="userImg"
                      src={data.imageSrc}
                      style={data.contentStyle}
                    />
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      );
    case 'button':
      return (
        <tr>
          <td align="center" valign="top">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={data.boxStyle}
            >
              <tr>
                <td valign="top">
                  <a href={data.link} style={data.contentStyle}>
                    {data.content}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      );
    case 'text':
      return (
        <tr>
          <td align="center" valign="top">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={data.boxStyle}
            >
              <tr>
                <td
                  valign="top"
                  style={data.contentStyle}
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </tr>
            </table>
          </td>
        </tr>
      );
    default:
      console.log('해당 타입이 없습니다.');
  }
}

function dataToEmailTemplate(emailTemplateData) {
  const contents = emailTemplateData.emailContents.map(contentData => {
    return (
      <Fragment key={contentData.id}>
        {dataToEmailComponent(contentData)}
      </Fragment>
    );
  });

  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      height="100%"
      width="100%"
      id="bodyTable"
      style={emailTemplateData.emailBodyStyle}
    >
      <tr>
        <td align="center" valign="top">
          <table
            border="0"
            cellPadding="0"
            cellSpacing="0"
            width="600"
            id="emailContainer"
            style={emailTemplateData.emailContainerStyle}
          >
            {contents}
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
                    <td
                      align="center"
                      valign="top"
                      style={emailTemplateData.emailFooter.boxStyle}
                    >
                      <div>
                        {emailTemplateData.emailFooter.companyOrUserName}
                      </div>
                      <div>{emailTemplateData.emailFooter.contact}</div>
                      <div>{emailTemplateData.emailFooter.address}</div>
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

export function getEmailHtml(data) {
  const emailHtml = ReactDOMServer.renderToStaticMarkup(
    dataToEmailTemplate(data),
  );

  return emailHtml;
}
