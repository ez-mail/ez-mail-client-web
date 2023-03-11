import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { removeProperties } from '../utils/dragAndDrop';
import { fetchSendEmail, fetchUpdateEmail } from '../api/email';
import emailTitleAtom from '../recoil/emailTitle/atom';
import emailTemplateDataAtom from '../recoil/emailTemplate/atom';
import userIdAtom from '../recoil/userId/atom';
import { getEmailHtml } from '../utils/emailEditing';

export default function EmailEditingNav() {
  const emailTitle = useRecoilValue(emailTitleAtom);
  const userId = useRecoilValue(userIdAtom);
  const param = useParams();
  const emailTemplateData = useRecoilValue(emailTemplateDataAtom);
  const navigate = useNavigate();

  const handleSendButtonClick = async () => {
    const newEmailTemplateData = { ...emailTemplateData };

    const removedPropertiesEmailContents = removeProperties(
      emailTemplateData.emailContents,
    );

    newEmailTemplateData.emailContents = removedPropertiesEmailContents;

    const updatedEmailData = {
      emailContent: getEmailHtml(newEmailTemplateData),
      editingStep: '04',
    };

    const emailSaveStatus = await fetchUpdateEmail(
      userId,
      param.email_id,
      updatedEmailData,
    );

    if (emailSaveStatus === 200) {
      const emailSendStatus = await fetchSendEmail(userId, param.email_id);

      if (emailSendStatus === 200) {
        return navigate(`/emails/${param.email_id}/step04`);
      }

      alert('메일 전송 요청을 실패했습니다. 잠시후에 다시 시도해주세요.');
    } else {
      alert(
        '메일 저장을 실패하여 전송 요청을 하지 못했습니다. 잠시후에 다시 시도해주세요.',
      );
    }
  };

  const handleSaveButtonClick = async () => {
    const newEmailTemplateData = { ...emailTemplateData };

    const removedPropertiesEmailContents = removeProperties(
      emailTemplateData.emailContents,
    );

    newEmailTemplateData.emailContents = removedPropertiesEmailContents;

    const updatedEmailData = {
      emailContent: JSON.stringify(newEmailTemplateData),
    };

    await fetchUpdateEmail(userId, param.email_id, updatedEmailData);

    alert('저장되었습니다.');
  };

  const handlePrevButtonClick = async () => {
    const newEmailTemplateData = { ...emailTemplateData };

    const removedPropertiesEmailContents = removeProperties(
      emailTemplateData.emailContents,
    );

    newEmailTemplateData.emailContents = removedPropertiesEmailContents;

    const updatedEmailData = {
      emailTitle,
      emailContent: JSON.stringify(newEmailTemplateData),
    };

    await fetchUpdateEmail(userId, param.email_id, updatedEmailData);

    navigate('/dashboard');
  };

  return (
    <Nav>
      <Prev onClick={handlePrevButtonClick}>
        <StyledFaAngleLeft icon={faAngleLeft} />
      </Prev>
      <EmailTitle>{emailTitle}</EmailTitle>
      <Save onClick={handleSaveButtonClick}>저장하기</Save>
      <Send onClick={handleSendButtonClick}>발송하기</Send>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76.5px;
  border-bottom: 1px solid #dfe0e4;
`;

const Prev = styled.button`
  height: 100%;
  margin-right: 20px;
  padding: 0 20px;
  background-color: #ffdf2b;
`;

const EmailTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  flex: 1;
`;

const Save = styled.button`
  margin-right: 10px;
  padding: 10px 14px;
  border-radius: 5px;
  background-color: black;
  color: #ffdf2b;
`;

const Send = styled.button`
  margin-right: 34px;
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
`;

const StyledFaAngleLeft = styled(FontAwesomeIcon)`
  font-size: 30px;
`;
