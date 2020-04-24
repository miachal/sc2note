import React from 'react';
import SnapBox from './SnapBox';

interface ISnapContainer {
  seasonSnapshot: any;
};

const SnapContainer :React.FC<ISnapContainer> = ({ seasonSnapshot }) => {
  const types = Object.keys(seasonSnapshot);
  return (
    <div>
      {types.map(type => <SnapBox type={type} snapshot={seasonSnapshot[type]} />)}
    </div>
  );
};

export default SnapContainer;
