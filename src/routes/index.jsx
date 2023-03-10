import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Sender from '../pages/Sender';
import SignUp from '../pages/SignUp';
import Emails from '../pages/emails/Emails';
import EmailEditingStep01 from '../pages/emails/EmailEditingStep01';
import EmailEditingStep02 from '../pages/emails/EmailEditingStep02';
import EmailEditingStep03 from '../pages/emails/EmailEditingStep03';
import EmailEditingStep04 from '../pages/emails/EmailEditingStep04';
import Subscribers from '../pages/subscribers/Subscribers';
import SubscriberAddition from '../pages/subscribers/SubscriberAddition';
import EmailsDashboard from '../pages/emails/EmailsDashboard';
import EmailRecipientsModal from '../pages/emails/EmailRecipientsModal';
import CdnCodeModal from '../pages/CdnCodeModal';
import OriginModal from '../pages/OriginModal';
import EmailEditing from '../pages/emails/EmailEditing';

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
        path: '/emails/:email_id/dashboard',
        element: <EmailsDashboard />,
        children: [
          {
            path: 'recipients',
            element: <EmailRecipientsModal />,
          },
        ],
      },
      {
        path: '/subscribers',
        element: <Subscribers />,
      },
      {
        path: '/subscribers/addition',
        element: <SubscriberAddition />,
      },
      {
        path: '/sender',
        element: <Sender />,
        children: [
          {
            path: 'cdnCode',
            element: <CdnCodeModal />,
          },
          {
            path: 'origin',
            element: <OriginModal />,
          },
        ],
      },
      {
        path: '/emails/:email_id/step04',
        element: <EmailEditingStep04 />,
      },
    ],
  },
  {
    path: '/emails/:email_id',
    element: <EmailEditing />,
    children: [
      {
        path: '/emails/:email_id/step01',
        element: <EmailEditingStep01 />,
      },
      {
        path: '/emails/:email_id/step02',
        element: <EmailEditingStep02 />,
      },
      {
        path: '/emails/:email_id/step03',
        element: <EmailEditingStep03 />,
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
