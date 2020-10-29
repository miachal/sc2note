import React from 'react';
import { League, Tier, Size } from '../../../types';
import { BadgeContainer, Small, Medium, Large, Label } from './styles';

interface BadgeProps {
  league: League;
  tier: Tier;
  size: Size;
  label?: string;
}

export default ({ size, label, ...rest }: BadgeProps) => (
  <BadgeContainer>
    {
      {
        small: <Small {...rest} />,
        medium: <Medium {...rest} />,
        large: <Large {...rest} />,
      }[size]
    }
    <Label>{label}</Label>
  </BadgeContainer>
);
