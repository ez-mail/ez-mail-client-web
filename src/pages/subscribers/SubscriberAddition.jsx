import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';

import { fetchAddSubscribers } from '../../api/subscriber';
import InputTextAddSubscriber from '../../components/DesignedComponents/InputTextAddSubscriber';
import YellowButton from '../../components/DesignedComponents/YellowButton';
import userIdAtom from '../../recoil/userId/atom';

export default function SubscriberAddition() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);
  const [inputs, setInputs] = useState([{ email: '', name: '', id: 0 }]);

  const handleAddRowClick = () => {
    setInputs([...inputs, { email: '', name: '', id: inputs.length }]);
  };

  const handleInputChange = (e, id) => {
    const newInputs = inputs.map(input => {
      if (input.id === id) {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      }

      return input;
    });

    setInputs(newInputs);
  };

  const handleAddSubscribersButtonClick = async () => {
    const subscribers = {
      subscribers: inputs,
    };
    const result = await fetchAddSubscribers(userId, subscribers);

    if (result === 201) {
      alert('구독자 추가 성공');

      navigate(`/subscribers`);
    } else {
      alert('문제발생');
    }
  };

  const handleDeleteRowClick = id => {
    const newInputs = inputs.filter(input => input.id !== id);

    setInputs(newInputs);
  };

  const subscribersRow = inputs.map(input => {
    return (
      <InputContainer key={input.id}>
        <InputTextAddSubscriber
          id="email"
          name="email"
          label="이메일 주소"
          value={input.email}
          onChange={e => handleInputChange(e, input.id)}
        />
        <InputTextAddSubscriber
          id="name"
          name="name"
          label="이름"
          value={input.name}
          onChange={e => handleInputChange(e, input.id)}
        />
        {input.id !== 0 && (
          <DeleteButtonBox onClick={() => handleDeleteRowClick(input.id)}>
            <DeleteRowButton icon={faTrash} />
          </DeleteButtonBox>
        )}
      </InputContainer>
    );
  });

  return (
    <section>
      <MainContainer>
        <Title>구독자를 추가해보세요</Title>
        {subscribersRow}
        <AddRow onClick={handleAddRowClick}>+ 여러명 추가하기</AddRow>
        <div>
          <YellowButton onClick={handleAddSubscribersButtonClick}>
            저장하기
          </YellowButton>
        </div>
      </MainContainer>
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  padding: 0 0 50px 0;
`;

const Title = styled.span`
  padding: 38px 0;
  font-size: 28px;
  font-weight: 500;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const AddRow = styled.div`
  align-self: flex-start;
  margin-bottom: 50px;
  color: #3e81f6;
  cursor: pointer;
`;

const DeleteRowButton = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: black;
  opacity: 0.5;
`;

const DeleteButtonBox = styled.button`
  align-self: center;
  margin-top: 4px;
  padding: 4px 6px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #f5f5f5;
`;
