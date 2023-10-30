import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches,
  );

  const handleMediaQueryChange = e => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    if (!userId && location.pathname !== '/') {
      alert('로그인이 필요합니다!');

      navigate('/');
    } else if (userId && location.pathname === '/') {
      navigate('/dashboard');
    }

    const mediaQuery = window.matchMedia('(max-width: 768px');

    mediaQuery.addEventListener('change', handleMediaQueryChange);
  }, []);

  if (isMobile) {
    return (
      <h2>
        이 사이트는 모바일 환경을 지원하지 않습니다. 데스크탑으로 이용해주세요.
      </h2>
    );
  }

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
