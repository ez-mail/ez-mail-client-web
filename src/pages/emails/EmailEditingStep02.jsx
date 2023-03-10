import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { fetchEmail, fetchUpdateEmail } from '../../api/email';
import EmailBottomButton from '../../components/EmailBottomButton';
import InputText from '../../components/InputText';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import userIdAtom from '../../recoil/userId/atom';
import emailTitleAtom from '../../recoil/emailTitle/atom';
import senderAtom from '../../recoil/sender/atom';

export default function EmailEditingStep02() {
  const navigate = useNavigate();
  const param = useParams();
  const userId = useRecoilValue(userIdAtom);
  const setNavEmailTitle = useSetRecoilState(emailTitleAtom);
  const setSender = useSetRecoilState(senderAtom);
  const [sendingInfo, setSendingInfo] = useState({
    emailTitle: '',
    sender: '',
    emailPreviewText: '',
  });

  const { isLoading, error } = useQuery({
    queryKey: ['userEmailTemplate', userId, param.email_id],
    queryFn: async () => {
      const result = await fetchEmail(userId, param.email_id);

      return result;
    },
    onSuccess: emailTemplateInfoData => {
      const { emailTitle, sender, emailPreviewText } = emailTemplateInfoData;

      setSendingInfo({
        emailTitle,
        sender,
        emailPreviewText,
      });
      setNavEmailTitle(emailTitle);
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  const handlePrevClick = async () => {
    const emailTemplateData = {
      editingStep: '01',
      emailTitle: sendingInfo.emailTitle,
      sender: sendingInfo.sender,
      emailPreviewText: sendingInfo.emailPreviewText,
    };

    await fetchUpdateEmail(userId, param.email_id, emailTemplateData);

    navigate(`/emails/${param.email_id}/step01`);
  };

  const handleNextClick = async () => {
    const emailTemplateData = {
      editingStep: '03',
      emailTitle: sendingInfo.emailTitle,
      sender: sendingInfo.sender,
      emailPreviewText: sendingInfo.emailPreviewText,
    };

    await fetchUpdateEmail(userId, param.email_id, emailTemplateData);

    navigate(`/emails/${param.email_id}/step03`);
  };

  const handleInputChange = e => {
    const newSendingInfo = {
      ...sendingInfo,
      [e.target.name]: e.target.value,
    };

    if (e.target.name === 'emailTitle') {
      setNavEmailTitle(e.target.value);
    }
    if (e.target.name === 'sender') {
      setSender(e.target.value);
    }

    setSendingInfo(newSendingInfo);
  };

  return (
    <>
      <SubNav>
        <Step>?????????</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>????????????</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>?????????</Step>
      </SubNav>
      <section>
        <MainContainer>
          <Title>??????????????? ???????????????</Title>
          <InputText
            id="emailTitle"
            paddingBottom="50px"
            width="520px"
            inputValue={sendingInfo.emailTitle}
            onChange={handleInputChange}
          >
            ????????? ??????
          </InputText>
          <InputText
            id="sender"
            inputValue={sendingInfo.sender}
            onChange={handleInputChange}
            paddingBottom="50px"
            width="520px"
          >
            ????????? ??????
          </InputText>
          {/* <InputText
            id="emailPreviewText"
            inputValue={sendingInfo.emailPreviewText}
            onChange={handleInputChange}
            paddingBottom="50px"
            width="520px"
            placeholder="???????????? ????????? ????????? ???????????? ???????????????."
          >
            ???????????? ?????????
          </InputText> */}
        </MainContainer>
      </section>
      <BottomButtons>
        <EmailBottomButton onClick={handlePrevClick}>??????</EmailBottomButton>
        <EmailBottomButton onClick={handleNextClick}>??????</EmailBottomButton>
      </BottomButtons>
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
  &:nth-child(3) {
    font-weight: 500;
    color: black;
  }
`;

const StyledFaAngleRight = styled(FontAwesomeIcon)`
  font-size: 20px;
  flex: 0.5;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`;

const Title = styled.span`
  padding: 38px 0;
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 500;
`;

const BottomButtons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
`;
