import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function EmailEditingNav() {
  const navigate = useNavigate();
  const emailTitle = '제목없음';
  const handleSendButtonClick = () => {
    console.log('메일 발송');
  };

  const handlePrevButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Nav>
        <Prev onClick={handlePrevButtonClick}>
          <StyledFaAngleLeft icon={faAngleLeft} />
        </Prev>
        <EmailTitle>{emailTitle}</EmailTitle>
        <Send onClick={handleSendButtonClick}>발송하기</Send>
      </Nav>
      <SubNav>
        <Step>구독자</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>발송정보</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>콘텐츠</Step>
      </SubNav>
    </>
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

const Send = styled.button`
  margin-right: 34px;
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #ffdf2b;
`;

const StyledFaAngleLeft = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

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
  &:nth-child(1) {
    font-weight: 500;
    color: black;
  }
`;

const StyledFaAngleRight = styled(FontAwesomeIcon)`
  font-size: 20px;
  flex: 0.5;
`;