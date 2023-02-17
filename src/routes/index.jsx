import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Sender from '../pages/Sender';
import SignUp from '../pages/SIgnUp';
import Emails from '../pages/emails/Emails';
import Step01 from '../pages/emails/EmailEditingStep01';
import Step02 from '../pages/emails/EmailEditingStep02';
import Step03 from '../pages/emails/EmailEditingStep03';
import Step04 from '../pages/emails/EmailEditingStep04';
import Subscribers from '../pages/Subscribers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/dashboard',
        element: <DashBoard />,
      },
      {
        path: '/emails',
        element: <Emails />,
      },
      {
        path: '/subscribers',
        element: <Subscribers />,
      },
      {
        path: '/sender',
        element: <Sender />,
      },
      {
        path: '/emails/:email_id/step01',
        element: <Step01 />,
      },
      {
        path: '/emails/:email_id/step02',
        element: <Step02 />,
      },
      {
        path: '/emails/:email_id/step03',
        element: <Step03 />,
      },
      {
        path: '/emails/:email_id/step04',
        element: <Step04 />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

export default router;
