import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPenToSquare,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const emailTemplatesData = [
  {
    _id: '12315',
    editingStep: 1,
    emailTitle: '이메일 테스트1',
    updatedAt: '2023. 02. 14 오후 2:00',
  },
  {
    _id: '12316',
    editingStep: '04',
    emailTitle: '이메일 테스트2',
    updatedAt: '2023. 02. 14 오후 2:00',
  },
  {
    _id: '12317',
    editingStep: '01',
    emailTitle: '이메일 테스트3',
    updatedAt: '2023. 02. 14 오후 2:00',
  },
  {
    _id: '12318',
    editingStep: '01',
    emailTitle: '이메일 테스트4',
    updatedAt: '2023. 02. 11 오후 2:00',
  },
  {
    _id: '12319',
    editingStep: '03',
    emailTitle: '이메일 테스트6',
    updatedAt: '2023. 01. 11 오후 2:00',
  },
  {
    _id: '12320',
    editingStep: '03',
    emailTitle: '이메일 테스트4',
    updatedAt: '2023. 02. 11 오후 2:00',
  },
  {
    _id: '12321',
    editingStep: '04',
    emailTitle: '이메일 테스트4',
    updatedAt: '2023. 02. 01 오후 1:00',
  },
];

export default function Emails() {
  const navigate = useNavigate();

  const handleNewEmailButtonClick = () => {
    console.log('이메일 생성 api 실행');
    const emailId = 'test';
    navigate(`/emails/${emailId}/step01`);
  };

  const emailTemplatesList = emailTemplatesData
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
            <EmailTemplateData>
              <EmailTemplateTitle>{item.emailTitle}</EmailTemplateTitle>
              <LastEditDate>
                마지막 편집일 <Dates>{item.updatedAt}</Dates>
              </LastEditDate>
            </EmailTemplateData>
            <RightContent>
              <StyledFaTrash icon={faTrash} />
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
          <EmailTemplateData>
            <EmailTemplateTitle>{item.emailTitle}</EmailTemplateTitle>
            <LastEditDate>
              마지막 편집일 <Dates>{item.updatedAt}</Dates>
            </LastEditDate>
          </EmailTemplateData>
          <RightContent>
            <StyledFaPencil icon={faPencil} />
            <StyledFaTrash icon={faTrash} />
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
  height: 640px;
  margin: auto;
`;

const ContentRows = styled.ul`
  overflow: auto;
  width: 1000px;
  height: 640px;
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
  height: 70px;
  border-bottom: 2px solid #b5acac;
`;

const NewEmailButton = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
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

const StyledFaPencil = styled(FontAwesomeIcon)`
  height: 18px;
  margin-right: 15px;
  cursor: pointer;
`;

const StyledFaTrash = styled(FontAwesomeIcon)`
  height: 18px;
  cursor: pointer;
`;
