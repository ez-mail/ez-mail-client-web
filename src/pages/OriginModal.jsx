import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import Modal from '../components/Modal';
import YellowButton from '../components/DesignedComponents/YellowButton';
import InputTextOrigin from '../components/DesignedComponents/InputTextOrigin';
import { fetchOrigin, fetchAddOrigin } from '../api/user';
import userIdAtom from '../recoil/userId/atom';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function OriginModal() {
  const userId = useRecoilValue(userIdAtom);
  const [inputOrigin, setInputOrigin] = useState('');
  const [updateCount, setUpdateCount] = useState(0);
  const [origin, setOrigin] = useState('');

  const { isLoading, error, data } = useQuery({
    queryKey: ['originData', userId, updateCount],
    queryFn: async () => {
      const result = await fetchOrigin(userId);

      return result;
    },
    onSuccess: originData => {
      setOrigin(originData);
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }
  const handleAddOriginClick = async () => {
    const result = await fetchAddOrigin(userId, { origin: inputOrigin });

    if (result === 201) {
      alert('정상적으로 추가되었습니다 🙂');
    } else {
      alert('origin 전송 요청을 실패했습니다. 잠시후에 다시 시도해주세요.');
    }

    setUpdateCount(updateCount + 1);
  };

  const handleOriginChange = e => {
    setInputOrigin(e.target.value);
  };

  return (
    <Modal title="코드를 붙여넣을 홈페이지 Origin을 입력해주세요">
      <OriginContainer>
        <InputTextOrigin
          id="origin"
          name="origin"
          label="Origin"
          onChange={handleOriginChange}
        />
        <ButtonContainer>
          <YellowButton onClick={handleAddOriginClick}>추가하기</YellowButton>
        </ButtonContainer>
        <RegisteredOrigin>
          <Title>등록된 Origin</Title>
          <OriginData>{origin}</OriginData>
        </RegisteredOrigin>
      </OriginContainer>
    </Modal>
  );
}

const OriginContainer = styled.div`
  margin-top: 50px;
  padding: 20px;
`;

const RegisteredOrigin = styled.div`
  margin-top: 70px;
`;

const Title = styled.div`
  font-size: 1.25rem;
  margin-bottom: 20px;
`;

const OriginData = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
