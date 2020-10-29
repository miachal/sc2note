import React from 'react';
import { Progress } from 'antd';
import { LevelContainer, Race } from './styles';
import { Swarm, Race as RaceType } from '../../../../types';

interface LevelProps {
  race: RaceType;
  swarm: Swarm;
}

export default ({ race, swarm: { level } }: LevelProps) => (
  <LevelContainer>
    <Race>
      <img src={`/img/symbols/${race}.png`} alt={race} />
    </Race>
    <Progress percent={level * 2} showInfo={false} />
  </LevelContainer>
);
