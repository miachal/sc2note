import React from 'react';
import { Profile } from '../../types';
import Thumbnail from './Thumbnail';
import { Grid } from './styles';

interface ProfilesBoardProps {
  profiles: Array<Profile>;
}

export default ({ profiles }: ProfilesBoardProps) => (
  <Grid>
    {profiles.map((profile) => (
      <Thumbnail profile={profile} />
    ))}
  </Grid>
);
