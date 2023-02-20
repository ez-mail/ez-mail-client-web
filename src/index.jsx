import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import router from './routes';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
