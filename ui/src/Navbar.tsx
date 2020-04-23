import React from 'react';
import { Tabs } from 'antd';
import { TeamOutlined, FileSearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Find from './Find';

const StyledTabs = styled(Tabs)`
`;

const TabPane = styled(Tabs.TabPane)`
`;

const links = [
  { key: '1', tab: <span><TeamOutlined />Check opponents</span>, component: <Find /> },
  { key: '2', tab: <span><FileSearchOutlined />History</span>, component: <>Tab 2 Component</> }
];

export const Navbar = () => (
  <StyledTabs type='card'>
    { links.map(({ component, ...rest }) => <TabPane {...rest}>{component}</TabPane>) }
  </StyledTabs>
);
