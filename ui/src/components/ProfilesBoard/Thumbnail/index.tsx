import React from 'react';
import { Badge } from 'antd';
import { Profile } from '../../../types';
import { ThumbnailContainer, ThumbnailFrame } from './styles';

interface ThumbnailProps {
  profile: Profile;
  selectProfile(profile: Profile): void;
  selected: boolean;
}

export default ({ profile, selectProfile, selected }: ThumbnailProps) => (
  <ThumbnailContainer>
    <div>{profile.summary.displayName}</div>
    <Badge count={profile.notes.length}>
      <ThumbnailFrame active={selected} onClick={() => selectProfile(profile)}>
        <img alt='thumbnail' src={profile.summary.portrait} />
      </ThumbnailFrame>
    </Badge>
  </ThumbnailContainer>
);
