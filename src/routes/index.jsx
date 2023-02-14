import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SIgnUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
]);

export default router;
