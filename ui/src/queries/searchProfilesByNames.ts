import { gql } from '@apollo/client';

export const SEARCH_PROFILES_BY_NAMES = gql`
  query search($names: [String]!) {
    searchProfilesByNames(names: $names) {
      _id
      rankedftwId
      battlenetId
      summary {
        displayName
        portrait
        totalSwarmLevel
        totalAchievementPoints
      }
      snapshot {
        seasonSnapshot {
          _1v1 {
            rank
            leagueName
            totalWins
            totalGames
          }
          _2v2 {
            rank
            leagueName
            totalWins
            totalGames
          }
          _3v3 {
            rank
            leagueName
            totalWins
            totalGames
          }
          _4v4 {
            rank
            leagueName
            totalWins
            totalGames
          }
          Archon {
            rank
            leagueName
            totalWins
            totalGames
          }
        }
        totalRankedSeasonGamesPlayed
      }
      career {
        terranWins
        zergWins
        protossWins
        totalCareerGames
        current1v1LeagueName
        currentBestTeamLeagueName
        best1v1Finish {
          leagueName
          timesAchieved
        }
        bestTeamFinish {
          leagueName
          timesAchieved
        }
      }
      swarmLevels {
        level
        terran {
          level
          maxLevelPoints
          currentLevelPoints
        }
        zerg {
          level
          maxLevelPoints
          currentLevelPoints
        }
        protoss {
          level
          maxLevelPoints
          currentLevelPoints
        }
      }
      campaign {
        lotv
        wol
        hots
      }
      teams
      notes {
        icon
        note
        created
      }
    }
  }
`;
