import React from 'react';
import styled from 'styled-components';
import BadgeBox from './BadgeBox';


const BoxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const BoxRowLabel = styled.div <{ leftAlign: number }>`
  transform: rotate(-90deg);
  position: absolute;
  font-size: 12px;
  left: ${({ leftAlign }) => leftAlign}px;
`;

interface IBestBox {
  career: any;
};

const BestBox: React.FC<IBestBox> = ({ career }) => {
  const {
    current1v1LeagueName,
    currentBestTeamLeagueName,
    best1v1Finish,
    bestTeamFinish
  } = career || {};

  const { leagueName: _1v1LeagueName, timesAchieved: _1v1TimesAchieved } = best1v1Finish || {};
  const { leagueName: _tLeagueName, timesAchieved: _tTimesAchieved } = bestTeamFinish || {};

  return (
    <>
      <BoxRow>
        <BoxRowLabel leftAlign={-18}>CURRENT</BoxRowLabel>
        <BadgeBox league={current1v1LeagueName} tier={1} size='medium' caption='1v1' />
        <BadgeBox league={currentBestTeamLeagueName} tier={1} size='medium' caption='team' />
      </BoxRow>
      <BoxRow>
        <BoxRowLabel leftAlign={-4}>BEST</BoxRowLabel>
        <BadgeBox league={_1v1LeagueName} tier={_1v1TimesAchieved > 3 ? 4 : _1v1TimesAchieved || 1} size='medium' caption='1v1' />
        <BadgeBox league={_tLeagueName} tier={_tTimesAchieved > 3 ? 4 : _tTimesAchieved || 1} size='medium' caption='team' />
      </BoxRow>
    </>
  );
};

export default BestBox;
