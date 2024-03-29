import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import EmailBottomButton from '../../components/EmailBottomButton';
import {
  addIsCheckedProperty,
  removeIsCheckedProperty,
} from '../../utils/subscriber';
import { fetchUpdateEmail, fetchEmail } from '../../api/email';
import { fetchSubscribers } from '../../api/subscriber';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import userIdAtom from '../../recoil/userId/atom';
import emailTitleAtom from '../../recoil/emailTitle/atom';

export default function EmailEditingStep01() {
  const navigate = useNavigate();
  const param = useParams();
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const userId = useRecoilValue(userIdAtom);
  const setNavEmailTitle = useSetRecoilState(emailTitleAtom);
  const [addedIsCheckedSubscribers, setAddedIsCheckedSubscribers] = useState(
    [],
  );

  const {
    isLoading: isEmailLoading,
    error: isEmailError,
    data: emailData,
  } = useQuery({
    queryKey: ['userEmailTemplate', userId, param.email_id],
    queryFn: async () => {
      const result = await fetchEmail(userId, param.email_id);

      return result;
    },
    onSuccess: emailTemplateData => {
      setNavEmailTitle(emailTemplateData.emailTitle);
    },
  });
  const recipients = emailData?.recipients;

  const { isLoading: isSubscribersLoading, error: isSubscribersError } =
    useQuery({
      queryKey: ['userSubscribers', userId],
      queryFn: async () => {
        const result = await fetchSubscribers(userId);

        return result;
      },
      onSuccess: subscribersData => {
        const addedProperty = addIsCheckedProperty(subscribersData.subscribers);

        const checkedSubscribers = addedProperty.map(subscriber => {
          const prevChecked = recipients.find(
            recipient => recipient._id === subscriber._id,
          );

          if (prevChecked && prevChecked._id === subscriber._id) {
            return { ...subscriber, isChecked: true };
          }

          return { ...subscriber };
        });

        setAddedIsCheckedSubscribers(checkedSubscribers);
      },
      enabled: !!recipients,
    });

  if (isEmailLoading || isSubscribersLoading) {
    return <Loading />;
  }

  if (isEmailError || isSubscribersError) {
    return <Error>error</Error>;
  }

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

  const handleNextClick = async () => {
    const checkedRows = addedIsCheckedSubscribers.filter(
      item => item.isChecked,
    );

    const emailTemplateData = {
      editingStep: '02',
      recipients: removeIsCheckedProperty(checkedRows),
    };

    await fetchUpdateEmail(userId, param.email_id, emailTemplateData);

    navigate(`/emails/${param.email_id}/step02`);
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
          <Title>구독자를 선택하세요</Title>
          <SubscriberTable>
            <table>
              <thead>{tableHead}</thead>
              <tbody>{subscribers}</tbody>
            </table>
          </SubscriberTable>
        </MainContainer>
      </section>
      <BottomButtons>
        <EmailBottomButton color="#bdbdbd" cursor="default">
          이전
        </EmailBottomButton>
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
  &:nth-child(1) {
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

const SubscriberTable = styled.div`
  table {
    display: block;
    thead {
      display: block;
      background-color: #f5f5f5;
      border-bottom: 2px solid #b5acac;
      border-top: 2px solid #b5acac;
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
      max-height: 300px;
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

const BottomButtons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
`;
