import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import DashboardNav from './components/DashboardNav';

import MainBottomSection from './components/MainBottomSection';
import MainMiddleSection from './components/MainMiddleSection';
import MainNav from './components/MainNav';
import EmailEditingNav from './components/EmailEditingNav';
import MainTopSection from './components/MainTopSection';

function App() {
  const location = useLocation();
  const params = useParams();
  if (location.pathname !== '/') {
    if (
      location.pathname !== `/emails/${params.email_id}/step04` &&
      location.pathname.includes(`/emails/${params.email_id}/step`)
    ) {
      return (
        <>
          <EmailEditingNav />
          <Outlet />
        </>
      );
    }

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
