import React from 'react';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import userIdAtom from '../recoil/userId/atom';
import { fetchRecentEmail } from '../api/email';
import {
  getOpenMailPercentage,
  getSuccessPercentage,
} from '../utils/dashboard';
import Loading from './Loading';
import Error from './Error';

export default function RecentEmailPercent() {
  const userId = useRecoilValue(userIdAtom);

  const {
    isLoading,
    error,
    data: emailData,
  } = useQuery({
    queryKey: ['recentEmail', userId],
    queryFn: async () => {
      const data = await fetchRecentEmail(userId);

      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  if (emailData === null) {
    return <p>최근 발송한 이메일이 없습니다.</p>;
  }

  return (
    <PercentInfoBox>
      <LeftPercentBox>
        <PercentTitleText>발송성공</PercentTitleText>
        <PercentNumberText>{getSuccessPercentage(emailData)}</PercentNumberText>
      </LeftPercentBox>
      <RightPercentBox>
        <PercentTitleText>오픈</PercentTitleText>
        <PercentNumberText inputColor="#ffdf2b">
          {getOpenMailPercentage(emailData)}
        </PercentNumberText>
      </RightPercentBox>
    </PercentInfoBox>
  );
}

const PercentInfoBox = styled.div`
  display: flex;
  width: 450px;
  height: 150px;
  margin-bottom: 30px;
`;

const LeftPercentBox = styled.div`
  width: 50%;
  border: 1px solid #b5acac;
`;

const PercentTitleText = styled.div`
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
`;

const PercentNumberText = styled.div`
  padding-top: 4px;
  color: ${props => props.inputColor || 'black'};
  font-size: 50px;
  text-align: center;
`;

const RightPercentBox = styled.div`
  width: 50%;
  border: 1px solid #b5acac;
  border-width: 1px 1px 1px 0px;
`;
