import React from 'react';
import { Tabs } from 'antd';
import { TeamOutlined, FileSearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import CheckOpponents from './CheckOpponents';

const StyledTabs = styled(Tabs)`
  height: 85vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const TabPane = styled(Tabs.TabPane)`
`;

const WtfDiv = styled.div`
background-color: orange;
position: relative;
overflow-y: hidden;
`;

const links = [
  { key: '1', tab: <span><TeamOutlined />Check opponents</span>, component: <CheckOpponents /> },
  // { key: '2', tab: <span><FileSearchOutlined />History</span>, component: <>Tab 2 Component</> }
];

export const Navbar = () => (
  <StyledTabs type='card'>
    {links.map(({ component, ...rest }) => <TabPane {...rest}>{component}</TabPane>)}
  </StyledTabs>
);
