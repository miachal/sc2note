import React from 'react';
import { Box, CareerContainer, Label } from './styles';
import { Career, League, LeagueAchieved } from '../../../types';
import Badge from '../Badge';

interface CareerProps {
  data: Career;
}

export default ({ data }: CareerProps) => {
  const {
    current1v1LeagueName,
    currentBestTeamLeagueName,
    best1v1Finish,
    bestTeamFinish,
  }: {
    current1v1LeagueName: League;
    currentBestTeamLeagueName: League;
    best1v1Finish: LeagueAchieved;
    bestTeamFinish: LeagueAchieved;
  } = data;
  const {
    leagueName: _1v1LeagueName,
    timesAchieved: _1v1TimesAchieved,
  }: { leagueName: League; timesAchieved: number } = best1v1Finish || {};
  const {
    leagueName: _tLeagueName,
    timesAchieved: _tTimesAchieved,
  }: { leagueName: League; timesAchieved: number } = bestTeamFinish || {};
  return (
    <CareerContainer>
      <Box>
        <Label leftAlign={-18}>CURRENT</Label>
        <Badge
          league={current1v1LeagueName}
          tier={1}
          size='medium'
          label='1v1'
        />
        <Badge
          league={currentBestTeamLeagueName}
          tier={1}
          size='medium'
          label='team'
        />
      </Box>
      <Box>
        <Label leftAlign={-4}>BEST</Label>
        <Badge
          league={_1v1LeagueName}
          tier={_1v1TimesAchieved > 3 ? 4 : _1v1TimesAchieved || 1}
          size='medium'
          label='1v1'
        />
        <Badge
          league={_tLeagueName}
          tier={_tTimesAchieved > 3 ? 4 : _tTimesAchieved || 1}
          size='medium'
          label='team'
        />
      </Box>
    </CareerContainer>
  );
};
