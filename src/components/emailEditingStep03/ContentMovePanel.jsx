import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsUpDownLeftRight,
  faClone,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

export default function ContentMovePanel() {
  return (
    <ControlBox>
      <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
      <FontAwesomeIcon icon={faClone} />
      <StyledIcon icon={faTrashCan} />
    </ControlBox>
  );
}

const ControlBox = styled.div`
  width: 50px;
  height: 150px;
  background-color: white;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #f44336;
`;
