import React from 'react';
import { Badge } from 'antd';
import { Profile, Note } from '../../../types';
import { ThumbnailContainer, ThumbnailFrame } from './styles';

interface ThumbnailProps {
  profile: Profile;
}

export default ({ profile }: ThumbnailProps) => (
  <ThumbnailContainer>
    <div>{profile.summary.displayName}</div>
    <Badge count={profile.notes.length}>
      <ThumbnailFrame>
        <img src={profile.summary.portrait} />
      </ThumbnailFrame>
    </Badge>
  </ThumbnailContainer>
);
