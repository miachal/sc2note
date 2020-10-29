import React from 'react';
import { SeasonSnapshot, TypeOfSnapshot } from '../../../types';
import { SnapshotContainer } from './styles';

import Snapshot from './Snapshot';

interface SnapshotContainerProps {
  data: SeasonSnapshot;
}

export default ({ data }: SnapshotContainerProps) => {
  return (
    <SnapshotContainer>
      {Object.keys(data).map((snapshotType, idx) => (
        <Snapshot
          key={idx}
          type={snapshotType as TypeOfSnapshot}
          snapshot={data[snapshotType as keyof typeof data]}
        />
      ))}
    </SnapshotContainer>
  );
};
