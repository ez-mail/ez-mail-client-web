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
    children: [{ index: true, path: '/dashboard', element: <DashBoard /> }],
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
