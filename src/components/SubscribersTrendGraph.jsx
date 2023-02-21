import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fetchSubscriberTrend } from '../api/subscriber';

import userIdAtom from '../recoil/userId/atom';
import { getRefinedTrendData } from '../utils/dashboard';
import Loading from './Loading';
import Error from './Error';

export default function SubscribersTrendGraph() {
  const userId = useRecoilValue(userIdAtom);
  const {
    isLoading,
    error,
    data: trendData,
  } = useQuery({
    queryKey: ['subscribersTrend', userId],
    queryFn: async () => {
      const data = await fetchSubscriberTrend(userId);

      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  const subscriberTrendList = getRefinedTrendData(trendData).map(item => {
    return (
      <Li
        key={item[2] + item[1]}
        count={item[0]}
        height={item[1]}
        date={item[2]}
      />
    );
  });

  return <Ul>{subscriberTrendList}</Ul>;
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  height: 260px;
  margin-bottom: 100px;
  border: 1px solid #b5acac;
`;

const Li = styled.li`
  width: 30px;
  height: ${props => props.height}%;
  background-color: #ffdf2b;

  &:before {
    position: relative;
    top: -30px;
    display: block;
    text-align: center;
    font-weight: 400;
    content: '${props => props.count}';
  }

  &:after {
    position: relative;
    display: block;
    top: 100%;
    left: -14px;
    width: 100px;
    font-weight: 400;
    content: '${props => props.date}';
  }
`;
