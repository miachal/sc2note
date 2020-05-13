import React from 'react';
import styled from 'styled-components';
import Level from './Level';
import { omit, get } from 'lodash';

interface ILevelBox {
  swarmLevels: any;
};

const LevelBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 5px;
`;

const LevelBox: React.FC<ILevelBox> = ({ swarmLevels }) => {
  const races = omit(swarmLevels, 'level');
  return (
    <LevelBoxDiv>
      {Object.keys(races).map(r => <Level key={r} race={r} level={get(races, [r, 'level'], 0)} />)}
    </LevelBoxDiv>
  );
};

export default LevelBox;
