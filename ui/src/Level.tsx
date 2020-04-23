import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';

interface ILevelProps {
  race: 'terran' | 'zerg' | 'protoss';
  level: number;
};

const LevelBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const RaceBox = styled.div`
  display: flex;
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

const Level :React.FC<ILevelProps> = ({ race, level }) => (
  <LevelBox>    
    <RaceBox>
      <img src={`/img/symbols/${race}.png`} alt={race} />
      <RaceLevelBox>
        <div>{race}</div>
        <div>Level {level}</div>
      </RaceLevelBox>
    </RaceBox>
     <Progress percent={level * 2} showInfo={false} />
  </LevelBox>
);

export default Level;
