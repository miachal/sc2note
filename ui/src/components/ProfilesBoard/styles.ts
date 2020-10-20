import { Button } from 'antd';
import styled from 'styled-components';

export const ProfilesContainer = styled.div`
  margin-top: 15px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 14.28%);
`;

export const NextButton = styled(Button).attrs({
  block: true,
  type: 'primary',
})`
  position: absolute;
  bottom: 0%;
  color: 'yellow';
  background-color: 'green';
`;
