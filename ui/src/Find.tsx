import React from 'react';
import { Select, Tag, Button, Progress } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Level from './Level';
import { example_data, example_data2 } from './mock';

const StyledDiv = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  padding: 0 10px;
`;


interface IFindProps { 
};

const children :string[] = [];

const handleChange :any = (value :any) => {
  console.log(`selected: ${value}`);
};


const tagRender = (props :any) => {
  const { label, value, closable, onClose } = props;
  return (
    <Tag color={'gold'} closable={closable} onClose={onClose}>
      {label} 
      </Tag>
  );
};

interface IProfileBoxProps {
  player: any;
};

const ProfileBoxContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  border: 3px solid #000;
  display: flex;
  background: #e0e0e0 
`;

const DataContainer = styled.div``;

const NameContainer = styled.div`
  font: 700 33px "Inconsolata";
  color: #000;
  margin-top: 5px;
  margin-left: 10px;
`;

const LevelsBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ProfileBox :React.FC<IProfileBoxProps> = (props) => (
  <ProfileBoxContainer>
    <img src={props.player.portrait} alt='profile' />
    <div>
    <DataContainer>
      <NameContainer>[{props.player.clanTag}] {props.player.name}</NameContainer>
    </DataContainer>
    <LevelsBox>
      {Object.keys(props.player.swarm).map(
        race => <Level race={race} level={props.player.swarm[race]} />)
      }
    </LevelsBox>
    </div>
  </ProfileBoxContainer>
);

const Find :React.FC<IFindProps>  = () => {
  return (
    <>
    <StyledDiv>
      <StyledSelect
      mode='tags'
      tokenSeparators={[',']}
      onChange={handleChange}
        tagRender={tagRender}
    >
      {children} 
    </StyledSelect>
      <Button type='primary' icon={<SearchOutlined />}>
        Search
      </Button>
    </StyledDiv>
      <div>
        <ProfileBox player={example_data} />
      </div>
      <div>
        <ProfileBox player={example_data2} />
      </div>
    </>
  );
};

export default Find;

