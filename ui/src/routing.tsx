import React from 'react';
import { TeamOutlined } from '@ant-design/icons';

import { Route } from './types';

import CheckOpponents from './views/CheckOpponents';
import Loading from './components/Loading';

export const routes: Array<Route> = [
  {
    path: '/',
    tab: (
      <span>
        <TeamOutlined />
        Check opponents
      </span>
    ),
    component: <CheckOpponents />,
  },
  {
    path: '/loading',
    tab: <span>Load me!</span>,
    component: <Loading />,
  },
];
