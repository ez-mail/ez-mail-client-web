import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { fetchSendingInfo, updateSendingInfo } from '../api/user';
import userIdAtom from '../recoil/userId/atom';
import Loading from '../components/Loading';
import Error from '../components/Error';

import InputTextSenderName from '../components/DesignedComponents/InputTextSenderName';
import InputTextFooter from '../components/DesignedComponents/InputTextFooter';
import YellowButton from '../components/DesignedComponents/YellowButton';
import BlackButton from '../components/DesignedComponents/BlackButton';

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

  const { isLoading, error, data } = useQuery({
    queryKey: ['senderData', userId, updateCount],
    queryFn: async () => {
      const result = await fetchSendingInfo(userId);

      return result;
    },
    onSuccess: senderInfoData => {
      const { userName, companyName, address, contact } = senderInfoData;

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
    navigate('/sender/cdnCode', {
      state: {
        userCdnCode: data.cdnCode,
      },
    });
  };

  const handleOriginButtonClick = () => {
    navigate('/sender/origin');
  };

  const handleModifyButtonClick = () => {
    setIsEditMode(true);
  };

  const handleSaveButtonClick = async () => {
    const status = await updateSendingInfo(userId, senderInfo);

    if (status === 200) {
      alert('성공적으로 수정했습니다 🙂');

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
            <BlackButton onClick={handleSaveButtonClick}>저장하기</BlackButton>
          </ButtonContainer>
          <SenderInfoContainer>
            <SenderNameTitle>발신자 이름</SenderNameTitle>
            <InputTextSenderName
              id="userName"
              name="userName"
              value={senderInfo.userName}
              onChange={handleInputChange}
            />
            <Spacer />
            <EmailFooterTitle>이메일 푸터 정보</EmailFooterTitle>
            <EmailFooterItemTitle>- 회사명 또는 이름</EmailFooterItemTitle>
            <InputTextFooter
              id="companyName"
              name="companyName"
              value={senderInfo.companyName}
              onChange={handleInputChange}
            />
            <EmailFooterItemTitle>- 주소</EmailFooterItemTitle>
            <InputTextFooter
              id="address"
              name="address"
              value={senderInfo.address}
              onChange={handleInputChange}
            />
            <EmailFooterItemTitle>- 전화번호</EmailFooterItemTitle>
            <InputTextFooter
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
          <YellowButton onClick={handleOriginButtonClick}>
            오리진 추가하기
          </YellowButton>
          <YellowButton onClick={handleCodeButtonClick}>
            코드 내보내기
          </YellowButton>
          <YellowButton onClick={handleModifyButtonClick}>
            수정하기
          </YellowButton>
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
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  gap: 10px;
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
  height: 20px;
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
  height: 20px;
`;
