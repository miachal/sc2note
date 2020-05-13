import React from 'react';
import { Progress } from 'antd';
import BadgeBox from './BadgeBox';
import styled from 'styled-components';

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

const Box = styled.div`
  display: flex;
`;

const Body = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  font-size: 12px;
  flex: 1;
`;

const TopRow = styled.div`
  margin-top: 3px;
`;

const TypeSpan = styled.span`
  font-weight: bold;
`;

const SnapBox: React.FC<ISnapBox> = ({ type, snapshot }) => {
  const { leagueName, totalGames, totalWins } = snapshot;
  const ratio = +((totalWins / totalGames) * 100).toFixed(2);
  const strokeColor = totalGames > 0 ? '#bd1816' : '#e0e0e0';
  return (
    <Box>
      <BadgeBox league={leagueName} tier={1} size='medium' />
      <Body>
        <TopRow>
          <TypeSpan>{type}</TypeSpan>
          - {totalWins} wins | {totalGames} games ( {ratio || 0}% )
        </TopRow>
        <Progress percent={100} successPercent={ratio || 0} showInfo={false} strokeColor={strokeColor} />
      </Body>
    </Box>
  );
};

export default SnapBox;
