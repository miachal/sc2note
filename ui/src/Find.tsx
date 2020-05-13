import React from 'react';
import { Select, Tag, Button } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  padding: 0 10px;
`;


const children: string[] = [];

const handleChange: any = (value: any) => {
  console.log(`selected: ${value}`);
};


const tagRender = (props: any) => {
  const { label, value, closable, onClose } = props;
  return (
    <Tag closable={closable} onClose={onClose}>
      {label}
    </Tag>
  );
};

const SearchButton = styled(Button)`
width: 64px;
height: 32px;
margin: 0 5px;
`;

interface IFindProps {
  value: any;
  handleSearch: any;
  handleSingle: any;
  handleMulti: any;

};

const Find: React.FC<IFindProps> = ({
  value, handleSearch, handleSingle, handleMulti
}) => {
  return (
    <>
      <StyledDiv>
        <StyledSelect
          mode='tags'
          tokenSeparators={[',']}
          onChange={handleSearch}
          tagRender={tagRender}
          value={value}
        >
          {children}
        </StyledSelect>
        <SearchButton type='primary' icon={<UserOutlined />} onClick={handleSingle} />
        <SearchButton disabled type='primary' icon={<TeamOutlined />} />
      </StyledDiv>
    </>
  );
};

export default Find;

