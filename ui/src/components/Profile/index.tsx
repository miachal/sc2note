import React from 'react';
import { Profile } from '../../types';
import { ProfileContainer, ProfileFrame } from './styles';

import Career from './Career';
import SwarmContainer from './SwarmContainer';
import SnapshotContainer from './SnapshotContainer';
import Notes from './Notes';

interface ProfileProps {
  profile: Profile;
}

export default ({ profile }: ProfileProps) => {
  console.log('Profile: ');
  console.log(profile);
  return (
    <ProfileContainer>
      {profile.summary.displayName}
      <ProfileFrame>
        <div>
          <img src={profile.summary.portrait} alt='portrait' />
          <Career data={profile.career} />
        </div>
        <SwarmContainer data={profile.swarmLevels} />
        <SnapshotContainer data={profile.snapshot.seasonSnapshot} />
        {/* <Notes id={profile._id} /> */}
        <Notes />
      </ProfileFrame>
    </ProfileContainer>
  );
};
