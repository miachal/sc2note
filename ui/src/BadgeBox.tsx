import React from 'react';
import styled from 'styled-components';


type LeagueType = null | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' | 'grandmaster'
type TierType = 1 | 2 | 3 | 4
type SizeType = 'small' | 'medium' | 'large'


const Badge = styled.div<{ league: LeagueType }>`
  background-image: ${({ league }) => league ? `url(/img/badges/${league}.png)` : 'url(/img/badges/none.png)'};
  background-repeat: no-repeat;
`;

const Large = styled(Badge)<{ tier: TierType }>`
  width: 100px;
  height: 105px;
  flex: 0 0 100px;
  background-position: 0 ${({ tier }) => (tier-1) * (-105)}px;
`;

const Medium = styled(Badge)<{ tier: TierType }>`
  width: 45px;
  height: 50px;
  flex: 0 0 45px;
  background-position: -100px ${({ tier }) => (tier-1) * (-50)}px;
`;

const Small = styled(Badge)<{ tier: TierType }>`
  width: 25px;
  height: 30px;
  flex: 0 0 25px;
  background-position: -145px ${({ tier }) => (tier-1) * (-30)}px;
`;

const CaptionText = styled.div`
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

interface IBadgeBoxProps {
  league: LeagueType,
  tier: TierType,
  size: SizeType,
  caption?: string
};

const BadgeBox :React.FC<IBadgeBoxProps> = ({ size, caption, ...rest }) => {
  return (
    <div>
      {
        {
          'small': <Small {...rest} />,
          'medium': <Medium {...rest} />,
          'large': <Large {...rest} />
        }[size]
      }
      <CaptionText>{caption}</CaptionText>
    </div>
  );
};

export default BadgeBox;
