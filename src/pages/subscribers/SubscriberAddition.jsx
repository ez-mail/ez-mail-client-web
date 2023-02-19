import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import InputText from '../../components/InputText';
import CommonButton from '../../components/CommonButton';

export default function SubscriberAddition() {
  const [inputs, setInputs] = useState([
    { email: '', name: '', adAgreement: false, id: 0 },
  ]);

  const handleAddRowClick = () => {
    setInputs([
      ...inputs,
      { email: '', name: '', adAgreement: false, id: inputs.length },
    ]);
  };

  const handleInputChange = (e, id, field) => {
    const newInputs = inputs.map(input => {
      if (input.id === id) {
        return {
          ...input,
          [field]: e.target.value,
        };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleAddSubscribersButtonClick = () => {
    console.log('구독자 추가 API');
  };

  const handleDeleteRowClick = id => {
    const newInputs = inputs.filter(input => input.id !== id);
    setInputs(newInputs);
  };

  const subscribersRow = inputs.map(input => {
    return (
      <InputContainer key={input.id}>
        <InputText
          id="email"
          name="email"
          value={input.email}
          onChange={e => handleInputChange(e, input.id, 'email')}
          paddingBottom="20px"
          width="200px"
          labelFontSize="16px"
        >
          이메일 주소
        </InputText>
        <InputText
          id="name"
          name="name"
          value={input.name}
          onChange={e => handleInputChange(e, input.id, 'name')}
          paddingBottom="20px"
          width="170px"
          labelFontSize="16px"
        >
          이름
        </InputText>
        <SelectContainer>
          <Label htmlFor="adAgreement">광고성 정보 수신 동의</Label>
          <SelectAdAgreement
            name="adAgreement"
            id="adAgreement"
            value={input.adAgreement}
            onChange={e => handleInputChange(e, input.id, 'adAgreement')}
          >
            <option value={false}>동의하지 않음</option>
            <option value>동의</option>
          </SelectAdAgreement>
        </SelectContainer>
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
        <Title>구독자 추가</Title>
        {subscribersRow}
        <AddRow onClick={handleAddRowClick}>+ 행추가</AddRow>
        <CommonButton
          alignSelf="flex-start"
          onClick={handleAddSubscribersButtonClick}
        >
          추가하기
        </CommonButton>
      </MainContainer>
    </section>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
  padding: 0 0 50px 0;
`;

const Title = styled.span`
  padding: 38px 0;
  font-size: 28px;
  font-weight: 500;
`;

const InputContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
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

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectAdAgreement = styled.select`
  width: 170px;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const Label = styled.label`
  padding-bottom: 8px;
`;
