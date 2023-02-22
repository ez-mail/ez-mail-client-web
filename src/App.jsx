import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import MainBottomSection from './components/MainBottomSection';
import MainMiddleSection from './components/MainMiddleSection';
import MainNav from './components/MainNav';
import MainTopSection from './components/MainTopSection';
import userIdAtom from './recoil/userId/atom';
import DashboardNav from './components/DashboardNav';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdAtom);

  useEffect(() => {
    if (!userId && location.pathname !== '/') {
      alert('로그인이 필요합니다!');

      navigate('/');
    } else if (userId && location.pathname === '/') {
      navigate('/dashboard');
    }
  }, []);

  if (location.pathname !== '/') {
    return (
      <>
        <DashboardNav />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <MainNav />
      <MainTopSection />
      <MainMiddleSection />
      <MainBottomSection />
    </>
  );
}

export default App;
