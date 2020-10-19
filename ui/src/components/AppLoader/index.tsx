import React from 'react';
import { Tabs } from 'antd';
import { StyledTabs } from './styles';
import { Route } from '../../types';

interface AppLoaderProps {
  routes: Array<Route>;
}

export default ({ routes }: AppLoaderProps) => (
  <StyledTabs type='card'>
    {routes.map(({ component, path, ...rest }: Route) => (
      <Tabs.TabPane {...rest} key={path}>
        {component}
      </Tabs.TabPane>
    ))}
  </StyledTabs>
);
