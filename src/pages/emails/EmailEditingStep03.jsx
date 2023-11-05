import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue, useRecoilState } from 'recoil';

import { useParams } from 'react-router-dom';
import { fetchEmail } from '../../api/email';
import { fetchSendingInfo } from '../../api/user';
import { addProperties } from '../../utils/dragAndDrop';
import LeftNav from '../../components/emailEditingStep03/LeftNav';
import ContentMovePanel from '../../components/emailEditingStep03/ContentMovePanel';
import ContentWrapper from '../../components/emailEditingStep03/contentWrapper';
import { dataToComponent } from '../../utils/emailEditing';
import FooterContent from '../../components/emailEditingStep03/FooterContent';
import ContentStyleTool from '../../components/emailEditingStep03/ContentStyleTool';
import userIdAtom from '../../recoil/userId/atom';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import emailTemplateAtom from '../../recoil/emailTemplate/atom';
import draglogo from '../../assets/login-logo-mini.png';

export default function EmailEditingStep03() {
  const userId = useRecoilValue(userIdAtom);
  const [emailContentsData, setEmailContentsData] =
    useRecoilState(emailTemplateAtom);
  const param = useParams();
  const $dragItemRef = useRef();
  const $dragOverItemRef = useRef();
  const $dragItemIndexRef = useRef();
  const $dragOverItemIndexRef = useRef();
  const [focusedType, setFocusedType] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState('');
  const dragImageRef = useRef(null);

  const img = new Image();

  img.src = draglogo;
  dragImageRef.current = img;

  const { data: senderData } = useQuery({
    queryKey: ['senderData', userId],
    queryFn: async () => {
      const result = await fetchSendingInfo(userId);

      return result;
    },
  });

  const { isLoading, error } = useQuery({
    queryKey: ['emailContentsData', userId, param.email_id, senderData],
    queryFn: async () => {
      const result = await fetchEmail(userId, param.email_id);

      return result;
    },
    onSuccess: emailTemplateData => {
      const { userName, companyName, address, contact } = senderData;

      const parsedEmailData = JSON.parse(emailTemplateData.emailContent);

      const addedPropertiesEmailContents = addProperties(
        parsedEmailData.emailContents,
      );

      parsedEmailData.emailContents = addedPropertiesEmailContents;
      parsedEmailData.emailFooter.companyOrUserName = companyName || userName;
      parsedEmailData.emailFooter.contact =
        contact || '발신자 설정페이지에서 전화번호를 설정해주세요';
      parsedEmailData.emailFooter.address =
        address || '발신자 설정페이지에서 주소를 설정해주세요';

      setEmailContentsData(parsedEmailData);
    },
    enabled: !!senderData,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>error</Error>;
  }

  const handleDraggable = e => {
    const newEmailTemplateData = { ...emailContentsData };
    const targetId = e.currentTarget.parentNode.parentNode.id;
    const newEmailContents = emailContentsData.emailContents.map(item => {
      if (item.id === targetId) {
        return { ...item, isDraggable: true };
      }

      return item;
    });

    newEmailTemplateData.emailContents = newEmailContents;

    setEmailContentsData(newEmailTemplateData);
  };

  const handleFocus = (e, index) => {
    const newEmailTemplateData = { ...emailContentsData };
    const newEmailContents = emailContentsData.emailContents.map(item => {
      if (item.id === e.target.id) {
        setFocusedType(item.type);

        return { ...item, isActive: true };
      }

      return item;
    });

    newEmailTemplateData.emailContents = newEmailContents;

    setFocusedIndex(index);

    setEmailContentsData(newEmailTemplateData);
  };

  const handleBlur = e => {
    const newEmailTemplateData = { ...emailContentsData };
    const newEmailContents = emailContentsData.emailContents.map(item => {
      return { ...item, isActive: false };
    });

    newEmailTemplateData.emailContents = newEmailContents;

    setEmailContentsData(newEmailTemplateData);
  };

  const handleDragStart = (e, index) => {
    $dragItemIndexRef.current = index;
    $dragItemRef.current = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';

    setFocusedType(null);

    e.dataTransfer.setDragImage(dragImageRef.current, 20, 20);
  };

  const handleDragEnter = (e, index) => {
    $dragOverItemIndexRef.current = index;
    $dragOverItemRef.current = e.currentTarget;
  };

  const handleDragEnd = e => {
    const newEmailTemplateData = { ...emailContentsData };
    const newEmailContents = emailContentsData.emailContents.map(item => {
      return { ...item, isDraggable: false };
    });

    newEmailTemplateData.emailContents = newEmailContents;

    setEmailContentsData(newEmailTemplateData);
  };

  const handleDrop = (e, index) => {
    if (e.target.tagName === 'IMG' || e.dataTransfer.effectAllowed === 'all') {
      $dragOverItemRef.current.style.boxShadow = 'none';

      return;
    }

    const newEmailTemplateData = { ...emailContentsData };
    const newEmailContents = emailContentsData.emailContents.map(item => {
      return { ...item, isActive: false };
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const contentHeight = e.currentTarget.offsetHeight / 2;
    const middleOfContent = rect.top + contentHeight;
    const absolute = Math.abs(
      $dragItemIndexRef.current - $dragOverItemIndexRef.current,
    );

    if (
      e.dataTransfer.effectAllowed === 'move' ||
      !e.dataTransfer.types.length
    ) {
      $dragItemRef.current.blur();

      if (
        (absolute === 1 &&
          e.clientY > middleOfContent &&
          $dragItemIndexRef.current > $dragOverItemIndexRef.current) ||
        (absolute === 1 &&
          e.clientY < middleOfContent &&
          $dragItemIndexRef.current < $dragOverItemIndexRef.current)
      ) {
        // 의미없는 이동 시도
        return;
      }

      if (
        e.clientY < middleOfContent &&
        $dragItemIndexRef.current < $dragOverItemIndexRef.current &&
        absolute > 1
      ) {
        // 위에서 아래로 2칸이상 이동, 컨텐츠 위쪽으로 넣을때
        const draggedItem = newEmailContents.splice(
          $dragItemIndexRef.current,
          1,
        )[0];

        newEmailContents.splice(
          $dragOverItemIndexRef.current - 1,
          0,
          draggedItem,
        );
      } else if (
        e.clientY > middleOfContent &&
        $dragItemIndexRef.current > $dragOverItemIndexRef.current &&
        absolute > 1
      ) {
        // 아래에서 위로 2칸이상 이동, 컨텐츠 아래쪽으로 넣을때
        const draggedItem = newEmailContents.splice(
          $dragItemIndexRef.current,
          1,
        )[0];

        newEmailContents.splice(
          $dragOverItemIndexRef.current + 1,
          0,
          draggedItem,
        );
      } else {
        const draggedItem = newEmailContents.splice(
          $dragItemIndexRef.current,
          1,
        )[0];

        newEmailContents.splice($dragOverItemIndexRef.current, 0, draggedItem);
      }
    } else {
      const newContent = JSON.parse(e.dataTransfer.getData('content'));

      if (e.clientY > middleOfContent) {
        newEmailContents.splice(index + 1, 0, newContent);
      } else {
        newEmailContents.splice(index, 0, newContent);
      }
    }

    $dragItemIndexRef.current = null;
    $dragOverItemIndexRef.current = null;
    $dragOverItemRef.current.style.boxShadow = 'none';

    newEmailTemplateData.emailContents = newEmailContents;

    setEmailContentsData(newEmailTemplateData);
  };

  const handleDragOver = e => {
    e.preventDefault();

    if (e.dataTransfer.effectAllowed === 'all') {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const contentHeight = e.currentTarget.offsetHeight / 2;
    const middleOfContent = rect.top + contentHeight;

    if (e.clientY > middleOfContent) {
      $dragOverItemRef.current.style.boxShadow = '0 2px orange';
    } else {
      $dragOverItemRef.current.style.boxShadow = '0 -2px orange';
    }
  };

  const handleDragLeave = e => {
    e.currentTarget.style.boxShadow = 'none';
    e.target.style.boxShadow = 'none';
  };

  const handleCopy = (e, index, element) => {
    const newEmailTemplateData = { ...emailContentsData };
    const newEmailContents = [...newEmailTemplateData.emailContents];
    const newContent = { ...element };

    newContent.id = crypto.randomUUID();
    newContent.isActive = false;

    newEmailContents.splice(index, 0, newContent);

    newEmailTemplateData.emailContents = newEmailContents;

    setEmailContentsData(newEmailTemplateData);
  };

  const handleDelete = (e, element) => {
    const newEmailTemplateData = { ...emailContentsData };

    if (newEmailTemplateData.emailContents.length <= 1) {
      return alert('마지막 요소는 삭제 할 수 없습니다.');
    }

    const newEmailContents = emailContentsData.emailContents.filter(
      item => item.id !== element.id,
    );

    newEmailTemplateData.emailContents = newEmailContents;

    setFocusedType(null);

    setEmailContentsData(newEmailTemplateData);
  };

  const contents = emailContentsData.emailContents.map(
    (emailContentData, index) => {
      return (
        <ContentWrapper
          key={emailContentData.id}
          id={emailContentData.id}
          isDraggable={emailContentData.isDraggable}
          onDragStart={e => handleDragStart(e, index)}
          onDragEnter={e => handleDragEnter(e, index)}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragLeave={handleDragLeave}
          onDrop={e => handleDrop(e, index)}
          onFocus={e => handleFocus(e, index)}
          onBlur={handleBlur}
          onDelete={e => handleDelete(e, emailContentData)}
        >
          {dataToComponent(emailContentData, index)}
          {emailContentData.isActive && (
            <ContentMovePanel
              onDraggable={handleDraggable}
              onCopy={e => handleCopy(e, index, emailContentData)}
              onDelete={e => handleDelete(e, emailContentData)}
            />
          )}
        </ContentWrapper>
      );
    },
  );

  return (
    <>
      <SubNav>
        <Step>구독자</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>발송정보</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>콘텐츠</Step>
      </SubNav>
      <Background>
        {focusedType ? (
          <ContentStyleTool
            type={focusedType}
            setFocusedType={setFocusedType}
            index={focusedIndex}
          />
        ) : (
          <LeftNav />
        )}
        <EmailBackground style={emailContentsData.emailBodyStyle}>
          <EmailContentsList style={emailContentsData.emailContainerStyle}>
            {contents}
            <FooterContent
              style={emailContentsData.emailFooter.boxStyle}
              companyOrUserName={
                emailContentsData.emailFooter.companyOrUserName
              }
              address={emailContentsData.emailFooter.address}
              contact={emailContentsData.emailFooter.contact}
            />
          </EmailContentsList>
        </EmailBackground>
      </Background>
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
  &:nth-child(5) {
    font-weight: 500;
    color: black;
  }
`;

const StyledFaAngleRight = styled(FontAwesomeIcon)`
  font-size: 20px;
  flex: 0.5;
`;

const Background = styled.div`
  display: flex;
  height: calc(100vh - 145.5px);
`;

const EmailBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 630px;
  background-color: #f5f5f5;
  overflow-y: auto;
`;

const EmailContentsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 630px;
  min-width: 630px;
  height: max-content;
  margin: 30px 0;
  background-color: white;
`;
