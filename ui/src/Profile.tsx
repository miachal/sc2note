import React from 'react';
import styled from 'styled-components';

import BestBox from './BestBox';
import LevelBox from './LevelBox';
import SnapContainer from './SnapContainer';
import Notes from './Notes';

interface IProfileBoxProps {
  player: any;
}

const ProfileBoxContainer = styled.div`
  width: 100%;
  border: 3px solid #1890ff;
  display: flex;
  margin-bottom: 25px;
`;

const NameContainer = styled.div`
  font: 600 18px 'Exo 2';
  color: #000;
`;
const ProfileBox: React.FC<IProfileBoxProps> = ({ player }) => {
  const { summary, career, swarmLevels, snapshot } = player || {};
  return (
    <div>
      <NameContainer>{summary.displayName}</NameContainer>
      <ProfileBoxContainer>
        <div>
          <div>
            <img
              style={{ objectFit: 'contain' }}
              src={summary.portrait}
              alt='profile'
            />
          </div>
          <BestBox career={career} />
        </div>
        <LevelBox swarmLevels={swarmLevels} />
        <SnapContainer snapshot={snapshot} />
        <Notes id={player._id} />
      </ProfileBoxContainer>
    </div>
  );
};

export default ProfileBox;
