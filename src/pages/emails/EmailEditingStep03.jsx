import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import LeftNav from '../../components/emailEditingStep03/LeftNav';
import TextContent from '../../components/emailEditingStep03/TextContent';
import ContentWrapper from '../../components/emailEditingStep03/contentWrapper';
import { dataToComponent } from '../../utils/emailEditing';

const emailTemplateData = {
  emailBodyStyle: { backgroundColor: 'gray' },
  emailContainerStyle: {
    backgroundColor: 'white',
    borderWidth: '0px',
    borderColor: 'black',
    borderStyle: 'solid',
  },
  emailContents: [
    {
      id: 'asdf1',
      type: 'spacer',
      boxStyle: {
        backgroundColor: 'green',
        borderWidth: '1px',
        borderColor: 'black',
        borderStyle: 'solid',
        height: '50px',
      },
    },
    {
      id: 'asdf2',
      type: 'divider',
      boxStyle: {
        backgroundColor: 'yellow',
        borderWidth: '0px',
        borderColor: 'black',
        borderStyle: 'solid',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
      contentStyle: {
        height: '1px',
        borderTopWidth: '3px',
        borderTopColor: 'black',
        borderTopStyle: 'solid',
      },
    },
    {
      id: 'asdf3',
      type: 'image',
      link: 'https://beta.reactjs.org/',
      imageSrc:
        'https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      boxStyle: {
        backgroundColor: 'yellow',
        borderWidth: '0px',
        borderColor: 'black',
        borderStyle: 'solid',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'center',
      },
    },
    {
      id: 'asdf4',
      type: 'spacer',
      boxStyle: {
        height: '20px',
        backgroundColor: 'transparent',
        borderWidth: '0px',
        borderColor: 'black',
        borderStyle: 'solid',
      },
    },
  ],
};

export default function EmailEditingStep03() {
  const contents = emailTemplateData.emailContents.map(emailContentData => {
    return (
      <ContentWrapper key={emailContentData.id}>
        {dataToComponent(emailContentData)}
      </ContentWrapper>
    );
  });

  return (
    <>
      <SubNav>
        <Step>구독자</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>발송정보</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>콘텐츠</Step>
      </SubNav>
      <Background>
        <LeftNav />
        <EmailBackground style={emailTemplateData.emailBodyStyle}>
          <EmailContentsList style={emailTemplateData.emailContainerStyle}>
            {contents}
          </EmailContentsList>
        </EmailBackground>
        {/* <EmailBodyTable>
          <SpaceContent />
          {dataToComponent(data[0])}
          <SpaceContent />
        </EmailBodyTable> */}
      </Background>
    </>
  );
}

const SubNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 50px;
  border-bottom: 1px solid #dfe0e4;
  text-align: center;
  color: #bdbdbd;
`;

const Step = styled.span`
  flex: 2;
  &:nth-child(5) {
    font-weight: 500;
    color: black;
  }
`;

const StyledFaAngleRight = styled(FontAwesomeIcon)`
  font-size: 20px;
  flex: 0.5;
`;

const Background = styled.div`
  display: flex;
  height: calc(100vh - 145.5px);
`;

const EmailBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 630px;
  background-color: #f5f5f5;
  overflow-y: auto;
`;

const EmailContentsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 630px;
  min-width: 630px;
  height: max-content;
  margin: 30px 0;
  background-color: white;
`;
