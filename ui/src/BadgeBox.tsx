import React from 'react';
import styled from 'styled-components';


type LeagueType = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' | 'grandmaster'
type TierType = 1 | 2 | 3 | 4
type SizeType = 'small' | 'medium' | 'large'


const Badge = styled.div<{ league: LeagueType }>`
  background-image: ${props => `url(/img/badges/${props.league}.png)`};
  background-repeat: no-repeat;
`;

const Large = styled(Badge)<{ tier: TierType }>`
  width: 100px;
  height: 105px;
  flex: 0 0 100px;
  background-position: 0 ${props => (props.tier-1) * (-105)}px;
`;

const Medium = styled(Badge)<{ tier: TierType }>`
  width: 45px;
  height: 50px;
  flex: 0 0 45px;
  background-position: -100px ${props => (props.tier-1) * (-50)}px;
`;

const Small = styled(Badge)<{ tier: TierType }>`
  width: 25px;
  height: 30px;
  flex: 0 0 25px;
  background-position: -145px ${props => (props.tier-1) * (-30)}px;
`;

interface IBadgeBoxProps {
  league: LeagueType,
  tier: TierType,
  size: SizeType,
};

const BadgeBox :React.FC<IBadgeBoxProps> = ({ size, ...rest }) => {
  return (
    <div>
      {
        {
          'small': <Small {...rest} />,
          'medium': <Medium {...rest} />,
          'large': <Large {...rest} />
        }[size]
      }
    </div>
  );
};

export default BadgeBox;
