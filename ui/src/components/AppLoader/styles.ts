import styled from 'styled-components';
import { Tabs } from 'antd';

export const StyledTabs = styled(Tabs)`
  height: 85vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
