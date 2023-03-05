import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { fetchUpdateEmail } from '../api/email';
import emailTitleAtom from '../recoil/emailTitle/atom';
import emailTemplateDataAtom from '../recoil/emailTemplate/atom';
import userIdAtom from '../recoil/userId/atom';

export default function EmailEditingNav() {
  const emailTitle = useRecoilValue(emailTitleAtom);
  const userId = useRecoilValue(userIdAtom);
  const param = useParams();
  const emailTemplateData = useRecoilValue(emailTemplateDataAtom);
  const navigate = useNavigate();

  const handleSendButtonClick = () => {
    console.log('메일 발송');
  };

  const handleSaveButtonClick = async () => {
    const emailTemplateObj = {
      emailContent: JSON.stringify(emailTemplateData),
    };

    await fetchUpdateEmail(userId, param.email_id, emailTemplateObj);

    alert('저장되었습니다.');
  };

  const handlePrevButtonClick = async () => {
    const emailTemplateObj = {
      emailContent: JSON.stringify(emailTemplateData),
    };

    await fetchUpdateEmail(userId, param.email_id, emailTemplateObj);

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
