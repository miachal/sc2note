import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';

const LevelBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px 20px;
  width: 100px;
`;

const RaceBox = styled.div`
  display: flex;
  justify-content: center;
`;

const RaceLevelBox = styled.div`
  font: 600 .7rem "Source Sans Pro";
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 5px;
  margin-bottom: 7px;
`;

interface ILevelProps {
  //  race: 'terran' | 'zerg' | 'protoss';
  race: any;
  level: number;
};

const Level: React.FC<ILevelProps> = ({ race, level }) => (
  <LevelBox>
    <RaceBox>
      <img src={`/img/symbols/${race}.png`} alt={race} />
    </RaceBox>
    <Progress percent={level * 2} showInfo={false} />
  </LevelBox>
);

export default Level;
