import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import Find from './Find';
import ProfileBox from './Profile';
import { real_mock_1, real_mock_2 } from './mock';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import MiniProfile from './MiniProfile';
import { Alert, Button } from 'antd';
import { ArrowRightOutlined, TeamOutlined } from '@ant-design/icons';
import usePrevious from './hooks/usePrevious';

const SEARCH_PROFILE = gql`
  query search($id: Int!) {
    searchProfile(id: $id) {
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
        _1v1 { rank leagueName totalWins totalGames }
        _2v2 { rank leagueName totalWins totalGames }
        _3v3 { rank leagueName totalWins totalGames }
        _4v4 { rank leagueName totalWins totalGames }
        Archon { rank leagueName totalWins totalGames }
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
      best1v1Finish { leagueName timesAchieved }
      bestTeamFinish {leagueName timesAchieved }
    }
    swarmLevels {
      level
      terran { level maxLevelPoints currentLevelPoints }
      zerg { level maxLevelPoints currentLevelPoints }
      protoss { level maxLevelPoints currentLevelPoints }
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
    }
  }
}
`;

const LoadProfile: React.FC<{ id: number, name?: string, mini?: boolean, active?: boolean, toggleProfile?: any }> = ({ id, name, mini, active, toggleProfile }) => {
  const { loading, error, data } = useQuery(SEARCH_PROFILE, {
    variables: { id }
  });

  if (loading) { return <div>Loading... {name}</div>; }
  if (error) { return <div>Error :(</div>; }

  // TODO: find another way to define valid profile
  const { displayName } = data.searchProfile.summary || {};
  if (!displayName) { return null; }


  if (mini) { return (<MiniProfile player={data.searchProfile} active={active} toggleProfile={toggleProfile} />); }
  return (<ProfileBox player={data.searchProfile} />);
}

const FIND_IDS = gql`
  query find($names: [String]!) {
    searchIds(names: $names) {
      id
      name
    }
  }
`;

const RRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
`;

const RRRow = styled.div`
  display: grid;
  grid-template: 1fr 100px;
`;

const ProfilesSelector: React.FC<{ ids: any, handleSelect: any }> = ({ ids, handleSelect }) => {
  const [selected, setSelected] = useState(new Set());

  const toggleProfile = (id: number) => {
    selected.has(id) ? selected.delete(id) : selected.add(id);
    setSelected(new Set([...selected]));
  };

  return (
    <>
      <Alert
        icon={<TeamOutlined />}
        showIcon
        closeText={selected.size > 0 ? <ArrowRightOutlined /> : ''}
        message={`There are more profiles than you expected. Please select the right ones for your request.`}
        type='info'
        onClose={() => handleSelect([...selected])}
      />
      <RRRow>
        <RRow>
          {ids.map(({ id, name }: any) => <LoadProfile mini id={id} name={name} active={selected.has(id)} toggleProfile={toggleProfile} />)}
        </RRow>
      </RRRow>
    </>
  );
}

const LoadFullProfiles: React.FC<{ ids: number[] }> = ({ ids }) => (
  <div>
    {ids.map((id: number) => <LoadProfile id={id} />)}
  </div>
)

const CheckOpponents = () => {
  const [getIds, { loading, data }] = useLazyQuery(FIND_IDS, {
    // onCompleted: ({ searchIds }) => {
    // setIds(searchIds);
    // }
  });
  const [ids, setIds] = useState([]);
  const [input, setInput] = useState([]);
  const [component, setComponent] = useState<ReactNode>();

  const handleInput = (a: any) => setInput(a);

  const handleSingle = () => {
    getIds({ variables: { names: input } });

    if (!loading && data) {
      setIds([...ids]);
    }
  };

  useEffect(() => {
    if (data)
      setIds(data.searchIds);
  }, [data]);

  // TODO: waiting for router :o
  const handleSelect = (selected: number[]) => {
    setComponent(
      <LoadFullProfiles ids={selected} />
    );
  }

  const prevIds = usePrevious(ids);

  useEffect(() => {
    console.log('effect');

    if (ids.length === 0) {
      setComponent(<></>);
      return;
    }
    // if (ids !== prevIds) {
    console.log('IDS: ');
    console.log(ids);
    console.log('PREV:');
    console.log(prevIds);
    setComponent(
      ids.length > input.length
        ? <ProfilesSelector ids={ids} handleSelect={handleSelect} />
        : <LoadFullProfiles ids={ids.map(({ id }) => id)} />
    );
    // }
  }, [ids]);

  const handleMulti = () => { };

  return (
    <>
      <Find
        value={input}
        handleSearch={handleInput}
        handleSingle={handleSingle}
        handleMulti={handleMulti}
      />
      {component}
    </>
  );
};

export default CheckOpponents;