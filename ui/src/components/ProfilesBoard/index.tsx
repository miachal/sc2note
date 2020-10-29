import React, { useState } from 'react';
import { Profile } from '../../types';
import Thumbnail from './Thumbnail';
import ProfileComponent from '../Profile';
import { ProfilesContainer, Grid, NextButton } from './styles';

interface ProfilesBoardProps {
  profiles: Array<Profile>;
}

export default ({ profiles }: ProfilesBoardProps) => {
  const [selectedProfiles, setSelectedProfiles] = useState<Set<Profile>>(
    new Set()
  );

  const selectProfile = (profile: Profile) => {
    if (!selectedProfiles.has(profile)) {
      setSelectedProfiles((prev) => new Set([...prev, profile]));
    } else {
      setSelectedProfiles(
        (prev) => new Set([...prev].filter((p) => p !== profile))
      );
    }
  };

  return (
    <ProfilesContainer>
      <Grid>
        {profiles.map((profile) => (
          <Thumbnail
            profile={profile}
            selectProfile={selectProfile}
            selected={selectedProfiles.has(profile)}
          />
        ))}
      </Grid>
      <ProfileComponent profile={profiles[0]} />
      <NextButton disabled={!selectedProfiles.size}>
        Show selected profiles.
      </NextButton>
    </ProfilesContainer>
  );
};
