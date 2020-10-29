import React from 'react';
import { SwarmContainer } from './styles';
import { SwarmLevels, Race } from '../../../types';
import Level from './Level';

interface SwarmContainerProps {
  data: SwarmLevels;
}

export default ({ data }: SwarmContainerProps) => {
  const { level, ...races } = data;
  return (
    <SwarmContainer>
      {Object.keys(races).map((race, idx) => (
        <Level
          key={idx}
          race={race as Race}
          swarm={races[race as keyof typeof races]}
        />
      ))}
    </SwarmContainer>
  );
};
