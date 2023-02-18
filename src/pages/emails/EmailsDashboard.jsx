import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  getKoreaDateString,
  getOpenMailPercentage,
  getSuccessPercentage,
} from '../../utils/dashboard';

// 임시 데이터
const emailData = {
  _id: '12315',
  editingStep: 4,
  emailTitle: '테스트 제목',
  emailContent: '<h1>테스트 이메일 입니다<h1>',
  sender: '홍길동',
  emailPreviewText: '테스트 이메일 미리보기',
  recipients: [
    {
      email: 'asdf@asdf.com',
      name: '길홍동',
      adAgreement: true,
      isEmailOpen: false,
    },
    {
      email: 'zxcv@asdf.com',
      name: '홍길',
      adAgreement: true,
      isEmailOpen: true,
    },
    {
      email: 'qwer@asdf.com',
      name: '동길',
      adAgreement: true,
      isEmailOpen: true,
    },
  ],
  totalSendCount: 3,
  successSendCount: 3,
  startSendDate: new Date(`2023/02/13`),
  endSendDate: new Date('2023/02/14'),
};

export default function EmailsDashboard() {
  const navigate = useNavigate();
  const params = useParams();

  const handleRecipientsButtonClick = () => {
    navigate(`/emails/${params.email_id}/dashboard/recipients`);
  };

  return (
    <section>
      <MainContainer>
        <Title>이메일 정보</Title>
        <ButtonContainer>
          <RecipientsButton onClick={handleRecipientsButtonClick}>
            수신자 목록
          </RecipientsButton>
        </ButtonContainer>
        <EmailInfoContainer>
          <EmailInfoTitle>이메일 제목</EmailInfoTitle>
          <EmailInfoContent>{emailData.emailTitle}</EmailInfoContent>
          <EmailInfoTitle>이메일 URL</EmailInfoTitle>
          <EmailInfoContent>https://ez-mail.com/ABCd</EmailInfoContent>
          <EmailInfoTitle>발신자 이름</EmailInfoTitle>
          <EmailInfoContent>{emailData.sender}</EmailInfoContent>
          <EmailInfoTitle>발송시작일</EmailInfoTitle>
          <EmailInfoContent>
            {getKoreaDateString(emailData.startSendDate)}
          </EmailInfoContent>
          <EmailInfoTitle>발신자 이메일 주소</EmailInfoTitle>
          <EmailInfoContent>abcd@abcd.com</EmailInfoContent>
          <EmailInfoTitle>발송완료일</EmailInfoTitle>
          <EmailInfoContent>
            {getKoreaDateString(emailData.endSendDate)}
          </EmailInfoContent>
        </EmailInfoContainer>
        <SmallTitle>발송정보</SmallTitle>
        <PercentInfoBox>
          <LeftPercentBox>
            <PercentTitleText>발송성공</PercentTitleText>
            <PercentNumberText>
              {getSuccessPercentage(emailData)}
            </PercentNumberText>
          </LeftPercentBox>
          <RightPercentBox>
            <PercentTitleText>오픈</PercentTitleText>
            <PercentNumberText inputColor="#ffdf2b">
              {getOpenMailPercentage(emailData)}
            </PercentNumberText>
          </RightPercentBox>
        </PercentInfoBox>
      </MainContainer>
      <Outlet />
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 760px;
  margin: auto;
`;

const Title = styled.span`
  padding: 38px 0;
  font-size: 1.75rem;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  padding-bottom: 10px;
  text-align: end;
`;

const RecipientsButton = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-size: 0.875rem;
  font-weight: 500;
`;

const EmailInfoContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 296px;
  margin-bottom: 50px;
  padding: 30px;
  border: 1px solid #bdbdbd;
`;

const EmailInfoTitle = styled.div`
  color: #747579;
  font-size: 1rem;
  font-weight: 400;
`;

const EmailInfoContent = styled.div`
  position: relative;
  left: -50px;
  font-size: 1rem;
  font-weight: 400;
`;

const SmallTitle = styled.span`
  padding-top: 20px;
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: 500;
`;

const PercentInfoBox = styled.div`
  display: flex;
  width: 450px;
  height: 150px;
  margin-bottom: 30px;
`;

const LeftPercentBox = styled.div`
  width: 50%;
  border: 1px solid #b5acac;
`;

const PercentTitleText = styled.div`
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
`;

const PercentNumberText = styled.div`
  padding-top: 4px;
  color: ${props => props.inputColor || 'black'};
  font-size: 50px;
  text-align: center;
`;

const RightPercentBox = styled.div`
  width: 50%;
  border: 1px solid #b5acac;
  border-width: 1px 1px 1px 0px;
`;
