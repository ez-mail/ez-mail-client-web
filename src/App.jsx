import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardNav from './components/DashboardNav';

import MainBottomSection from './components/MainBottomSection';
import MainMiddleSection from './components/MainMiddleSection';
import MainNav from './components/MainNav';
import MainTopSection from './components/MainTopSection';

function App() {
  const location = useLocation();

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
