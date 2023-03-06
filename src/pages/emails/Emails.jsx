import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import {
  fetchEmails,
  fetchCreateEmail,
  fetchDeleteEmail,
} from '../../api/email';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import userIdAtom from '../../recoil/userId/atom';
import { getKoreaDateString } from '../../utils/dashboard';

export default function Emails() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);
  const [emailTemplates, setEmailTemplates] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  const { isLoading, error } = useQuery({
    queryKey: ['userEmailTemplates', userId, updateCount],
    queryFn: async () => {
      const result = await fetchEmails(userId);

      return result;
    },
    onSuccess: emailTemplatesInfoData => {
      setEmailTemplates(emailTemplatesInfoData);
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  const handleNewEmailButtonClick = async () => {
    const emailId = await fetchCreateEmail(userId);

    navigate(`/emails/${emailId.emailTemplateId}/step01`);
  };

  const handleSentEmailItemClick = emailId => {
    navigate(`/emails/${emailId}/dashboard`);
  };

  const handleDeleteButtonClick = async emailId => {
    const result = await fetchDeleteEmail(userId, emailId);

    if (result === 200) {
      alert('이메일 삭제 성공');
    } else {
      alert('문제발생');
    }

    setUpdateCount(updateCount + 1);
  };

  const handleEmailTemplateClick = (emailId, editingStep) => {
    navigate(`/emails/${emailId}/step${editingStep}`);
  };

  const emailTemplatesList = emailTemplates
    .sort((prev, cur) => {
      if (prev.editingStep === '04') return 1;
      if (prev.editingStep !== '04') return -1;
      if (prev.updatedAt > cur.updatedAt) return -1;
      if (prev.updatedAt < cur.updatedAt) return 1;

      return 0;
    })
    .map(item => {
      if (item.editingStep === '04') {
        return (
          <ContentRow key={item._id}>
            <LeftContent>
              <StyledFaCircleCheck icon={faCheckCircle} />
              발송완료
            </LeftContent>
            <EmailTemplateData
              onClick={() => handleSentEmailItemClick(item._id)}
              cursor="pointer"
            >
              <EmailTemplateTitle>{item.emailTitle}</EmailTemplateTitle>
              <LastEditDate>
                마지막 편집일{' '}
                <Dates>{getKoreaDateString(item.updatedAt)}</Dates>
              </LastEditDate>
            </EmailTemplateData>
            <RightContent>
              <StyledFaTrash
                icon={faTrash}
                onClick={() => handleDeleteButtonClick(item._id)}
              />
            </RightContent>
          </ContentRow>
        );
      }

      return (
        <ContentRow key={item._id}>
          <LeftContent>
            <StyledFaPenToSquare icon={faPenToSquare} />
            작성중
          </LeftContent>
          <EmailTemplateData
            onClick={() => handleEmailTemplateClick(item._id, item.editingStep)}
            cursor="pointer"
          >
            <EmailTemplateTitle>{item.emailTitle}</EmailTemplateTitle>
            <LastEditDate>
              마지막 편집일 <Dates>{getKoreaDateString(item.updatedAt)}</Dates>
            </LastEditDate>
          </EmailTemplateData>
          <RightContent>
            <StyledFaTrash
              icon={faTrash}
              onClick={() => handleDeleteButtonClick(item._id)}
            />
          </RightContent>
        </ContentRow>
      );
    });

  return (
    <section>
      <MainContainer>
        <Title>이메일</Title>
        <ContainerNav>
          <NewEmailButton onClick={handleNewEmailButtonClick}>
            새로 만들기
          </NewEmailButton>
        </ContainerNav>
        <ContentRows>{emailTemplatesList}</ContentRows>
      </MainContainer>
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`;

const ContentRows = styled.ul`
  overflow: auto;
  width: 1000px;
  height: 440px;
  margin: auto;
`;

const Title = styled.span`
  padding: 38px 0;
  font-size: 28px;
  font-weight: 500;
`;

const ContainerNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #b5acac;
`;

const NewEmailButton = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-size: 14px;
  font-weight: 500;
`;

const ContentRow = styled.li`
  display: flex;
  height: 80px;
  border-bottom: 1px solid #b5acac;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
  text-align: center;
  gap: 10px;
`;

const EmailTemplateData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 860px;
  gap: 10px;
  cursor: ${props => props.cursor};
`;

const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70px;
  margin-right: 15px;
`;

const StyledFaCircleCheck = styled(FontAwesomeIcon)`
  height: 30px;
  color: #3e81f6;
`;

const StyledFaPenToSquare = styled(FontAwesomeIcon)`
  height: 30px;
  color: #ffdf2b;
`;

const EmailTemplateTitle = styled.div`
  font-size: 18px;
`;

const LastEditDate = styled.div`
  font-size: 12px;
`;

const Dates = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: 11px;
`;

const StyledFaTrash = styled(FontAwesomeIcon)`
  height: 18px;
  cursor: pointer;
`;
