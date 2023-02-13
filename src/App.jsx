import React from 'react';
import MainBottomSection from './components/MainBottomSection';
import MainMiddleSection from './components/MainMiddleSection';
import MainNav from './components/MainNav';
import MainTopSection from './components/MainTopSection';

function App() {
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
