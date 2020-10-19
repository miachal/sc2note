export interface Swarm {
  level: number;
  maxLevelPoints: number;
  currentLevelPoints: number;
}

export interface Snapshot {
  rank: number;
  leagueName: string | null;
  totalWins: number;
  totalGames: number;
}

export interface Note {
  created: string;
  icon: string;
  note: string;
}

export interface Summary {
  displayName: string;
  portrait: string;
  totalAchievementPoints: number;
  totalSwarmLevel: number;
}

export interface MiniProfile {
  _id: string;
  battlenedId: string;
  rankedftwId: number;
  summary: Summary;
}

export interface Profile extends MiniProfile {
  teams: Array<number>;
  swarmLevels: {
    level: number;
    swarms: Array<Swarm>;
  };
  campaign: {
    lots: string | null;
    wol: string | null;
    hots: string | null;
  };
  career: {
    best1v1Finish: {
      leagueName: string | null;
      timesAchieved: number;
    };
    bestTeamFinish: {
      leagueName: string | null;
      timesAchieved: number;
    };
    current1v1LeagueName: string | null;
    currentBestTeamLeagueName: string | null;
    protossWins: number;
    terranWins: number;
    zergWins: number;
    totalCareerGames: number;
  };
  snapshot: {
    totalRankedSeasonGamesPlayer: number;
    Archon: Snapshot;
    _1v1: Snapshot;
    _2v2: Snapshot;
    _3v3: Snapshot;
    _4v4: Snapshot;
  };
  notes: Array<Note>;
}
