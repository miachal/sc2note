import React from 'react';
import SnapBox from './SnapBox';
import styled from 'styled-components';

interface ISnapContainer {
  snapshot: any;
};

const SnapshotDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 5px;
  width: 260px;
`;

const SnapContainer: React.FC<ISnapContainer> = ({ snapshot }) => {
  const { seasonSnapshot } = snapshot || {};
  if (!seasonSnapshot) {
    return null;
  }
  const types = Object.keys(seasonSnapshot);
  return (
    <SnapshotDiv>
      {types.map(type => <SnapBox type={type} snapshot={seasonSnapshot[type]} />)}
    </SnapshotDiv>
  );
};

export default SnapContainer;
