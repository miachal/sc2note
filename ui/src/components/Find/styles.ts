import styled from 'styled-components';
import { Select, Button } from 'antd';

export const FindContainer = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
`;

export const FindSelect = styled(Select)`
  width: 100%;
  padding: 0 10px;
`;

export const SearchButton = styled(Button)`
  width: 64px;
  height: 32px;
  margin: 0 5px;
`;
