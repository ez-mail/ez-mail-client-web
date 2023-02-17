import React from 'react';
import styled from 'styled-components';

export default function Sender() {
  const handleCodeButtonClick = () => {
    console.log('코드 내보내기 버튼 클릭');
  };

  const handleModifyButtonClick = () => {
    console.log('수정하기 버튼 클릭');
  };

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
          <SenderNameContent>김개똥</SenderNameContent>
          <Spacer />
          <EmailFooterTitle>이메일 푸터 정보</EmailFooterTitle>
          <EmailFooterItemTitle>- 회사명 또는 이름</EmailFooterItemTitle>
          <EmailFooterItemContent>바닐라코딩</EmailFooterItemContent>
          <EmailFooterItemTitle>- 주소</EmailFooterItemTitle>
          <EmailFooterItemContent>
            서울 강남구 테헤란로 522 홍우빌딩 6층
          </EmailFooterItemContent>
          <EmailFooterItemTitle>- 전화번호</EmailFooterItemTitle>
          <EmailFooterItemContent>02-6713-7279</EmailFooterItemContent>
        </SenderInfoContainer>
      </MainContainer>
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

const SenderInfoContainer = styled.main`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: repeat(1fr, 6);
  align-items: center;
  width: 100%;
  height: 296px;
  padding: 30px;
  border: 1px solid #bdbdbd;
`;

const SenderNameTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
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
`;

const EmailFooterItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const EmailFooterItemContent = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
`;
