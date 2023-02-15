import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Sender from '../pages/Sender';
import SignUp from '../pages/SIgnUp';
import Emails from '../pages/Emails';
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
