import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { fetchSendingInfo, updateSendingInfo } from '../api/user';
import userIdAtom from '../recoil/userId/atom';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Sender() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const [senderInfo, setSenderInfo] = useState({
    userName: '',
    companyName: '',
    address: '',
    contact: '',
  });
  const { isLoading, error } = useQuery({
    queryKey: ['senderData', userId, updateCount],
    queryFn: async () => {
      const result = await fetchSendingInfo(userId);

      return result;
    },
    onSuccess: data => {
      const { userName, companyName, address, contact } = data;

      setSenderInfo({
        userName,
        companyName,
        address,
        contact,
      });
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  const handleCodeButtonClick = () => {
    navigate('/sender/cdnCode');
  };

  const handleModifyButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSaveButtonClick = async () => {
    const status = await updateSendingInfo(userId, senderInfo);

    if (status === 200) {
      alert('성공적으로 수정');

      setIsEditMode(false);
      setUpdateCount(updateCount + 1);
    } else {
      alert('문제 발생 다시 시도해주세요');
    }
  };

  const handleInputChange = e => {
    const newSenderInfo = {
      ...senderInfo,
      [e.target.name]: e.target.value,
    };

    setSenderInfo(newSenderInfo);
  };

  if (isEditMode) {
    return (
      <section>
        <MainContainer>
          <Title>발신자 설정</Title>
          <ButtonContainer>
            <SaveButton onClick={handleSaveButtonClick}>저장하기</SaveButton>
          </ButtonContainer>
          <SenderInfoContainer>
            <SenderNameTitle>발신자 이름</SenderNameTitle>
            <SenderNameInput
              type="text"
              id="userName"
              name="userName"
              value={senderInfo.userName}
              onChange={handleInputChange}
            />
            <Spacer />
            <EmailFooterTitle>이메일 푸터 정보</EmailFooterTitle>
            <EmailFooterItemTitle>- 회사명 또는 이름</EmailFooterItemTitle>
            <FooterInput
              type="text"
              id="companyName"
              name="companyName"
              value={senderInfo.companyName}
              onChange={handleInputChange}
            />
            <EmailFooterItemTitle>- 주소</EmailFooterItemTitle>
            <FooterInput
              type="text"
              id="address"
              name="address"
              value={senderInfo.address}
              onChange={handleInputChange}
            />
            <EmailFooterItemTitle>- 전화번호</EmailFooterItemTitle>
            <FooterInput
              type="text"
              id="contact"
              name="contact"
              value={senderInfo.contact}
              onChange={handleInputChange}
            />
          </SenderInfoContainer>
        </MainContainer>
      </section>
    );
  }

  return (
    <section>
      <MainContainer>
        <Title>발신자 설정</Title>
        <ButtonContainer>
          <CodeButton onClick={handleCodeButtonClick}>코드 내보내기</CodeButton>
          <EditButton onClick={handleModifyButtonClick}>수정하기</EditButton>
        </ButtonContainer>
        <SenderInfoContainer>
          <SenderNameTitle>발신자 이름</SenderNameTitle>
          <SenderNameContent>{senderInfo.userName}</SenderNameContent>
          <Spacer />
          <EmailFooterTitle>이메일 푸터 정보</EmailFooterTitle>
          <EmailFooterItemTitle>- 회사명 또는 이름</EmailFooterItemTitle>
          <EmailFooterItemContent>
            {senderInfo.companyName}
          </EmailFooterItemContent>
          <EmailFooterItemTitle>- 주소</EmailFooterItemTitle>
          <EmailFooterItemContent>{senderInfo.address}</EmailFooterItemContent>
          <EmailFooterItemTitle>- 전화번호</EmailFooterItemTitle>
          <EmailFooterItemContent>{senderInfo.contact}</EmailFooterItemContent>
        </SenderInfoContainer>
      </MainContainer>
      <Outlet />
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 680px;
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

const CodeButton = styled.button`
  margin-right: 10px;
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-size: 14px;
  font-weight: 500;
`;

const EditButton = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
  font-size: 0.875rem;
  font-weight: 500;
`;

const SaveButton = styled.button`
  padding: 10px 14px;
  border-radius: 5px;
  background-color: black;
  color: #ffdf2b;
  font-size: 0.875rem;
  font-weight: 500;
`;

const SenderInfoContainer = styled.main`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 1fr 30px repeat(1fr, 4);
  align-items: center;
  width: 100%;
  height: 296px;
  padding: 30px;
  border: 1px solid #bdbdbd;
`;

const SenderNameTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  color: #757575;
`;

const SenderNameContent = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;

const Spacer = styled.div`
  grid-column: 1 / -1;
`;

const EmailFooterTitle = styled.div`
  grid-column: 1 / -1;
  font-size: 1.125rem;
  font-weight: 500;
  color: #757575;
`;

const EmailFooterItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #757575;
`;

const EmailFooterItemContent = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
`;

const SenderNameInput = styled.input`
  position: relative;
  left: -4px;
  width: 50%;
  height: 18px;
  font-size: 1rem;
`;

const FooterInput = styled.input`
  position: relative;
  top: 1px;
  left: -4px;
  width: 50%;
  height: 16px;
  font-size: 0.875rem;
`;
