import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useRecoilState } from 'recoil';

import { setImageUrl } from '../../utils/dragAndDrop';
import emailTemplateDataAtom from '../../recoil/emailTemplate/atom';

export default function ImageContent({ boxStyle, link, contentStyle, index }) {
  const [emailContentsData, setEmailContentsData] = useRecoilState(
    emailTemplateDataAtom,
  );
  const inputRef = useRef();

  const handleAddPhotoClick = () => {
    inputRef.current.click();
  };

  const handleInputChange = e => {
    setImageUrl(
      e.target.files[0],
      emailContentsData,
      setEmailContentsData,
      index,
    );
  };

  const handleImgDrop = e => {
    e.preventDefault();
    setImageUrl(
      e.dataTransfer.files[0],
      emailContentsData,
      setEmailContentsData,
      index,
    );
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleImageClick = e => {
    e.preventDefault();
  };

  return (
    <div style={boxStyle}>
      {emailContentsData.emailContents[index].imageSrc ? (
        <div
          onClick={handleAddPhotoClick}
          onDrop={handleImgDrop}
          onDragOver={handleDragOver}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            onClick={handleImageClick}
          >
            <img
              src={emailContentsData.emailContents[index].imageSrc}
              alt="이미지"
              style={contentStyle}
            />
          </a>
          <PhotoInput
            ref={inputRef}
            type="file"
            onChange={handleInputChange}
            accept=".png, .jpg, .jpeg"
          />
        </div>
      ) : (
        <PhotoDropBox
          onClick={handleAddPhotoClick}
          onDrop={handleImgDrop}
          onDragOver={handleDragOver}
        >
          <StyledPhoto icon={faImage} />
          <AddPhotoText>사진을 추가하세요</AddPhotoText>
          <PhotoInput
            ref={inputRef}
            type="file"
            onChange={handleInputChange}
            accept=".png, .jpg, .jpeg"
          />
        </PhotoDropBox>
      )}
    </div>
  );
}

const PhotoDropBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const StyledPhoto = styled(FontAwesomeIcon)`
  padding: 20px 0;
  font-size: 40px;
  color: #757575;
`;

const AddPhotoText = styled.div`
  padding-bottom: 20px;
  font-size: 0.875rem;
  color: #757575;
`;

const PhotoInput = styled.input`
  display: none;
`;
