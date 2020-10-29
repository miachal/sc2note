import styled from 'styled-components';
import { League, Tier } from '../../../types';

export const BadgeContainer = styled.div`
  flex-direction: column;
`;

export const Badge = styled.div<{ league: League }>`
  background-image: ${({ league }) =>
    league ? `url(/img/badges/${league}.png)` : 'url(/img/badges/NONE.png)'};
  background-repeat: no-repeat;
`;

export const Large = styled(Badge)<{ tier: Tier }>`
  width: 100px;
  height: 105px;
  flex: 0 0 100px;
  background-position: 0 ${({ tier }) => (tier - 1) * -105}px;
`;

export const Medium = styled(Badge)<{ tier: Tier }>`
  width: 45px;
  height: 50px;
  flex: 0 0 45px;
  background-position: -100px ${({ tier }) => (tier - 1) * -50}px;
`;

export const Small = styled(Badge)<{ tier: Tier }>`
  width: 25px;
  height: 30px;
  flex: 0 0 25px;
  background-position: -145px ${({ tier }) => (tier - 1) * -30}px;
`;

export const Label = styled.div`
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;
