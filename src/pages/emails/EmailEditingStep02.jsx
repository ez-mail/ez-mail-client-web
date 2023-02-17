import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import EmailBottomButton from '../../components/EmailBottomButton';
import InputText from '../../components/InputText';

export default function EmailEditingStep02() {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    console.log('이메일 수정 api 실행');
    const emailId = 'test';
    navigate(`/emails/${emailId}/step01`);
  };

  const handleNextClick = () => {
    console.log('이메일 수정 api 실행');
    const emailId = 'test';
    navigate(`/emails/${emailId}/step03`);
  };

  return (
    <>
      <SubNav>
        <Step>구독자</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>발송정보</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>콘텐츠</Step>
      </SubNav>
      <section>
        <MainContainer>
          <Title>발송정보를 입력하세요</Title>
          <InputText paddingBottom="50px" width="520px">
            이메일 제목
          </InputText>
          <InputText paddingBottom="50px" width="520px">
            발신자 이름
          </InputText>
          <InputText
            paddingBottom="50px"
            width="520px"
            placeholder="빈값일시 콘텐츠 일부가 자동으로 보여집니다."
          >
            미리보기 텍스트
          </InputText>
        </MainContainer>
      </section>
      <BottomButtons>
        <EmailBottomButton onClick={handlePrevClick}>이전</EmailBottomButton>
        <EmailBottomButton onClick={handleNextClick}>다음</EmailBottomButton>
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
