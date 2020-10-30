import React from 'react';
import { Progress } from 'antd';
import { Snapshot, TypeOfSnapshot } from '../../../../types';
import { Details, SnapshotContainer, SingleUnit } from './styles';

import Badge from '../../Badge';

interface SnapshotProps {
  type: TypeOfSnapshot;
  snapshot: Snapshot;
}

export default ({
  type,
  snapshot: { leagueName, totalGames, totalWins },
}: SnapshotProps) => {
  const ratio = +((totalWins / totalGames) * 100).toFixed(2);
  const strokeColor = totalGames > 0 ? '#bd1816' : '#e0e0e0';
  return (
    <SnapshotContainer>
      <SingleUnit>
        <Badge league={leagueName} size='medium' tier={1} />
        <Details>
          <span>{type}</span> - {totalWins} wins | {totalGames} games ({' '}
          {ratio || 0}% )
          <Progress
            percent={100}
            successPercent={ratio || 0}
            showInfo={false}
            strokeColor={strokeColor}
          />
        </Details>
      </SingleUnit>
    </SnapshotContainer>
  );
};
