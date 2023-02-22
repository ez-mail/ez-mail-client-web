import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import EmailEditingNav from '../../components/EmailEditingNav';
import userIdAtom from '../../recoil/userId/atom';

export default function EmailEditing() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);

  useEffect(() => {
    if (!userId) {
      alert('로그인이 필요합니다!');

      navigate('/');
    }
  }, []);

  return (
    <>
      <EmailEditingNav />
      <Outlet />
    </>
  );
}
