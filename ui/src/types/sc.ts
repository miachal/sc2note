import { Note } from './note';

export type League =
  | undefined
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'master'
  | 'grandmaster';

export type Tier = number;

export type Size = 'small' | 'medium' | 'large';

export type Race = 'zerg' | 'protoss' | 'terran' | 'random';

export type TypeOfSnapshot = '_1v1' | '_2v2' | '_3v3' | '_4v4' | 'Archon';

export interface Swarm {
  level: number;
  maxLevelPoints: number;
  currentLevelPoints: number;
}

export interface Snapshot {
  rank: number;
  leagueName: League;
  totalWins: number;
  totalGames: number;
}

export interface Summary {
  displayName: string;
  portrait: string;
  totalAchievementPoints: number;
  totalSwarmLevel: number;
}

export interface LeagueAchieved {
  leagueName: League;
  timesAchieved: number;
}

export interface Career {
  best1v1Finish: LeagueAchieved;
  bestTeamFinish: LeagueAchieved;
  current1v1LeagueName: League;
  currentBestTeamLeagueName: League;
  protossWins: number;
  terranWins: number;
  zergWins: number;
  totalCareerGames: number;
}

export interface MiniProfile {
  _id: string;
  battlenedId: string;
  rankedftwId: number;
  summary: Summary;
}

export interface SwarmLevels {
  level: number;
  terran: Swarm;
  zerg: Swarm;
  protoss: Swarm;
}

export interface SeasonSnapshot {
  Archon: Snapshot;
  _1v1: Snapshot;
  _2v2: Snapshot;
  _3v3: Snapshot;
  _4v4: Snapshot;
}

export interface Profile extends MiniProfile {
  teams: Array<number>;
  swarmLevels: SwarmLevels;
  campaign: {
    lots: string | null;
    wol: string | null;
    hots: string | null;
  };
  career: Career;
  snapshot: {
    totalRankedSeasonGamesPlayer: number;
    seasonSnapshot: SeasonSnapshot;
  };
  notes: Array<Note>;
}
