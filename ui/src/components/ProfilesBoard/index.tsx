import React, { useState } from 'react';
import { Profile } from '../../types';
import Thumbnail from './Thumbnail';
import { ProfilesContainer, Grid, NextButton } from './styles';

interface ProfilesBoardProps {
  profiles: Array<Profile>;
}

export default ({ profiles }: ProfilesBoardProps) => {
  const [selectedProfiles, setSelectedProfiles] = useState<Array<Profile>>([]);

  return (
    <ProfilesContainer>
      <Grid>
        {profiles.map((profile) => (
          <Thumbnail profile={profile} />
        ))}
      </Grid>
      <NextButton disabled>Go.</NextButton>
    </ProfilesContainer>
  );
};
