import React from 'react';
import { Select, Tag, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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

const Find :React.FC<IFindProps>  = () => {
  return (
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
  );
};

export default Find;

