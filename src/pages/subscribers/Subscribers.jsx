import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import {
  addIsCheckedProperty,
  removeIsCheckedProperty,
} from '../../utils/subscriber';
import { fetchSubscribers, fetchDeleteSubscribers } from '../../api/subscriber';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import userIdAtom from '../../recoil/userId/atom';
import YellowButton from '../../components/DesignedComponents/YellowButton';

export default function Subscribers() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const [addedIsCheckedSubscribers, setAddedIsCheckedSubscribers] = useState(
    addIsCheckedProperty([]),
  );

  const { isLoading, error } = useQuery({
    queryKey: ['userSubscribers', userId, updateCount],
    queryFn: async () => {
      const result = await fetchSubscribers(userId);

      return result;
    },
    onSuccess: subscribersData => {
      setAddedIsCheckedSubscribers(
        addIsCheckedProperty(subscribersData.subscribers),
      );
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  const handleDeleteSubscriberButtonClick = async () => {
    const checkedRows = addedIsCheckedSubscribers.filter(
      item => item.isChecked,
    );

    const removedIsCheckedSubscribers = removeIsCheckedProperty(checkedRows);
    const subscribersData = {
      subscribers: removedIsCheckedSubscribers,
    };

    const result = await fetchDeleteSubscribers(userId, subscribersData);

    if (result === 200) {
      alert('구독자 삭제 성공');
    } else {
      alert('문제발생');
    }

    setUpdateCount(updateCount + 1);
  };

  const handleNewSubscriberButtonClick = () => {
    navigate(`/subscribers/addition`);
  };

  const handleAllCheckboxChange = async () => {
    const newItems = await addedIsCheckedSubscribers.map(item => ({
      ...item,
      isChecked: !isCheckedAll,
    }));

    setIsCheckedAll(!isCheckedAll);
    setAddedIsCheckedSubscribers(newItems);
  };

  const handleCheckboxChange = async id => {
    const newItems = await addedIsCheckedSubscribers.map(item => {
      if (item._id === id) {
        return { ...item, isChecked: !item.isChecked };
      }

      return item;
    });

    setAddedIsCheckedSubscribers(newItems);
  };

  const tableHead = (
    <tr>
      <td>
        <input type="checkbox" onChange={handleAllCheckboxChange} />
      </td>
      <td>이메일주소</td>
      <td>이름</td>
    </tr>
  );

  const subscribers = addedIsCheckedSubscribers.map(item => {
    return (
      <tr key={item._id}>
        <td>
          <input
            type="checkbox"
            checked={item.isChecked}
            onChange={() => handleCheckboxChange(item._id)}
          />
        </td>
        <td>{item.email}</td>
        <td>{item.name}</td>
      </tr>
    );
  });

  return (
    <section>
      <MainContainer>
        <Title>구독자 설정</Title>
        <ContainerNav>
          <YellowButton onClick={handleDeleteSubscriberButtonClick}>
            삭제하기
          </YellowButton>
          <YellowButton onClick={handleNewSubscriberButtonClick}>
            구독자 추가하기
          </YellowButton>
        </ContainerNav>
        <SubscriberTable>
          <table>
            <thead>{tableHead}</thead>
            <tbody>{subscribers}</tbody>
          </table>
        </SubscriberTable>
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

const Title = styled.span`
  padding: 38px 0;
  font-size: 28px;
  font-weight: 500;
`;

const SubscriberTable = styled.div`
  table {
    display: block;
    thead {
      display: block;
      background-color: #f5f5f5;
      border-bottom: 2px solid #b5acac;
      tr {
        display: block;
        width: calc(100% - 10px);
        td {
          display: inline-block;
          padding: 16px 0;
          text-align: center;
          &:nth-child(1) {
            width: 6%;
          }
          &:nth-child(2) {
            width: 40%;
          }
          &:nth-child(3) {
            width: 30%;
          }
        }
      }
    }
    tbody {
      display: block;
      overflow-y: scroll;
      max-height: 340px;
      tr {
        display: block;
        border-bottom: 2px solid #b5acac;
        td {
          display: inline-block;
          padding: 10px 0;
          text-align: center;
          &:nth-child(1) {
            width: 6%;
          }
          &:nth-child(2) {
            width: 40%;
          }
          &:nth-child(3) {
            width: 30%;
          }
        }
      }
    }
  }
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const ContainerNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #b5acac;
  gap: 10px;
`;
