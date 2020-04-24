import React from 'react';
import { Progress } from 'antd';
import BadgeBox from './BadgeBox';

type SnapshotType = {
  rank: number;
  leagueName: any;
  totalGames: number;
  totalWins: number;
};

interface ISnapBox {
  type: string | '1v1' | '2v2' | '3v3' | '4v4' | 'Archon';
  snapshot: SnapshotType;
};

const SnapBox :React.FC<ISnapBox> = ({ type, snapshot }) => {
  const { leagueName, totalGames, totalWins } = snapshot;
  const ratio = +(totalGames / totalWins).toFixed(2);
  const strokeColor = totalGames > 0 ? '#bd1816' : '#e0e0e0';
  return (
    <div style={{ display: 'flex', width: '250px' }}>
      <BadgeBox league={leagueName?.toLowerCase()} tier={1} size='medium' />
      <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column', fontSize: '12px', flex: 1 }}>
        <div style={{ marginTop: '3px' }}>
          <span style={{ fontWeight: 'bold' }}>{type}</span>
          - {totalWins} wins | {totalGames} games ( {ratio || 0}% )
        </div>
        <div style={{ width: '100%' }}>
          <Progress percent={100} successPercent={ratio || 0} showInfo={false} strokeColor={strokeColor} />
        </div>
      </div>
    </div>
  );
};

export default SnapBox;
